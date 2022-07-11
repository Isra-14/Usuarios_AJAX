var btn = document.getElementById('btn_cargar_usuarios')
var loader = document.getElementById('loader') //* rueda de carga de elementos

btn.addEventListener('click', function(){
    var peticion = new XMLHttpRequest() //* crea una peticion
    // peticion.open('GET', 'https://api.npoint.io/29666c5dc0b714eab253')
    peticion.open('GET', 'php/usuarios.php')

    loader.classList.add('active') //* agrega la clase active a la rueda de carga

    peticion.onload = function(){ //* cuando la peticion se carga
      // console.log(JSON.parse(peticion.responseText)) //* obtiene el texto de la peticion
      var datos = JSON.parse(peticion.responseText) //* convierte el texto de la peticion en un objeto

      for(var i=0; i < 5; i++){
        var elemento = document.createElement('tr')
        elemento.innerHTML += ("<td>" + datos[i].id + "</td>")
        elemento.innerHTML += ("<td>" + datos[i].nombre + "</td>")
        elemento.innerHTML += ("<td>" + datos[i].edad + "</td>")
        elemento.innerHTML += ("<td>" + datos[i].pais + "</td>")
        elemento.innerHTML += ("<td>" + datos[i].correo + "</td>")
        document.getElementById('tabla').appendChild(elemento)
      }
      
      // datos.forEach(persona => {
        // var elemento = document.createElement('tr') //* crea un elemento tr
        // elemento.innerHTML += ("<td>" + persona.id + "</td>") //* agrega el id a la tabla
        // elemento.innerHTML += ("<td>" + persona.nombre + "</td>") //* agrega el nombre a la tabla
        // elemento.innerHTML += ("<td>" + persona.edad + "</td>") //* agrega el edad a la tabla
        // elemento.innerHTML += ("<td>" + persona.pais + "</td>") //* agrega el pais a la tabla
        // elemento.innerHTML += ("<td>" + persona.correo + "</td>") //* agrega el correo a la tabla
        // document.getElementById('tabla').appendChild(elemento) //* agrega el elemento a la tabla
      // })
    }

    peticion.onreadystatechange = function(){ //* cuando la peticion cambie de estado
      // console.log(peticion.readyState)
      // ! peticion.readyState Numbers:
      //* 0: request not initialized
      //* 1: server connection established
      //* 2: request received
      //* 3: processing request
      //* 4: request finished and response is ready

      // ! peticion.status Numbers:
      //* 200: ok
      //* 404: not found
      //* 500: server error

      if(peticion.readyState == 4 && peticion.status == 200){ //* Si la peticion esta lista y esta correcta
        loader.classList.remove('active') //* quita la clase active a la rueda de carga

      }
    }

    peticion.send()
})