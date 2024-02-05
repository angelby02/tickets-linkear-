
const contacto_terminal = (sequelize, type) => {
    return sequelize.define('contacto_terminales', {
        id_contacto_terminal: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        telf_principal_terminal: type.STRING,
        telf_secundaria_terminal: type.STRING,
        email_terminal: type.STRING(99),
        /*
        crearTerminal: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarTerminal: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }*/
    }, {
        timestamps: false,
    });
}
module.exports = contacto_terminal;