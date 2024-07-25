import { create, read, readOne } from "../DL/controllers/message.controller.js";
import { parseFileContent } from "../functions.js";

export const createMessageService = (fileContent, rav, startDate) => create(parseFileContent(fileContent, rav, startDate));


export const readMessagesService = (filter) => read(filter);
export const readMessageService = (filter) => readOne(filter);


