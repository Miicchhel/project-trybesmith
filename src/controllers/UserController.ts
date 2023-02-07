import { Request, Response } from 'express';
import UserService from '../services/UserServices';

export default class UserController {
  public userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public insertUser = async (req: Request, res: Response) => {
    const { username, vocation, level, password } = req.body;
    const token = await this.userService.insertUser({ username, vocation, level, password });    
    res.status(201).json({ token });
  };
}