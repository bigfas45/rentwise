import express, {Request, Response} from 'express';
import {currentUser} from '@rentwise/common';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req : Request, res : Response) => {
    res.send({
        currentuser: req.currentUser || null
    });
   
});

export {
    router as currentUserRouter
};
