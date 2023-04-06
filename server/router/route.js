import { Router } from 'express'

const router = Router()

//Post //

router.route('/reg').post((req, res) => res.json('register route'))

//Get //


export default router