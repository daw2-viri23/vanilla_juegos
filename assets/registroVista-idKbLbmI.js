import { U as User } from "./main-Ylf-elqM.js";
import { P as Perfil } from "./perfil-D6oDiBdo.js";
const registroVista = {
  template: (
    // html
    `
    

    <div class="container" >
    <h1 class="mt-5 text-center">Registro</h1>
    <div class="m-5 mx-auto" style="max-width: 400px">
        <form action="" class="form border shadow-sm p-3 " id="formularioRegistro">

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
                



    `
  ),
  script: () => {
    console.log("vista registro cargada");
    const formulario = document.querySelector("#formularioRegistro");
    formulario.addEventListener("submit", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!formulario.checkValidity()) {
        formulario.classList.add("was-validated");
      } else {
        try {
          const usuario = {
            email: formulario.email.value,
            password: formulario.password.value
          };
          console.log(usuario);
          console.log("Formulario valido. Datos formulario: ", usuario);
          const user = await User.create(usuario);
          console.log("user creado", user);
          const perfil = {
            ...usuario,
            user_id: user.id,
            nombre: formulario.nombre.value,
            apellidos: formulario.apellidos.value
          };
          console.log(perfil);
          Perfil.create(perfil);
          alert("Usuario creado correctamente. Revisa tu email...");
          window.location = "#/login";
        } catch (error) {
          alert("Error al crear usuario", error);
        }
      }
    });
  }
};
export {
  registroVista as default
};
