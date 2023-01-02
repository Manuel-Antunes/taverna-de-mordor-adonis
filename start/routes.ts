import Route from '@ioc:Adonis/Core/Route'
import './routes/google'

Route.get('/', async () => {
  return { Hello: 'world' }
})
Route.post('/logout', 'SessionsController.destroy')
Route.resource('users', 'UsersController').apiOnly()
Route.post('/adms/:id', 'AdmimsController.store')
Route.post('/masters/:id', 'MastersController.store')
Route.resource('events', 'EventsController')
  .middleware({
    update: ['auth:api'],
    store: ['auth:api'],
    destroy: ['auth:api'],
  })
  .apiOnly()
Route.post('/events/:event_id/boards', 'EventBoardsController.store')
Route.resource('boards', 'BoardsController')
  .middleware({
    update: ['auth:api'],
    store: ['auth:api'],
    destroy: ['auth:api'],
  })
  .apiOnly()

<<<<<<< HEAD
Route.post('/events/:event_id/reviews', 'EventReviewsController.store').middleware(['auth:web'])
Route.post('/masters/:user_id/reviews', 'MasterReviewsController.store').middleware(['auth:web'])
Route.post('/boards/:board_id/reviews', 'BoardReviewsController.store').middleware(['auth:web'])
Route.delete(
  '/boards/:board_id/pending/players/:player_id',
  'PendingPlayersController.destroy'
).middleware(['auth:web'])
Route.post('/boards/:board_id/pending/players', 'PendingPlayersController.store').middleware([
  'auth:web',
])
Route.put('/reviews/:id', 'ReviewsController.update').middleware(['auth:web'])
Route.delete('/reviews/:id', 'ReviewsController.destroy').middleware(['auth:web'])
Route.post('/boards/:board_id/players/:player_id', 'BoardPlayersController.store').middleware([
  'auth:web',
])
Route.delete('/boards/:board_id/players/:player_id', 'BoardPlayersController.destroy').middleware([
  'auth:web',
])
Route.get('/boards/:board_id/chat', 'BoardChatsController.index').middleware(['auth:web'])
Route.get('/notifications', 'NotificationsController.index').middleware(['auth:web'])
Route.put('/notifications/:id', 'NotificationsController.index').middleware(['auth:web'])
=======
Route.post('/events/:event_id/reviews', 'EventReviewsController.store').middleware(['auth:api'])
Route.post('/masters/:user_id/reviews', 'MasterReviewsController.store').middleware(['auth:api'])
Route.post('/boards/:board_id/reviews', 'BoardReviewsController.store').middleware(['auth:api'])
Route.put('/reviews/:id', 'ReviewsController.update').middleware(['auth:api'])
Route.delete('/reviews/:id', 'ReviewsController.destroy').middleware(['auth:api'])
Route.post('/boards/:board_id/players', 'BoardPlayersController.store').middleware(['auth:api'])
Route.get('/boards/:board_id/chat', 'BoardChatsController.index').middleware(['auth:api'])
Route.get('/notifications', 'NotificationsController.index').middleware(['auth:api'])
Route.put('/notifications/:id', 'NotificationsController.index').middleware(['auth:api'])
>>>>>>> origin/api-main
