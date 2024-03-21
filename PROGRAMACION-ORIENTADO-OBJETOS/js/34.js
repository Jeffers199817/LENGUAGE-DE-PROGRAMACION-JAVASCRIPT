async function obtenerEmpleados() {
    
    const archivo ='/PROGRAMACION-ORIENTADO-OBJETOS/js/empleados.json';
     /*fetch(archivo)
        .then(resultado => {
            return resultado.json();
        
        })
        .then(datos => {
            // console.log(datos.Empleados);
            

            const { empleados } = datos;
            //console.log(empleados);

            empleados.forEach(empleado => {
                console.log(empleados);
        
                
     
            })
        }) */
    
    
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados();

// no se ejecuta el codigo en el servidor. 