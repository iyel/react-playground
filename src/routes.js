import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import CategoriesListPage from './category/CategoriesListPage';
import CategoryPage from './category/CategoryPage';
import LocationPage from './locations/LocationPage';
import LocationsListPage from './locations/LocationsListPage';
import NotFoundPage from './NotFoundPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={CategoriesListPage} />
    <Route path="/locations" component={LocationsListPage} />
    <Route path="/locations/add" mode="add" component={LocationPage} />
    <Route path="/locations/:id/view" mode="view" component={LocationPage} />
    <Route path="/locations/:id/edit" mode="edit" component={LocationPage} />


    <Route path="/category/add" mode="add" component={CategoryPage} />
    <Route path="/category/:id/view" mode="view" component={CategoryPage} />
    <Route path="/category/:id/edit" mode="edit" component={CategoryPage} />

    <Route path="*" component={NotFoundPage} />
  </Route>
);
