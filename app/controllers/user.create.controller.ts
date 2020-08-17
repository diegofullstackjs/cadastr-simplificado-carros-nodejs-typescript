import {Request,Response} from 'express'
import { getRepository } from 'typeorm';
import UserModel from '../models/User.model';
import { IUserCreate } from '../interfaces';
export default async (req: Request, res: Response) => {
    const payload: IUserCreate = req.body;
    const service = getRepository(UserModel);
    const if_exists = await service.findOne({email: payload.email})
    if(if_exists){
        return res.status(302).json({
            message: "Email já cadastrado"
        })
    }
   await service.insert(payload).then(doc => {
        return res.status(200).json(doc.raw)
    }).catch(e => {
        console.warn(e)
        return res.status(500).json({
            message : "Ocorreu um erro"
        })
    })
    
} 