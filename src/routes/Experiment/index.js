import React from 'react';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';
import LoadingComponent from 'components/Loading';




let AddExperiment = loadable({
    loader: () => import('./components/AddExperiment/Experiment'),
    loading: LoadingComponent
  })
let ViewExperiment = loadable({
    loader: () => import('./components/ViewExperiment/View'),
    loading: LoadingComponent
  })
let Funding = loadable({
    loader: () => import('./components/FundingDetails/Funding'),
    loading: LoadingComponent
  })
  



const Experiment = ({ match }) => (
    <div>
      <Route path={`${match.url}/add-new`} component={AddExperiment}/>
      <Route path={`${match.url}/view`} component={ViewExperiment}/>
      <Route path={`${match.url}/funding`} component={Funding}/>
    </div>
  )

export default Experiment;