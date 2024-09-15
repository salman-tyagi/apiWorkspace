import jwt, { JwtPayload } from 'jsonwebtoken';
import { Types } from 'mongoose';

export const generateJwt = (
  payload: { _id: Types.ObjectId },
  secretKey: string,
  timeToExpire: string
) => jwt.sign(payload, secretKey, { expiresIn: timeToExpire });

export const verifyJwt = <T = JwtPayload>(
  token: string,
  secretKey: string
): T => jwt.verify(token, secretKey) as T;
