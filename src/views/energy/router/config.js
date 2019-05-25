const ROUTES = [
  {
    path: '/',
    name: 'Index',
    component: 'Index'
  },
  {
    path: '/list',
    name: 'List',
    component: 'List'
  }, {
    path: '*',
    redirect: '/'
  }];
module.exports = ROUTES;
