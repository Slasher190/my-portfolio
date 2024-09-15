import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export const verifyToken = (req: NextRequest) => {
  const token = req.cookies.get("token")?.value ?? "";
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET ?? "kgfjlkrg2gt412g45k4g51%"
    ) as JwtPayload;
    const userId = decoded?.userId;
    // { userId: 41, iat: 1720368058, exp: 1720371658 } - decoded
    return { user: userId };
  } catch (err) {
    return { user: null };
  }
};
