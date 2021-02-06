import { Request,Response } from 'express';
import pool from '../db';
class UserControler{

    public async list (req: Request, res:Response){
        const user = await pool.query('SELECT * FROM user');
        res.json(user);
    }
    public async listOne (req: Request, res:Response){
        const { id } = req.params;
        const userOne = await pool.query(`SELECT * FROM user WHERE iduser= ${ id }`);
        if(userOne.length > 0){
            return res.json(userOne[0]);
        }
        res.status(404).json({"mensaje":"no existe"})
    }
    
    public async createUser(req:Request, res: Response):Promise<void>{
        await pool.query('INSERT INTO user set ?', [req.body]);
        res.json({"mensaje":"guardado"});
    }
    
    public deleteUser(req :Request, res:Response){
        const { id } = req.params;
        pool.query(`DELETE FROM user WHERE iduser= ${ id }`);
        res.json({"mensaje":"Eliminado"})
    }
    
    public async updateUser(req:Request, res:Response):Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE user set? WHERE iduser = ?',[req.body, id]);
        res.json ({"mensaje":"actualizado"})
    }
}

export const userControler = new UserControler();
