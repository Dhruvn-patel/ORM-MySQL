const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection')

module.exports = (sequelize, DataTypes, Model) => {
    /*
! 1st ways to create model
const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    // Other model options go here
    tableName: "Employees",
    // timestamps: false
});
*/


    // ! 2nd way to create model

    class User extends Model { }

    User.init({
        fName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Patel'
        }
    }, {

        sequelize,
        modelName: 'Employees',
        createdAt: 'created_data_time',
        updatedAt: false
    })


    // `sequelize.define` also returns the model
    console.log(User === sequelize.models.User); // true
    // module.exports = User;

    return User;

}


