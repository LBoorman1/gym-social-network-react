import express from "express";
import { User, validate } from "../models/user.js";
import bcrypt from "bcrypt";
import cloudinary from "../utils/cloudinary.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const image = req.body.image;
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const email = await User.findOne({ emailAddress: req.body.emailAddress });
    if (email) {
      return res
        .status(409)
        .send({ message: "User with given email address already exists!" });
    }
    const username = await User.findOne({
      emailAddress: req.body.emailAddress,
    });
    if (username) {
      return res
        .status(409)
        .send({ message: "User with given username already exists!" });
    }

    //uses the SALT value in environment to generate a bcrypt salt
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    //uses the bcrypt salt to hash the password
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const result = await cloudinary.uploader.upload(image, {
      folder: "profilePics",
    });

    await new User({
      username: req.body.username,
      password: hashPassword,
      emailAddress: req.body.emailAddress,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    }).save();

    // await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

export default router;
