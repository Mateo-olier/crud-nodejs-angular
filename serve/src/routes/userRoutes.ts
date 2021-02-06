import { Router } from 'express';
import { userControler } from '../controler/userController'

class UserRouter{
    public router: Router = Router();
    constructor( ){
        this.config();
    }
    config():void {
        this.router.get('/', userControler.list);
        this.router.get('/:id', userControler.listOne);
        this.router.post('/', userControler.createUser);
        this.router.put('/:id',userControler.updateUser);
        this.router.delete('/:id',userControler.deleteUser);
    }
}
const userRoutes = new UserRouter();
export default userRoutes.router;
 