// import jwt from 'jsonwebtoken';
// import { IUser } from '../interfaces';

// const JWT_SECRET = process.env.JWT_SECRET as string; // desestruturando eu não consegui

// const generateToken = (payload: IUser): string =>
//   jwt.sign(
//     payload, 
//     JWT_SECRET, 
//     { expiresIn: '15m', algorithm: 'HS256' },
//   );

// export default { generateToken };

// export const authenticateToken = (token) => {
//   try {
//     const result = jwt.verify(token, JWT_SECRET);
//     return { data: result };
//   } catch (error) {
//     return { message: error.message };
//   }
// };
