import express from 'express';
import { createMessageService, readMessagesService } from '../BL/message.service.js';
import { create, read } from '../DL/controllers/editedQa.controller.js';
const router = express.Router()

router.post('/upload', async (req, res) => {
    try {
        const { qa } = req.body
        if (!qa) throw new Error('QA data is required');
        const result = await create(qa);
        res.send(result)
    } catch (err) {
        res.status(err.code || 405).send(err.msg || err.message || "wrong");
    }
})

export default router;