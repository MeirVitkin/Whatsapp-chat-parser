import { create, read, readOne } from "../DL/controllers/message.controller.js";
import { parseFileContent } from "../functions.js";


export const createMessageService = async (fileContent) => {
    return await create(parseFileContent(fileContent))
};

export const readMessagesService = (filter) => read(filter);
export const readMessageService = (filter) => readOne(filter);


