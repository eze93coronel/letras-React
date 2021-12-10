import React,{useState} from 'react'
 

const Formulario = ({guardarBusquedaLetra}) => {
  const [busqueda,guardarBusqueda] = useState({
  artista : '',
  cancion : ''

  })
 // sate de error 
 const [error,guardarError] = useState(false)

 // extraemos avalores de artista y cancio colocamoss como values
  const {artista,cancion} = busqueda;
 

  //funcion de cada input para leer el contenido
  
  const actualizarState = e =>{
    guardarBusqueda({
     ...busqueda, 
     [e.target.name] : e.target.value

    })
  }

  // consulatra las apis atraves de una funcion 
  
  const buscarInformacion = e =>{
     e.preventDefault();

     if(artista.trim() === ''||cancion === ''){
       guardarError(true)
       return; 
     }
     guardarError(false)
     // si todo va bien, pasar al componente principal
     guardarBusquedaLetra(busqueda);
  }
return (
     
    <div className="bg-info">
      
    {error ? <p className="alert alert-danger text-center p-2">Todos los Campos son Obligatorios</p> : null}

   <div className="container">

  <div className="row">


        <form 
        onSubmit={buscarInformacion}
         className="col card text-white bg-transparent mb-5 pt-5 pb-2"
         >

       <fieldset>

    <legend className="text-center">Buscador Letras Canciones</legend>
       
     <div className="row">
     <div className="col-md-6">
      <div className="form-group" >

          <label>Artista</label>
          <input 
          type="text"
           className = "form-control"
           name="artista"
           placeholder="Nombre Artista"
           onChange={actualizarState}
           value={artista}
            />
      </div>
    

      </div>   



     <div className="col-md-6"> 
     <div className="form-group" >

<label>Cancion</label>
<input 
type="text"
className = "form-control"
name="cancion"
placeholder="Nombre Cancion"
onChange={actualizarState}
value={cancion}
/>
</div>
     
     
     
     
     </div>   
   

     </div>

      <button type="submit" className="btn btn-primary float-right"> Buscar</button>
       </fieldset>

        </form>

  </div>

   </div>

    </div>

);

}
 
export default Formulario;