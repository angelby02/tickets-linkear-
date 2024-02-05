const venta_ticket = (sequelize, type) => {
    return sequelize.define('venta_tickets', {
        id_venta_ticket: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_venta_ticket: type.DATE,
        hora_venta_ticket: type.TIME,
        ruta_venta_ticker: type.STRING(10),
        asiento: type.STRING(4),
        precio: type.STRING

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
module.exports = venta_ticket