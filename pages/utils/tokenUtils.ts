import { JwtPayload, verify } from "jsonwebtoken";
import { NextApiRequest } from "next";

interface Decoded extends JwtPayload {
  userId: number | string;
}

export const verifyToken = (req: NextApiRequest) => {
  const token = req.cookies.token ?? "";
  try {
    const decoded = verify(
      token,
      process.env.JWT_SECRET ?? "kgfjlkrg2gt412g45k4g51%"
    );

    if (typeof decoded === "object" && "userId" in decoded) {
      const { userId, iat, exp } = decoded as Decoded;
      return { user: userId, iat, exp };
    } else {
      return { user: null };
    }
  } catch (err) {
    return { user: null };
  }
};
