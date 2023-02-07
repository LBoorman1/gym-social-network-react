import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  //Takes the encrypted token from the request headers.
  const authHeader = req.headers["authorisation"];
  //console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];

  //Simple check to see if the token exists
  if (token == null) {
    return res.status(403).send({ message: "token not found" });
  }

  //Uses the JWTPRIVATEKEY to verify the token is related to a user
  jwt.verify(token, process.env.JWTPRIVATEKEY, (err, id) => {
    if (err) {
      return res.status(403).send({ message: err.message });
    }

    //Adds the verified userId into the request body
    req.id = id;

    //Calls next to move into the requested end point
    next();
  });
};
