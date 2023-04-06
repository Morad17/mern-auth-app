import { Router } from 'express'

const router = Router()

//Post //

router.route('/register').post((req, res) => res.json('register route'))

//Get //