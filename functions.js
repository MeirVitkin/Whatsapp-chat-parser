const fs = require("fs");




const isSamesender = (result, nextMessage) => {
    return result.isQuestion&& nextMessage.includes(result.sender)
}


const trashMessage = (mes) => {
    mes = mes.trim();
    return isMediaOmittedMessage(mes) ||
        isThanksMessage(mes) ||
        isDeletedMessage(mes)
}

const isThanksMessage = (mes = '') => {
    const mesLength = mes.split(" ").length;
    return (mes.includes('תודה רבה') && mesLength < 4) ||
        (mes.includes('תודה הרב') && mesLength < 4) ||
        (mes.includes('תודה רבה הרב') && mesLength < 5) ||
        (mes.includes('תודה') && mesLength < 3)
}

const isDeletedMessage = (mes = '') => {
    return mes.includes('This message was deleted')
}

const isMediaOmittedMessage = (mes) => {
    return mes.includes('<Media omitted>') && mes.split(" ").length === 2;
}

const parseFileToArr = (filePath) => {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const regex = /(\d{1,2}\/\d{1,2}\/\d{2,4}, \d{2}:\d{2}) - /g;
    return fileContent.split(regex).filter(Boolean);
}

const createMessageObj = (date, messageContent, lastObject) => {
    const regex = /([^:]+):\s*/;
    const match = messageContent.match(regex);
    if (!match) return
    const sender = match[1];
    const message = messageContent.slice(match[0].length);
    const isQuestion = sender !== 'הרב ברוך אפרתי, (טאטע)';
    if (trashMessage(message)) return

    if (lastObject) {
         lastObject.messages.push({ date, message })
         return
    }

    return { sender, messages: [{ date, message }], isQuestion }
}

module.exports = { parseFileToArr, createMessageObj, isSamesender }