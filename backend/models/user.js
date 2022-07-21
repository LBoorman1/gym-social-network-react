import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import joi from "joi";
import passwordComplexity from "joi-password-complexity";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    emailAddress: {type: String, required: true}
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"});
    return token;
}

const User = mongoose.model('User', userSchema);

const validate = (data) => {
    const schema = joi.object({
        username: joi.string().required().label("username"),
        password: passwordComplexity().required().label("password"),
        emailAddress: joi.string().email().required().label("emailAddress")
    });
    return schema.validate(data);
}

const test = 0;

export {User, validate};
export default test; 
