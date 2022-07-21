import jwt from "jsonwebtoken";

//middleware function to dtermine user from passed token
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorisation"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(403).send({ message: "token not found" });
  }

  jwt.verify(token, process.env.JWTPRIVATEKEY, (err, id) => {
    if (err) {
      return res.status(403).send({ message: error.details[0].message });
    }
    req.id = id;
    next();
  });
};
