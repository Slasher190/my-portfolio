import { NextApiRequest } from "next";
import jwt from "jsonwebtoken";

export const verifyToken = (req: NextApiRequest) => {
  const token = req.cookies.token || "";
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "kgfjlkrg2gt412g45k4g51%"
    );
    // { userId: 41, iat: 1720368058, exp: 1720371658 } - decoded
    return { user: decoded };
  } catch (err) {
    return { user: null };
  }
};
