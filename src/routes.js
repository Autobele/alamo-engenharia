const express = require('express')
const router = express.Router()

const UserController = require('./app/controller/UserController')
const SessionController = require('./app/controller/SessionController')
const FuncionarioController = require('./app/controller/FuncionarioController')
const FerramentaController = require('./app/controller/FerramentaController')
const AtivoController = require('./app/controller/AtivoController')
const ObraController = require('./app/controller/ObraController')

const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')
const dashboardMiddleware = require('./app/middlewares/dashboard')

//Login | Register Routes
router.get('/', guestMiddleware, SessionController.create)
router.post('/signin', guestMiddleware, SessionController.store)

router.post('/', UserController.store)
router.get('/signup', UserController.create)

//App Routes
router.use('/app', authMiddleware)
router.get('/app/dashboard', dashboardMiddleware)
router.get('/app/logout', SessionController.destroy)

//Routes Providers
router.get('/app/providers', FuncionarioController.index)
router.get('/app/providers/register', FuncionarioController.register)
router.post('/app/providers/register/', FuncionarioController.store)
router.get('/app/providers/register/:id', FuncionarioController.show)
router.post('/app/providers/register/:id/edit', FuncionarioController.update)
router.post('/app/providers/change-status/:id', FuncionarioController.changeStatus)


// Routes Ferramentas
router.get('/app/tools', FerramentaController.index)
router.get('/app/tools/register', FerramentaController.register)
router.post('/app/tools/register', FerramentaController.store)

// Routes Ativos
router.get('/app/active', AtivoController.index)
router.get('/app/active/register', AtivoController.register)
router.post('/app/active/register', AtivoController.store)

// Routes Obras
router.get('/app/obras', ObraController.index)
router.get('/app/obras/register', ObraController.register)
router.post('/app/obras/register', ObraController.store)

module.exports = router
