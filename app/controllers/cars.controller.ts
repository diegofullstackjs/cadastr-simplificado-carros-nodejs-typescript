import { Request,Response } from "express";
import CarsModel from '../models/cars.model'
import { getRepository, Like, FindOperator } from "typeorm";
import { ICarsCreate } from "../interfaces";


export async function CreateCar(req: Request, res: Response){
    const payload: ICarsCreate = req.body
    const service = getRepository(CarsModel);
    const find = await service.findOne({ modelo : Like(`${payload.modelo}`)})
    if(find) {
        return res.status(302).json({
            error: true,
            message: "Esse modelo de carro ja existe!"
        })
    }
    //@ts-ignore
    const response = await service.insert({ 
        //@ts-ignore
        provider : req.user.id,
        ano : payload.ano,
        combustivel : payload.combustivel,
        cor : payload.cor,
        marca: payload.marca,
        modelo : payload.modelo,
        preco : payload.preco
    })
    return res.status(200).json(response)
}
export async function list(req: Request, res: Response) {
    const service = getRepository(CarsModel);
    const data = await service.find({})

    return res.status(200).json(data)
}