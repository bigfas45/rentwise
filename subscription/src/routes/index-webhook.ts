import express, { Request, Response } from 'express';
import {requireAuth, currentUser} from '@rentwise/common';
import {Webhook} from '../models/webhook'
import { db } from '../models/mysql';


const router = express.Router();

router.get('/api/subscription/webhook/:subscription', requireAuth, async (req: Request, res: Response) => {
  const subscription = req.params.subscription;
   
    let sql = "SELECT * FROM `plan` WHERE `plan`=? AND `status`='success'";
    let query = db.query(sql, [subscription], (err, results) => {
        if (err || !results) {
            return res.status(400).json({
                error: 'not found'
            });
        }else{
   res.status(200).send(results);
        }
        db.end();
    });
   


} );

export {router as indexWebhookSubRouter }