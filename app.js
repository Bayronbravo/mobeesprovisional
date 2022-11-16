const cargarPelicula = async() => {
    try {
        const respuesta = await fetch('https://movapitwk.herokuapp.com/api/movies');
        //si es correcto
        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let peliculas = '';
            datos.forEach(pelicula =>{
                peliculas +=`
                <div class="pelicula"> 
                    <img class="poster" src="${pelicula.url}">
                    <h3 class="titulo">${pelicula.title}</h3>
                    <h6>Director = "${pelicula.director}"</h6>
                </div>
                `;
            });

            document.getElementById('contenedor').innerHTML = peliculas;


        } else if(respuesta.status === 401){
            console.log('F');
        } else if(respuesta.status === 404){
            console.log('La pelicula no existe')
        }
    } catch(error){
        console.log(error);
    }
}

cargarPelicula();