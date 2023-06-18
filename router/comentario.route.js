import express from 'express';
import { createCommentPost, getPostWIthComment } from '../controller/ComentarioController.js';
import {verifyToken} from '../middleware/auth.js'
const router = express.Router();

router.post('/comentarios/obtener',verifyToken,getPostWIthComment );
router.post('/comentarios/create',verifyToken, createCommentPost);


export default router;