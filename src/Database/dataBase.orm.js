const { Sequelize } = require("sequelize");
const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI } = require("../keys");

let sequelize;

// Usar URI de conexión si está disponible
if (MYSQL_URI) {
    sequelize = new Sequelize(MYSQL_URI);
} else {
    // Configuración para parámetros individuales
    sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
        host: MYSQLHOST,
        port: MYSQLPORT,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 1,
            acquire: 30000,
            idle: 10000
        }
    });
}

// Autenticar y sincronizar
sequelize.authenticate()
    .then(() => {
        console.log("Conexión establecida con la base de datos");
    })
    .catch((err) => {
        console.error("No se pudo conectar a la base de datos:", err.message);
    });

sequelize.sync({ force: false })
    .then(() => {
        console.log("Tablas sincronizadas");
    })
    .catch((err) => {
        console.error("Error al sincronizar las tablas:", err.message);
    });



//models routers
    //const holamundoModel = require('../models/holamundo');
    const administradorModel=require('../models/administrador.model');
    const rolesModel = require('../models/roles.models');
    const empleadoModel = require('../models/empleado.model');
    const terminalModel = require('../models/terminal.model');
    const contacto_terminalModel = require('../models/contacto_terminal.model');
    const busModel = require('../models/bus.model');
    const choferModel = require('../models/chofer.model');
    const rutaModel = require('../models/ruta.model');
    const venta_ticketModel = require('../models/venta_ticket.model');
    const reserva_ticketModel = require('../models/reserva_ticket.model');

// sincronia
    //const holamundo = holamundoModel(sequelize, Sequelize);
    const administrador = administradorModel(sequelize, Sequelize);
    const roles = rolesModel(sequelize, Sequelize);
    const empleado = empleadoModel(sequelize, Sequelize);
    const terminal = terminalModel(sequelize, Sequelize);
    const contacto_terminal = contacto_terminalModel(sequelize, Sequelize);
    const bus = busModel(sequelize, Sequelize);
    const chofer = choferModel(sequelize,Sequelize);
    const ruta = rutaModel(sequelize,Sequelize);
    const venta_ticket = venta_ticketModel(sequelize, Sequelize);
    const reserva_ticket = reserva_ticketModel(sequelize, Sequelize);


module.exports = {
    //holamundo,
    administrador,
    roles,
    empleado,
    terminal,
    contacto_terminal,
    chofer,
    ruta,
    bus,
    venta_ticket,
    reserva_ticket

}

// Exportar el objeto sequelize
module.exports = sequelize;