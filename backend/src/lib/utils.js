import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, 
    httpOnly: true, // prevent xss (cross-site scripting attack) 
    sameSite: "strict", // only send cookie to same origin (not cross-origin) CSRF protection 
    secure: process.env.NODE_ENV !== "development", // only send cookie over HTTPS in development
  })
};
