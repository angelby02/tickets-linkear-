const reserva_ticket = (sequelize, type) => {
    return sequelize.define('reserva_tickets', {
        id_reserva_ticket: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_reserva_ticket: type.DATE,
        hora_reserva_ticket: type.TIME,
        ruta_reserva_ticker: type.STRING(10),
        asiento: type.STRING(20),
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
module.exports = reserva_ticket