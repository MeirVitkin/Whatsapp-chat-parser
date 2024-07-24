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
    return mes.includes('<Media omitted>')
}
module.exports = { trashMessage }