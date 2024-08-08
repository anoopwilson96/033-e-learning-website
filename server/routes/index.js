import express from "express";
import v1Router from "./v1/index.js";

const apiRouter = express.Router();

 apiRouter.use('/v1',v1Router);

// By using V1 and other version we can control the future update.
// const v2Router = express.Router();
// const v3Router = express.Router();





export default apiRouter