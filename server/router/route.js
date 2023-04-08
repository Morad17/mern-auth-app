import { Router } from 'express'

//Import Controllers //

import * as controller from '../controllers/appController.js'

const router = Router()

//Post //

router.route('/register').post(controller.register)
router.route('/authenticate').post((req,res) => res.end())
// router.route('/login').post(controller.login)

//Get //
router.route('/user/:username').get(controller.getUser)
router.route('/generateOtp').get(controller.generateOtp)
router.route('/verifyOtp').get(controller.verifyOtp)
router.route('/createResetSession').get(controller.createResetSession)


//Put//
// // router.get('/updateUser').put(controller.updateUser)
// router.get('/resetPassword').put(controller.resetPassword)

export default router