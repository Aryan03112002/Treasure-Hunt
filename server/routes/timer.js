import express from "express";
// middlewares
import { requireSignin, isAdmin } from "../middlewares/auth.js";

import { setstartTimer } from "../controllers/timer.js";

const router = express.Router();

router.get("/getst", requireSignin, setstartTimer);




export default router;