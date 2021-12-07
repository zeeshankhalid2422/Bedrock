import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'
import loadable from 'react-loadable';
import LoadingComponent from 'components/Loading';
import { Layout } from 'antd';
const { Content } = Layout;


let AsyncDashboard = loadable({
  loader: () => import('../../../routes/dash'),
  loading: LoadingComponent
})

// let AsyncExperiment = loadable({
//   loader: () => import('../../../routes/Experiment/'),
//   loading: LoadingComponent
// })

let AsyncException = loadable({
  loader: () => import('routes/exception/routes/404.js'),
  loading: LoadingComponent
})

// let AsyncView = loadable({
//   loader: () => import('routes/Experiment/View'),
//   loading: LoadingComponent
// })



class AppContent extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <Content id='app-content'>
        <Switch>
        <Route path={`${match.url}/dash`} component={AsyncDashboard} />
        {/* <Route path={`${match.url}/experiment`} component={AsyncExperiment}/> */}
        <Route path="*" component={AsyncException} />
        </Switch>
      </Content>
    );
  }
}

export default withRouter(AppContent);
