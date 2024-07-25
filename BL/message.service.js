import { create, read, readOne } from "../DL/controllers/message.controller.js";
import { parseFileContent } from "../functions.js";


export const createMessageService = (fileContent, rav, startDate, endDate) => create(parseFileContent(fileContent, rav, startDate, endDate));


export const readMessagesService = (filter = {  }) => {
    // const { from, to, limit } = filter;
    const _id = '66a23df4c345757d5f74fbeb'

    return read();
};

export const readMessageService = (filter) => readOne(filter);


