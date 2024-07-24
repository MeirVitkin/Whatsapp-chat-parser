const chatModel = require('../models/chat.model')
require('../models/user.model')

// CRUD
async function create(data) {
    return await chatModel.create(data)
}


async function read(filter, select = '', toPopulate = 'to', fromPopulate = 'msg.from') {
    return await chatModel.find(filter, select)
        .populate(toPopulate)
        .populate(fromPopulate);
};


async function readOne(filter, select ='', populate = {}) {
    let query = await chatModel.findOne(filter, select);
    if (populate && populate.toPopulate && query) await query.populate("to");
    if (populate && populate.fromPopulate && query) {
        await query.populate({
            path: 'msg.from',
            select: '_id fullName avatar'
        });
    }
    return query;
  }



async function update(id, data) {
    return await chatModel.findByIdAndUpdate({ _id: id }, data, { new: true })
}

// async function del(id) {
//     return await chatModel.deleteOne({ _id: id });
// }

module.exports = { create, read, readOne, update }