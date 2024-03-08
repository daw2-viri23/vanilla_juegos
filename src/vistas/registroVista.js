export default {
    template: // html
    `
    

    <div class="container">
    <h1 class="mt-5 text-center">Registro</h1>
    <div class="m-5 mx-auto" style="max-width: 400px">
        <form action="" class="form border shadow-sm p-3">

            <!-- Nombre -->
            <label for="nombre" class="form-label">Nombre:</label>
            <input required id="nombre" type="text" class="form-control" />
            
            <!-- Apellidos -->
            <label for="apellidos" class="form-label">Apellidos:</label>
            <input id="apellidos" type="text" class="form-control" />
            
            <!-- Email -->
            <label for="email" class="form-label">Email:</label>
            <input required id="email" type="email" class="form-control" />
            
            <!-- Contraseña -->
            <label for="pass" class="form-label mt-3">Contraseña:</label>
            <input required id="pass" type="password" min="6" class="form-control" />
            
            <!-- Botón enviar -->
            <input type="submit" class="btn btn-primary w-100 mt-3" value="Enviar" />
          </form>
    </div>
</div>
                



    `,
    script: () => {
      console.log('vista registro cargada')
      // Validación bootstrap

      // Capturamos el formulario en una variable
      const formulario = document.querySelector('#formRegistro')
      // Detectamos su evento submit (enviar)
      formulario.addEventListener('submit', (event) => {
        // Detenemos el evento enviar (submit)
          event.preventDefault()
          event.stopPropagation()
      // Comprobamos si el formulario no valida
        if (!formulario.checkValidity()) {
          // Y añadimos la clase 'was-validate' para que se muestren los mensajes
          formulario.classList.add('was-validated')
        }
      })
    }
  }