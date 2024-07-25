import { create, read, readOne } from "../DL/controllers/message.controller.js";
import { parseFileContent } from "../functions.js";


export const createMessageService = (fileContent) => {
    return parseFileContent(fileContent);


    //  create(message)
};

export const readMessagesService = (filter) => read(filter);
export const readMessageService = (filter) => readOne(filter);


