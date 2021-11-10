import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import loadable from 'react-loadable';
import LoadingComponent from 'components/Loading';
import { Layout } from 'antd';

const { Content } = Layout;


// var auth = JSON.parse(localStorage.getItem('auth'));

//Private Route ........
// const PrivateRoute = props => {
//   const { component: Component, ...rest } = props;
//   return (
//     <Route
//       {...rest}
//       render={routeProps =>
//         checkAuth() ? (
//           <Component {...routeProps} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/user/login',
//               state: { from: routeProps.location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };
// const checkAuth = () => {

//   if (auth == null) {
//     return false;
//   } else {
//     return true;
//   }

// };

let AsyncException = loadable({
  loader: () => import('routes/exception/routes/404.js'),
  loading: LoadingComponent
})

let AsyncDashboard = loadable({
  loader: () => import('routes/dashboard/'),
  loading: LoadingComponent,
});

let AsyncExperiment = loadable({
  loader: () => import('routes/Experiment/'),
  loading: LoadingComponent,
});

let AsyncAuth = loadable({
  loader: () => import('routes/auth'),
  loading: LoadingComponent,
});

class AppContent extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <Content id="app-content">
        <Switch>
          <Route path={`${match.url}/dashboard`} component={AsyncDashboard} />
          <Route path={`${match.url}/experiment`} component={AsyncExperiment} />
          <Route path={`${match.url}/auth`} component={AsyncAuth} />
          <Route path="*" component={AsyncException} />
        </Switch>
      </Content>
    );
  }
}

export default withRouter(AppContent);
