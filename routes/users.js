import { Router } from 'express'
import * as controllers from '../controllers/users.js'

const router = Router()

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/verify', controllers.verify)
router.get('/users/:id', controllers.getUser)

router.get('/users/:id/menu', controllers.getUserProducts)
router.get('/users/:id/menu/:menuItemId', controllers.getUserProduct)
router.post('/users/:id/menu', controllers.createUserProduct)
router.put('/users/:id/menu/:menuItemId', controllers.updateUserProduct)
router.delete('/users/:id/menu/:menuItemId', controllers.deleteUserProduct)

export default router
