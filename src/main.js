/**
 * Created by dmitri on 08/07/15.
 */
'use strict';

import React from 'react';
import Router from 'react-router';
import Tester from "./Tester";
import rootRoute from './root-route';
var {DefaultRoute, Route, Routes} = Router;

var routes = (
  <Route name="app" path={rootRoute} handler={Tester}>
    <DefaultRoute name="home" handler={Tester} />
</Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  document.body.style.margin = '0px';
  document.body.style.position = 'relative';
  document.body.style.boxSizing = 'border-box';
  document.body.style.minHeight = '100%';
  document.body.style.color = '#F5F5F5';
  document.body.style.padding = '0px';
  document.body.style.height = '100%';
  document.body.style.width = '100%';
  document.body.style.fontFamily = "'Roboto Condensed'";
  document.body.style.fontWeight = '300';
  React.render(< Handler />, document.body);
});