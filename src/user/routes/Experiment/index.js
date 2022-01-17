import React from 'react';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';
import LoadingComponent from 'components/Loading';

let ViewExperiment = loadable({
  loader: () => import('./components/ViewExperiment/View'),
  loading: LoadingComponent,
});

const Experiment = ({ match }) => (
  <div>
    <Route path={`${match.url}/view`} component={ViewExperiment} />
  </div>
);

export default Experiment;
