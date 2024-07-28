export const parseFileContent = (fileContent, rav, startDate) => {
    const lines = parseFileToArr(fileContent, startDate),
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

export const parseFileToArr = (fileContent, startDate) => {
    const regex = /(\d{1,2}\/\d{1,2}\/\d{2,4}, \d{2}:\d{2}) - /g;
    let lines = fileContent.split(regex).filter(Boolean);
    if (startDate) {
        const startIndex = createNewBuffer(lines, startDate);
        lines = lines.slice(startIndex-4);
    }
    return lines;
}


const createNewBuffer = (lines, startDate) => {
    let rigth = lines.length - 1;
    let left = 0;
    while (left < rigth) {
        let current = Math.floor((rigth + left) / 2);
        if (current % 2 === 1) current++;
        const comparison = comperDate(lines[current], startDate);
        if (comparison === 0) return current;
        if (comparison === -1) left = current;
        else rigth = current;
    }
};


const comperDate = (lineDate, startDate) => {
    const line = new Date(lineDate);
    const start = new Date(startDate);
    if (line < start) return -1;
    else if (line > start) return 1;
    else return 0;
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