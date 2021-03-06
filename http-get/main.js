var xhttp = new XMLHttpRequest()
  
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText)
    console.log(data)

    var ul = document.createElement('ul')
    ul.setAttribute('class', 'notes')

    data.forEach(function(note){
      var li = document.createElement('li')
      
      ul.appendChild(li);
      li.appendChild(document.createTextNode(note.content))
    })

    document.getElementById("notes").appendChild(ul)
  }
}

xhttp.open("GET", "/exampleapp/data.json", true)
xhttp.send()

// Un EventHandler que es invocado cada vez que cambia el atributo readyState. 
// La retrollamada (callback) es invocada desde el hilo (thread) perteneciente 
// a la interfaz de usuario. La propiedad XMLHttpRequest.onreadystatechange 
// contiene el manejador del evento que es invocado cuando se dispara el evento 
// readystatechange, lo cual sucede cada vez que cambia el valor de la propiedad 
// readyState de XMLHttpRequest. La retrollamada (callback) es invocada desde el 
// hilo perteneciente a la interfaz de usuario.

// por qué se usa xhttp-object en lugar de la moderna fetch. Esto se debe a que todavía 
// no queremos entrar en promesas (promises), y el código tiene un papel secundario en 
// esta parte. Volveremos a las formas modernas de realizar solicitudes al servidor en la parte 2.

// Las dos últimas líneas definen que el navegador realiza una solicitud HTTP GET a la dirección 
// del servidor /data.json: