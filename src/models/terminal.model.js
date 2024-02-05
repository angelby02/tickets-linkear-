const terminal = (sequelize, type) => {
    return sequelize.define('terminales', {
        id_terminal: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_terminal: type.STRING,
        calle_principal_terminal: type.STRING,
        calle_secundaria_terminal: type.STRING,
        telefono_terminal: type.STRING(99),

        crearTerminal: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarTerminal: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = terminal