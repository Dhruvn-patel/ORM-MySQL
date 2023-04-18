
module.exports = (sequelize, DataTypes, Model) => {
    const Contact = sequelize.define('Contact', {
        // Model attributes are defined here
        Address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Landmark: {
            type: DataTypes.STRING
            // allowNull defaults to true
        }
    }, {
        // Other model options go here
        tableName: "Contact_tb",
        // timestamps: false
    });

    // `sequelize.define` also returns the model
    console.log(Contact === sequelize.models.Contact); // true

    // module.exports = Contact;
    return Contact
}