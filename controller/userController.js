const { Sequelize } = require('sequelize');
const db = require('../config/connection')
const UserModel = db.user;


const userAddController = async (req, res) => {

    // ! create instance of user
    const jane = await UserModel.create({ fName: "Yash" });
    // console.log(jane); // true
    // console.log(JSON.stringify(jane)); //
    // console.log('Jane was saved to the database!');


    // ! update instance of user
    // const jane = await UserModel.create({ fName: "harsh" })
    // jane.lName = "";
    // await jane.save();
    // await jane.update({ fName: "yax" })
    // jane.set({
    //     fName: "Sima",
    // })
    // await jane.save()


    // ! delete instance of user
    await jane.destroy();


    return res.status(201).json(jane)
}

const usersController = async (req, res) => {
    // ? allUsers gets
    const getUsers = await UserModel.findAll({});
    return res.status(200).json(getUsers);
}


const usersByIdController = async (req, res) => {
    // ? singleUser get
    const getUsers = await UserModel.findOne({
        where: { id: req.params.id }
    });
    return res.status(200).json(getUsers);
}

const postDataController = async (req, res) => {

    const body = req.body;
    let storeData;
    if (body.length > 1) {
        storeData = await UserModel.bulkCreate(body);
    }
    else {
        storeData = await UserModel.create(body);
    }
    // const storeData = await UserModel.create(body);
    return res.status(201).json(storeData);

}
const deleteUserByIdController = async (req, res) => {
    const data = await UserModel.destroy({ where: { id: req.params.id } })
    return res.status(200).json({ msg: 'data deleted' })
}
const patchUserByIdController = async (req, res) => {
    const data = await UserModel.update(req.body, { where: { id: req.params.id } });
    return res.status(200).json(data)

}
const queryController = async (req, res) => {
    // res.setHeader('X-create', "create query");
    // const user = await UserModel.create({
    //     fName: 'alice',
    // }, { fields: ['lName', 'fName'] });

    const user = await UserModel.findAll({
        attributes: { include: ['id', [Sequelize.fn('COUNT', Sequelize.col('id')), 'cnt']] }
    });


    return res.status(201).json(user);
}
module.exports = { userAddController, usersController, usersByIdController, postDataController, deleteUserByIdController, patchUserByIdController, queryController }