import express from 'express';
import multer, { memoryStorage } from 'multer'
import { createMessageService, readMessageService, readMessagesService } from '../BL/message.service.js';

const router = express.Router(),
    upload = multer({ storage: memoryStorage() });


router.post('/uploadData', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) throw ({ code: 400, msg: 'No file uploaded' })
        if (!req.file.mimetype === 'text/plain') throw ({ code: 400, msg: 'The file is a text file' })

        const fileContent = req.file.buffer.toString('utf-8');
        const result = createMessageService(fileContent);
        res.send(result)

    } catch (err) {
        res.status(err.code || 405).send(err.msg || err.message || "wrong");
    }
});
router.get('/',async (req, res)=>{
    try {
        // const { from, to, limit } = req.body;
        const result = await readMessagesService();
        res.send(result)

    } catch(err){
        res.status(err.code || 405).send(err.msg || err.message || "wrong");
    }
})

export default router;


