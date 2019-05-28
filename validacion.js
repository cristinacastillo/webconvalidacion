function validar() {   // Validación de datos
    // datos a validar
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var email = document.getElementById('email').value;
    var fechaNac = document.getElementById('DPC_edit1_DD/MM/YYYY').value;
    var selector = document.getElementById('selector').value;
    var consulta = document.getElementById('consulta').value;
    // var aceptar = document.getElementById('aceptar').value;
    /* OJO, LA CASILLA DE VERIFICACIÓN SE COMPRUEBA DIRECTAMENTE, SIN EXTRAER UN VALUE */
    var valido = true;
    // Controles de validación
    // Para el Nombre
    if (nombre.length == 0 || parseInt(nombre)) {
      valido = false;
      document.getElementById('nombreHelp').style.visibility = "visible";
    }
    // Para el Apellido
    if (apellidos.length == 0 || parseInt(apellidos)) {
      valido = false;
      document.getElementById('apellidosHelp').style.visibility = "visible";
    }

    //para el email
    if(!(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email))){
      valido = false;
      document.getElementById('emailHelp').style.visibility = "visible";
    }

    // Para la Fecha
    if (fechaNac == "") {
      valido = false;
      document.getElementById('fechaNacHelp').style.visibility = "visible";
    }

    // Para el selector
    if (selector == 0) {
      valido = false;
      document.getElementById('selectorHelp').style.visibility = "visible";
    }
    // Para el CheckBox
    if (!aceptar.checked) {
      valido = false;
      document.getElementById('aceptarHelp').style.visibility = "visible";
    }

    if (consulta.length == 0) {
      valido = false;
      document.getElementById('consultaHelp').style.visibility = "visible";
    }
    return valido;
  }

  function quitarError(msg) {
    // Cada vez que se camibia un campo, se elimina mensaje de error
    document.getElementById(msg).style.visibility = "hidden";
  }

  function limpiarResultado() {
    // Cada vez que se pulsa el botón submit, se elimina el resultado anterior
    document.getElementById('resultado').innerHTML = "";
  }