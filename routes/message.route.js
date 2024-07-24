import express from 'express';

const router = express.Router();

router.post('/:messageId', async (req, res) => {
    try {
        const userEmail = req.body.user.email;
        const messageId = req.params.messageId;
        const isRead = req.body.isRead;

        // const result = await messageService.updateIsReadMessage(userEmail, messageId, isRead);
        res.send('result');
    } catch (err) {
        res.status(405).send(err.msg || err.message || "wrong");
    }
});

export default router;
