const ruta=(sequelize,type)=>{
    return sequelize.define('rutas',{
        id_ruta:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        origen_ruta: type.STRING,
        destino_ruta: type.STRING,
        costo: type.STRING,

        crearCiudad:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        actualizarCiudad:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps:false,
    });
}
module.exports = ruta;