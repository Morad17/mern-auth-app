import UserModel from "../model/User.model.js"
import bcrypt from 'bcrypt'

// Post: http://localhost:8080/api/register

export async function register(req, res){
    
    try{
        const {username, password, profile, email } = req.body
        // check existing user //
        const existUsername = new Promise((resolve,reject) => {
            UserModel.findOne({username}), function(err, user){
                if(err) reject(new Error(err))
                if(user) reject({ error: "Please use a unique username"})

                resolve()
            }
        })

        const existEmail = new Promise((resolve,reject) => {
            UserModel.findOne({email}), function(err, user){
                if(err) reject(new Error(err))
                if(user) reject({ error: "Please use a unique email"})

                resolve()
            }
        })

        Promise.all([existUsername, existEmail])
        .then(() => {
            if (password){
                bcrypt.hash(password, 10)
                    .then( hashedPassword => {
                        
                        const user = new UserModel({
                            username,
                            password: hashedPassword,
                            profile: profile || '',
                            email
                        })

                        user.save()
                            .then(result => res.status(201).send({msg: "User Registered"}))
                            .catch(error => res.status(500).send({error}))

                    }).catch(error => {
                        return res.status(500).send({ error: "enable to encrypt password"})
                    })
            }
        }).catch(error => {
            return res.status(500).send({error})
        })
    } catch {
        return res.status(500).send(error)
    }
}

// POST: http://localhost:8080/api/login //
    // @params: {
    //     "username": "example",
    //     "password": "pass123"
    // }

// Post: http://localhost:8080/api/register

// Get: http://localhost:8080/api/user/example

export async function getUser(req, res){
    res.json('get user')
}

// PUT: http://localhost:8080/api/updateUser

export async function updateUser(req, res){
    res.json('update user')
}

// GET: http://localhost:8080/api/generateOtp

export async function generateOtp(req, res){
    res.json('generate Otp route')
}

// GET: http://localhost:8080/api/verifyOtp

export async function verifyOtp(req, res){
    res.json('verify Otp route')
}

// GET: http://localhost:8080/api/createResetSession

export async function createResetSession(req, res){
    res.json('reset password')
}