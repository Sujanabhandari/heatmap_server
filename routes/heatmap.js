import express from 'express';

let dataRouter = express.Router();
import { getAllData } from '../controllers/HeatMap.js';

/* GET users listing. */
dataRouter.route("/alldata").get(getAllData)
export default dataRouter;
