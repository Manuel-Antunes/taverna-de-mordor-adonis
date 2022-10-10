import Route from '@ioc:Adonis/Core/Route'
import './routes/google'

Route.get('/', async () => {
  return { Hello: 'world' }
})
Route.post('/logout', 'SessionsController.destroy')
Route.resource('users', 'UsersController')
Route.post('/adms/:id', 'AdmimsController.store')
Route.post('/masters/:id', 'MastersController.store')
Route.resource('events', 'EventsController').middleware({
  create: ['auth:api'],
  update: ['auth:api'],
  store: ['auth:api'],
  edit: ['auth:api'],
  destroy: ['auth:api'],
})
Route.post('/events/:event_id/boards', 'EventBoardsController.store')
Route.resource('boards', 'BoardsController').middleware({
  create: ['auth:api'],
  update: ['auth:api'],
  store: ['auth:api'],
  edit: ['auth:api'],
  destroy: ['auth:api'],
})

Route.post('/events/:event_id/reviews', 'EventReviewsController.store').middleware(['auth:api'])
Route.post('/masters/:user_id/reviews', 'MasterReviewsController.store').middleware(['auth:api'])
Route.post('/boards/:board_id/reviews', 'BoardReviewsController.store').middleware(['auth:api'])
Route.put('/reviews/:id', 'ReviewsController.update').middleware(['auth:api'])
Route.delete('/reviews/:id', 'ReviewsController.destroy').middleware(['auth:api'])
Route.post('/boards/:board_id/players', 'BoardPlayersController.store').middleware(['auth:api'])
Route.get('/boards/:board_id/chat', 'BoardChatsController.index').middleware(['auth:api'])
Route.get('/notifications', 'NotificationsController.index').middleware(['auth:api'])
Route.put('/notifications/:id', 'NotificationsController.index').middleware(['auth:api'])
