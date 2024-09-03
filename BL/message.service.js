import { create, read, readOne } from "../DL/controllers/message.controller.js";
import { parseFileContent } from "../functions.js";

export const createMessageService = (fileContent, rav, startDate) => create(parseFileContent(fileContent, rav, startDate));


export const readMessagesService = (filter = {}) => {
    const { from, to, limit = 50 } = filter;

    const start = from ? new Date(new Date(from).setHours(8, 0, 0, 0)) : null;
    let end;

    if (to) {
        end = new Date(new Date(to).setHours(23, 0, 0, 0));
    } else if (start) {
        end = new Date(start);
        end.setDate(end.getDate() + 1);
        end.setHours(23, 0, 0, 0);
    } else {
        end = null;
    }

    const query = {};
    if (start) query.date = { $gte: start };
    if (end) query.date = { ...query.date, $lt: end };

    return read(query).limit(limit);
};

export const readMessageService = (filter) => readOne(filter);


