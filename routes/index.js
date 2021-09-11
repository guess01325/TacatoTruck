import { Router } from 'express'
import menuItemRoutes from './menuItems.js'
import usersRoutes from './users.js'

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRoutes)
router.use('/', menuItemRoutes)

export default router
