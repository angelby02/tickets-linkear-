const empleado = (sequelize, type) => {
    return sequelize.define('empleados', {
        id_empleado: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres_empleado: type.STRING,
        cedula_empleado: type.STRING,
        fecha_nacimiento_empleado: type.STRING,
        sexo_empleado: type.STRING,
        email_empleado: type.STRING,
        celular_empleado: type.STRING,
        rol_empleado: type.STRING,
        
        crearEmpleado: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarEmpleado: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = empleado