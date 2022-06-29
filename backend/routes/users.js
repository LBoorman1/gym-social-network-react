import express from 'express'
import { User, validate } from '../models/user.js'
import bcrypt from "bcrypt"

const router = express.Router();

router.post("/", async(req, res) => {
    try {
        const {error} = validate(req.body);
        if(error) {
            return res.status(400).send({ message: error.details[0].message});
        }
        const email = await User.findOne({ email: req.body.emailAddress });
        if(email) {
            return res.status(409).send({ message: "User with given email address already exists!"});
        }
        const username = await User.findOne({ email: req.body.emailAddress });
        if(username) {
            return res.status(409).send({ message: "User with given username already exists!"});
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({...req.body, password:hashPassword}).save();
        res.status(201).send({ message: "User created successfully"})


    } catch (error) {
        res.status(500).send({message: "Internal Server Error"});
    }
});

export default router;