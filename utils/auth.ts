import jwt from 'jsonwebtoken';

const secret = process.env.NEXT_PUBLIC_SANITY_API_JWT_SECRET as string;
export const signToken = (user: any) => {
  return jwt.sign(user, secret, {
    expiresIn: '30d',
  });
};
