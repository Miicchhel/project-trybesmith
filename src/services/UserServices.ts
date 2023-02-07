import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import UserModel from '../models/UserModel';
import { IUser } from '../interfaces';
// import generateToken from '../utils/JWT';

export default class UserService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public generateToken = (payload: IUser): string =>
    jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '15m', algorithm: 'HS256' });

  public async insertUser(user: IUser): Promise<string> {
    const insertedUser = await this.userModel.insert(user);
    const token: string = this.generateToken(insertedUser);
    return token;
  }
}
