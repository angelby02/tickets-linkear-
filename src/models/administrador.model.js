const administrador = (sequelize, type) => {
    return sequelize.define(
        "administrador", {
            
            id: {
                type: type.INTEGER,
                autoIncrement: true,
                primaryKey: true,
              },
            nombreAdmin:{
                 type: type.STRING(20),
                },
            password: {
                   type: type.STRING(255),
                }

        }
    );
};
module.exports = administrador;