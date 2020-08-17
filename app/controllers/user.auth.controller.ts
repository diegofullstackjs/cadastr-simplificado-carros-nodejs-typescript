import {Request,Response} from 'express'
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken'
import UserModel from '../models/User.model';
import { IUserCreate } from '../interfaces';
export default async (req: Request, res: Response) => {
    const payload: IUserCreate = req.body;
    const service = getRepository(UserModel);
    const user_exists = await service.findOne({email: payload.email})
    if(user_exists){
        if(user_exists.password !== payload.password){
            return res.status(200).json({
                error: true,
                message: 'Senha incorreta',
              });
        }
        const token = jwt.sign({
            id: user_exists.id,
            name: user_exists.name
        },String(process.env.secret),{
            expiresIn: '7d'
        })
        return res.status(200).json({
            user_exists,
            token
          });
    } else {
        return res.status(404).json({
            error: true,
            message: 'Usuario nao encontrado',
          });
    }
}