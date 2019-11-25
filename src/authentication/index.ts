import jwt from 'jsonwebtoken';

const secret = 'secret';

export function createToken(userId: string): string {
  const expiration = Math.floor(Date.now() / 1000) + (60 * 60 * 24); // One day
  return jwt.sign({
    id: userId,
    exp: expiration,
  }, secret);
}

export async function verifyToken(token: string): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        reject(error);
      }
      // @ts-ignore
      resolve(decoded.id);
    });
  });
}
