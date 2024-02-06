import { Perfil } from "../bd/perfil"
import { Proyecto } from "../bd/proyecto"



export default {
    template: // html
    `
  <div class="container">
    <h1 class="mt-5 text-center fw-bold" style="font-size: 100px">
      Vanilla Games
    </h1>
    <div class="m-5 mx-auto" style="max-width: 400px">
      <img src="images/logo.svg" alt="fpllefia" class="img-fluid" />
    </div>
  </div>
    `,
    script: async () => {
      console.log('Vista home cargada')
  
      // Probando la clase Pefil
      const resultado = await Perfil.getAll()
      console.log(resultado)

      const resultado1 = await Proyecto.getAll()
      console.log(resultado1)
    }
  }
  
  
  