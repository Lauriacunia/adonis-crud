'use strict'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// No necesita que importe el controlador porque lo hace automaticamente

Route.get('/productos', 'ProductosController.getAll');
Route.get('/productos/:id', 'ProductosController.getOne');
Route.post('/productos', 'ProductosController.create');
Route.put('/productos/:id', 'ProductosController.update');
Route.delete('/productos/:id', 'ProductosController.delete');
