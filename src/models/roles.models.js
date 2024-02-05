const roles = (sequelize, type) => {
    return sequelize.define(
        "roles", {
            
            id_rol: {
                type: type.INTEGER,
                autoIncrement: true,
                primaryKey: true,
              },
            tipo_rol:type.STRING(20),   
            /* 
            crear_Rol: {
                type: 'TIMESTAMP',
                defaultValue: type.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
            actualizar_Rol: {
                type: 'TIMESTAMP',
                defaultValue: type.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            }*/
        }, {
            timestamps: false,
        }
    );
};
module.exports = roles;