import { Request,Response } from 'express';

class IndexControler{
   public index (req: Request, res:Response){
        res.send('hello')
    }
}

export const indexControler = new IndexControler();
