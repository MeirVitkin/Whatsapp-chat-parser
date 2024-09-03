import express from 'express';
import multer, { memoryStorage } from 'multer'
import { createMessageService, readMessageService } from '../BL/message.service.js';

const router = express.Router(),
    upload = multer({ storage: memoryStorage() });

router.post('/', async (req, res) => {
    try {
        const { from, to, limit } = req.body;
        const result = await readMessagesService({ from, to, limit });
        res.send(result)

    } catch (err) {
        res.status(err.code || 405).send(err.msg || err.message || "wrong");
    }
})


router.post('/uploadData', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) throw ({ code: 400, msg: 'No file uploaded' })
        if (!req.file.mimetype === 'text/plain') throw ({ code: 400, msg: 'The file is a text file' })
        const { rav, startDate } = req.body;
        const fileContent = req.file.buffer.toString('utf-8');
        await createMessageService(fileContent, rav, startDate);
        res.send({ result: 'ok' })

    } catch (err) {
        res.status(err.code || 405).send(err.msg || err.message || "wrong");
    }
});
router.post('/',async (req, res)=>{
    try {
        const { from, to, limit } = req.body;
        const result = await readMessagesService({from, to, limit});
        res.send(result)

    } catch(err){
        res.status(err.code || 405).send(err.msg || err.message || "wrong");
    }
})

export default router;