// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Importamos componentes header y footer
import { header } from './componentes/header.js'
import { footer } from './componentes/footer'

// Importamos la Función para detectar eventos al cargar las vistas
import { enrutador } from './componentes/enrutador'
import { supabase } from './bd/supabase.js'

document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('footer').innerHTML = footer.template

enrutador.observadorRutas()
// Cargamos la página home
window.location = '#/home'

