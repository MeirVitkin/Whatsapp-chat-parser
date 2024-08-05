import { create, read, readOne } from "../DL/controllers/message.controller.js";
import { parseFileContent } from "../functions.js";

export const createMessageService = (fileContent, rav, startDate) => create(parseFileContent(fileContent, rav, startDate));


export const readMessagesService = (filter = {}) => {
    const { from, to, limit = 50 } = filter;

    const start = from ? new Date(from) : null;
    const end = to ? new Date(to) : null;

    const query = {};
    if (start) query.date = { $gte: start };
    if (end) query.date = { ...query.date, $lt: end };

    return read(query).limit(limit);
};

export const readMessageService = (filter) => readOne(filter);