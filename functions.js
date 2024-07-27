export const parseFileContent = (fileContent, rav) => {
    const lines = parseFileToArr(fileContent),
        arr = [];

    for (let i = 0; i < lines.length; i += 2) {
        const date = new Date(lines[i]);
        const messageContent = lines[i + 1];
        const result = createMessageObj(date, messageContent, rav)

        if (result) arr.push(result);
    }
    return arr
}

const trashMessage = (mes) => {
    mes = mes.trim();
    return isMediaOmittedMessage(mes) ||
        isThanksMessage(mes) ||
        isDeletedMessage(mes)
}

const isThanksMessage = (mes = '') => {
    //  length <=14 >> includes thanks
    if (mes.length() > 14) return
        const mesLength = mes.split(" ").length;
    return (mes.includes('תודה רבה') && mesLength < 4) ||
        (mes.includes('תודה הרב') && mesLength < 4) ||
        (mes.includes('תודה רבה הרב') && mesLength < 5) ||
        (mes.includes('תודה') && mesLength < 3)
}


const isDeletedMessage = (mes) => {
    return mes === 'This message was deleted\r\n';
}
const isMediaOmittedMessage = (mes) => {
    return mes.includes('<Media omitted>') && mes.split(" ").length === 2;
}

export const parseFileToArr = (fileContent) => {
    const regex = /(\d{1,2}\/\d{1,2}\/\d{2,4}, \d{2}:\d{2}) - /g;
    return fileContent.split(regex).filter(Boolean);
}

export const createMessageObj = (date, messageContent, rav) => {
    const match = messageContent.split(":")
    if (match.length == 1) return
    const sender = match[0];
    const isQuestion = sender !== (rav || 'הרב ברוך אפרתי, (טאטע)');
    const message = match.slice(1).join("");
    if (isQuestion && trashMessage(message)) return
    let res = { date, message, isQuestion }
    if (isQuestion) res.sender = sender

    return res
}