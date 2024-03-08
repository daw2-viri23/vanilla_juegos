# VERSION 1.0
# SPRINT 0 - REQUISITOS Y PLANIFICACIÓN
## Requesitos y diagrama de casos de uso
En la introducción de esta documentación, en la sección El proyecto Vanilla Games, en concreto en el apartado Requisitos del proyecto y casos de uso general, hemos definido qué se espera de nuestra aplicación web, a partir de los 'Casos de uso general'.

También hemos dividido todo el trabajo de desarrollo en diferentes versiones, con la intención de que nuestro proyecto esté operativo desde el inicio de su implementación, de manera que conforme evolucione a posteriores versiones, aumentaremos su nivel de funcionalidad.

**Por lo tanto, vamos a comenzar por la versión 1.0.**

Lo primero es definir **los casos de uso para esta versión.** Una primera aproximación podría ser la siguiente:

> **RECUERDA QUE...**  
Los casos de uso son una herramienta esencial para comprender y especificar los requisitos de un sistema, y para garantizar que el software desarrollado satisfaga las necesidades de los usuarios finales.

### Casos de uso para la V1.0 - Definición básica
- Registrar usuario: Un usuario puede registrarse en la plataforma proporcionando su nombre, apellidos, email y contraseña.
- Recuperar contraseña: Un usuario registrado puede solicitar la recuperación de su contraseña en caso de que la haya olvidado. Para ello, se le enviará un correo electrónico con las instrucciones para restablecer su contraseña.
- Iniciar sesión: Un usuario registrado puede iniciar sesión en la plataforma proporcionando su email y contraseña.
- Cerrar sesión: Un usuario puede cerrar su sesión en la plataforma en cualquier momento.
- Editar perfil: Un usuario registrado puede editar su perfil, actualizando su nombre, apellidos, email o contraseña.
- Ver proyectos: Un usuario registrado puede ver un listado de proyectos publicados por los desarrolladores.
- Publicar proyecto: Un usuario con el perfil de desarrollador puede publicar un proyecto proporcionando información como nombre, descripción, imagen representativa, enlaces a servidor de pruebas y repositorio de código, estado del proyecto, etc.
- Editar proyecto: Un usuario con el perfil de desarrollador puede editar un proyecto que haya publicado previamente, actualizando la información del proyecto.
- Eliminar proyecto: Un usuario con el perfil de desarrollador puede eliminar un proyecto que haya publicado previamente.
- Ver/Editar usuarios: Un adminsrador puede ver una tabla con todos los usuarios que hay registrados y editar la información, incluido el ROL de usuario.
- Eliminar usuario: Un administrador puede eliminar cualquier usuario registrado en la plataforma.

### Diagrama de casos de uso
Para tener la información de manera gráfica vamos a utilizar uno de los diagramas UML que aprendimos a hacer el curso pasado:



## INFO
### ¿Qué es un diagrama UML?
UML, que significa Lenguaje de Modelado Unificado (Unified Modeling Language, en inglés), es un lenguaje estándar utilizado en el desarrollo de software para visualizar, especificar, construir y documentar los artefactos de un sistema. Los diagramas UML son representaciones gráficas utilizadas en UML para modelar diferentes aspectos del sistema.

**Existen varios tipos de diagramas UML**, cada uno de los cuales se enfoca en un aspecto específico del sistema y proporciona diferentes niveles de detalle. Algunos de los diagramas UML más comunes son:

- Diagrama de casos de uso: describe las interacciones entre los actores y el sistema, mostrando qué funcionalidades proporciona el sistema a los usuarios.

- Diagrama de clases: representa la estructura estática del sistema, mostrando las clases, sus atributos, métodos y las relaciones entre ellas.

- Diagrama de secuencia: muestra la interacción entre los objetos en una secuencia temporal, describiendo cómo los objetos se comunican y colaboran entre sí.

- Diagrama de actividades: describe el flujo de trabajo o los procesos empresariales en un sistema, mostrando las actividades y las decisiones que se toman en cada etapa.

- Diagrama de componentes: muestra la estructura de componentes de un sistema, identificando los componentes y las dependencias entre ellos.

- Diagrama de despliegue: representa la arquitectura física del sistema, mostrando cómo los componentes se distribuyen en el hardware y la red.

Estos son solo algunos ejemplos de los diagramas UML más utilizados, pero hay otros diagramas, como el diagrama de estados, el diagrama de objetos y el diagrama de comunicación, que también se utilizan para modelar diferentes aspectos de un sistema. En general, los diagramas UML proporcionan una representación visual clara y sistemática del sistema, lo que facilita la comprensión, la comunicación y el diseño del software.

[📖 Aquí encontrarás más información sobre los diagramas UML 📖]()

### ¿Qué es un diagrama de casos de uso?
**Un diagrama de casos de uso** es una herramienta utilizada en el análisis y diseño de sistemas de software para representar las interacciones entre los actores (usuarios o sistemas externos) y el sistema en sí. Es una representación visual que describe cómo se utilizará el sistema desde la perspectiva del usuario.

En un diagrama de casos de uso, **los actores** se representan mediante figuras externas al sistema, como personas, otros sistemas o incluso dispositivos. **Los casos de uso, por otro lado, se representan como elipses** y describen las diferentes acciones o funciones que el sistema proporciona a los actores.

El diagrama muestra **las relaciones entre los actores y los casos de uso** a través de líneas que conectan las figuras correspondientes. Estas líneas representan las interacciones entre los actores y el sistema, indicando qué casos de uso son accesibles para cada actor.

Los casos de uso se utilizan para capturar los requisitos funcionales del sistema y proporcionar una visión general de cómo interactúan los diferentes actores con el sistema. También ayudan a identificar los distintos escenarios de uso y las relaciones entre ellos.

El diagrama de casos de uso es una herramienta valiosa para comunicar y comprender las funcionalidades clave del sistema entre los desarrolladores, los usuarios y otros interesados en el proyecto de software.

[📖 Aquí encontrarás más información sobre los diagramas de casos de uso 📖]()


Vamos a crear nuestro diagrama de casos de uso.


>TIP                                                                       
    Para dibujar el diagrama de casos de uso una herramienta interesante puede ser [FIGMA.](https://www.figma.com/)                                                                
             Figma es una herramienta de diseño de interfaces de usuario (UI) y experiencia de usuario (UX) basada en la nube. Permite a los diseñadores crear, prototipar y colaborar en diseños interactivos de alta calidad de forma colaborativa.                                               
              El diagrama de casos de uso para la versión 1.0 sería el siguiente:

## Diagrama de casos de uso para la versión 1.0

![imagen_casos_uso](https://carrebola.github.io/vanillaPill/assets/images/diagramaCasosUso_1-3fc60e64208490df3bd2eb0f595cedbc.png)

Este diagrama refleja de forma resumida qué acciones se pueden llevar a cabo en nuestro aplicación dependiendo del rol del usuario.

Ahora que tenemos claro todo lo que debe hacer la versión 1.0, nuestra misión ahora es planificar el trabajo que se nos viene encima...






## PLANIFICACIÓN DEL PROYECTO

### Planificación del proyecto
¡Estamos listos y hemos comenzado a desarrollar la versión 1.0 de nuestro proyecto!

En el apartado anterior hemos definido qué funcionalidades debe tener. Además, hemos analizado las diferentes arquitecturas y tecnologías y hemos optado por utilizar una CSR (Client Side Rendering basada en una SPA programada en Javascript y conectada a Supabase como servicio backend).

Por lo tanto estamos en condiciones de definir cada una de las tareas que necesitaremos realizar para llevar a cabo esta primera versión del proyecto.

Para poder planificar el trabajo, vamos a crear el 'backlog de proyecto', es decir, vamos a desglosar el trabajo en historias para, a continuación, crear el backlog de sprint (donde agruparemos las historias por entregas). Finalmente vamos a planificar su temporización, es decir, vamos a asignar un tiempo determinado a cada historia.




<details style="border: 1px solid #4CAF50; padding: 10px;">

  <summary style="color: #fff;">                                       ¿Qué es el backlog de producto?</summary>

  > El Backlog de producto (Product Backlog en inglés) es una herramienta clave en la metodología Scrum, utilizada para gestionar el trabajo a realizar en un proyecto de software o desarrollo de producto.
  >
  > El backlog de producto es una lista ordenada de todas las funcionalidades, características, requisitos y mejoras que deben ser desarrollados en el producto para cumplir con los objetivos del proyecto.
  >
  > El backlog de producto es creado por el Product Owner (dueño del producto) en colaboración con el equipo de desarrollo. El Product Owner es responsable de priorizar el backlog de producto y asegurar que las funcionalidades más importantes y valiosas sean entregadas primero. El equipo de desarrollo utiliza el backlog de producto para planificar y estimar el trabajo a realizar en cada iteración (sprint) del proyecto.
  >
  > El backlog de producto es una herramienta valiosa para el desarrollo ágil de software, ya que ayuda a mantener el enfoque en el valor que se está entregando al usuario final, asegura que el equipo de desarrollo esté trabajando en las funcionalidades más importantes y permite una planificación más precisa de las iteraciones del proyecto.

</details>


### Backlog de producto y de sprint.
Estas serían las historias a planificar en la entrega de la versión 1 de nuestro proyecto agrupadas por sprints:

#### SPRINT 0: Definición del proyecto
- Historia: Requisitos, casos de uso y diagrama de casos de uso Como desarrollador, quiero definir de manera genérica las especificaciones de la aplicación.

- Historia: Versiones y planificación Como desarrollador, quiero agrupar las especificaciones en versiones, definir las tareas necesarias y realizar la planificación de todo el proceso de desarrollo del proyecto.

- Historia: Casos de uso especificos y diagramas de flujo Como desarrollador quiero definir las especificaciones y casos de uso para la versión 1.0.

*(Esta historia ya hemos comenzado a trabajarla en apartados anteriores. No obstante, es importante que quede constancia de ello para poder hacer una valoración del tiempo total invertido.)*

#### SPRINT 1: Diseño de la interficie
- Historia: Bocetos: Como diseñador quiero dibujar los bocetos de todas las posibles pantallas del proyecto y testear su funcionamiento.

- Historia: Wireframes, Mockup y guía de estilos: Como diseñador quiero dibujar los mockups y crear la guía de estilos a partir de los colores, tipografías, etc seleccionadas.

#### SPRINT 2: Prototipos
- Historia: Entorno de desarrollo: Como diseñador/programador quiero instalar y configurar las herramientas necesarias para programar la aplicación, trabajar con repositorios y crear un entorno integración continua y despliegue continuo.
- Historia: Prototipos html: Como maquetador web quiero crear las páginas html del proyecto a partir de los wireframes aplicando la guía de estilos y utilizando Bootstrap 5.
- Historia: Validaciones de formularios: Como programador quiero definir e implementar las validaciones de los formularios del proyecto

#### Sprint 3: Implementación de la SPA
- Historia: Entorno de desarrollo basado en NodeJS: Como programador quiero instalar y configurar todas las herramientas necesarias (NodeJS, Vite, etc.) para el desarrollo de una app tipo SPA basada en Javascript
  
- Historia: Creación de proyecto basado en SPA y organización de archivos para las vistas basadas en módulos js: Como programador quiero configurar el sistema de carpetas para las vistas y crear los archivos a partir de componentes html basados en los prototipos.
  
- Historia: Creación de componentes: Como programador quiero crear los componentes para el encabezado, el enrutado de las páginas y los menús.
  
- Historia: Diseño del aspecto de las vistas: Como usuario quiero poder navegar por todas las vistas de la aplicación (independientemente del del rol).
  
- Historia: Implementación de la lógica para la validación de los formularios: Como usuario quiero recibir feedback de validación en las vistas con formularios.

- Historia: Lógica para la autenticación de usuarios: Como usuario registrado quiero poder recordar los datos de sesión al loguearme (Uso de localStorage)
  
- Historia: Actualización de componentes header y menús en función del rol de usuario logueado: Como usuario logueado quiero poder navegar por las vistas de la aplicación. (Podrán verse solo las opciones que corresponden a mi rol).
  
- Historia: Diseño de las vistas a partir de los datos de un archivo JSON: Como programador quiero simular el registro, login y visualización de las tablas de usuarios y proyectos a partir de datos ficticios obtenidos de una archivo json de prueba.

- Historia: Lógica para la administración de usuarios y proyectos (ver, editar, borrar, etc.): Como administrador quiero poder gestionar los usuarios y proyectos (CRUD)

#### Sprint 4: Backend
- Historia: Diseño de la base de datos: Como programador quiero diseñar la base de datos en base a diagrama UML (diagrama entidad-relación)

- Historia: Implementación de las tablas y funciones en supabase: Como programador quiero implementar las bases de datos en Supabase, diseñar las consultas e implementar las funciones postgree multitabla

- Historia: API javascript de Supabase: Como programador quiero probar las apis de javascript para el acceso a la base de datos

- Historia: Implementación de un ORM para mapping de la base de datos: Como programador quiero diseñar el diagrama de clases e implementarlo en javascript para tener un mapping de la bd.

#### Sprint 5: Integración del frontend y el backend
- Historia: Login y registro: Como usuario quiero poder registrarme e iniciar sesión.

- Historia: Gestión de sesiones: Como usuario registrado quiero ver la web en base al rol que tengo asignado.

- Historia: Editar perfil Como usuario registrado quiero poder ver y modificar mi perfil.

- Historia: Gestión de Proyectos (Vista proyectos, detalle proyecto, etc): Como usuario registrado 'desarrollador' quiero poder ver los proyectos, ver mis proyectos, crear proyectos, ver detalle de los proyectos y editar y borrar mis proyectos.

- Historia: Gestión de usuarios: Como usuario registrado 'administrador' quiero poder ver, editar y borrar los usuarios del sistema.

#### Sprint 6: Revisión y despliegue en producción de la versión 1.0
- Historia: Test de usuarios Como diseñador quiero realizar tests de usuarios a un grupo de usuarios focales.

- Historia: Revisión de la aplicación Como programador quiero revisar y corregir los posibles problemas detectados en el test de usuarios.

- Historia: Despliegue en producción Como programador quiero despleguar la aplicación en producción.

Ahora que tenemos las historias definidas es el momento de planificar el trabajo. Para ello necesitamos una herramienta que nos permita gestionar y temporizar cada una de las tareas. Nosotros utilizaremos GitHub Projects

---
## Github Projects
Vamos a planificar nuestro proyecto utilizando GitHub Projects

<details style="border: 1px solid #4CAF50; padding: 10px;">

  <summary style="color: #fff;">Características de GitHub Projects</summary>

---
  Los proyectos son una característica de GitHub que te permite organizar y hacer un seguimiento del trabajo en tu repositorio. Los proyectos son especialmente útiles para la gestión de tareas y la colaboración en equipos de desarrollo. Aquí hay algunas características clave de los proyectos en GitHub:
  
  - **Tableros personalizables:** Los proyectos en GitHub se basan en tableros personalizables que te permiten organizar tareas en columnas. Puedes crear columnas para representar diferentes etapas del trabajo, como "Por hacer," "En progreso" y "Completado."

  - **Tarjetas:** Cada tarea se representa como una tarjeta en el tablero del proyecto. Las tarjetas pueden contener detalles, comentarios, etiquetas y asignaciones para indicar quién está trabajando en la tarea.

  - **Asignación de tarjetas:** Puedes asignar tarjetas a miembros específicos de tu equipo para indicar quién está a cargo de una tarea en particular.

  - **Etiquetas:** Puedes etiquetar tarjetas con etiquetas personalizadas para categorizar tareas por tipo, prioridad o cualquier otro criterio que desees.

  - **Automatizaciones:** Puedes configurar reglas de automatización para mover tarjetas automáticamente de una columna a otra cuando se cumplen ciertas condiciones, lo que facilita el seguimiento del progreso del trabajo.

  - **Seguimiento visual:** Los proyectos ofrecen una vista visual que te permite ver de un vistazo en qué etapa se encuentra cada tarea y cómo se relacionan entre sí.

  - **Notificaciones:** GitHub te notificará sobre actividades relacionadas con las tarjetas del proyecto, como comentarios, asignaciones o cambios de estado.

  - **Enlaces con pull requests y issues:** Puedes vincular tarjetas de proyecto con pull requests y problemas (issues) para un seguimiento más preciso del trabajo relacionado con el código.

</details>


### Pasos para gestionar nuestro proyecto con GitHub Projects
Vamos a crear toda la infraestructura para la gestión de nuestro proyecto. En primer lugar crearemos un repositorio para, a continuación, vincularlo con un proyecto de GitHub.

#### Paso 1: Crear un Repositorio en GitHub
Crea un repositorio siguiendo estos pasos:

1. Inicia sesión en tu cuenta de GitHub.

2. Haz clic en el botón "New" en la esquina superior derecha de la página de inicio de GitHub.
3. Completa los detalles del repositorio, como el nombre (Vanilla Games), la descripción y la visibilidad (privado).
4. Marca la casilla "Initialize this repository with a README" para incluir un archivo README.md inicial.
5. Haz clic en "Create repository" para crear el repositorio.
   
#### Paso 2: Crear un Proyecto en GitHub
Un proyecto en GitHub te permite organizar las historias de usuario y issues. Sigue estos pasos para crear un proyecto:

1. En la página principal de tu repositorio, ve a la pestaña "Projects".
2. Haz clic en "New project" para crear un nuevo proyecto.
3. Dale un nombre al proyecto, como "Proyecto Vanilla Games".
   
#### Paso 3: Agregar Columnas al Proyecto
Vamos a crear las vistas para nuestro proyecto

1. Dentro del proyecto, vamos a crear tres vistas, una de tipo tabla, otra para los tableros kanban y otra para el diagrama de Gantt.
2. En la vista kanban vamos crear columnas para organizar las historias de usuario y issues. Utilizaremos los siguientes tableros: "Backlog", "En Pro Progreso", "En Revisión" y "Completado". Para agregar columnas:
- Haz clic en el botón "Add column" debajo del título del proyecto.
- Crea las columnas que necesitas, como "Backlog de proyecto", "En Progreso", "En Revisión" y "Completado".

![imagen_kanban_carlos](https://carrebola.github.io/vanillaPill/assets/images/image-2-5b6dbd013f07665aefdf48dc36cd3936.png)

#### Paso 4: Crear Historias de Usuario y Issues
Ahora, crea las historias para el proyecto.

1. Abre la vista tabla y añade las historias (nombre y descripción).
2. Convierte las historias en issues para poder hacer seguimiento tanto desde el repositorio como desde proyectos y asignalas al proyecto correspondiente.
3. Asigna el issue a los miembros del equipo responsables de su implementación.

#### Paso 5: Etiquetas para categorizar las historias e Issues
Por el momento vamos a crear etiquetas para categorizar las historias en sprints. Para ello:

1. Entra en el repositorio
2. Selecciona 'Issues'
3. Haz click en 'Labels'
4. Borra todas las etiquetas y crea las que, por el momento, vamos a utilizar
   1.   Documentación
   2. Sprint 1
   3. Sprint 2
   4. Sprint 3
   5. Sprint 4
   6. Sprint 5

![issues_carlos](https://carrebola.github.io/vanillaPill/assets/images/image-1-a1dc9c96534a4a1ca404a6bfd5d539d4.png)

#### Paso 6: Utilizar Milestones para las versiones
Vamos a agrupar un conjunto de issues o historias de usuario relacionadas en un objetivo específico o versión, puedes utilizar "milestones". Para crear un milestone:

1. Navega a la pestaña "Issues" en tu repositorio.
2. Haz clic en "Milestones" y luego en "New milestone.
3. Dale un nombre al milestone, como "Versión 1.0".
4. Podemos añadir en la descripción los casos de uso para esta versión. De momento no vamos a asignar la fecha de vencimiento.
5. Para acabar, vamos a agregar los issues o historias de usuario relacionados a ese milestone.

![issues_carlos_2](https://carrebola.github.io/vanillaPill/assets/images/image-93eec78477ffec13ddef2a2edbedf0de.png)

#### Paso 7: Agregando etiquetas y milstone
Desde la vista de tabla, añade las columnas necesarias para visualizar las etiquetas y milstone que tienen asociada cada historia.
![tabla_carlos](https://carrebola.github.io/vanillaPill/assets/images/image-3-7331628d327758e977a624e7459a229f.png)

#### Paso 8: Columna para sprint
Vamos a crear ahora una nueva columna para el sprint actual, y movemos las historias desde el backlog de producto al sprint correspondiente.
![kanban_carlos](https://carrebola.github.io/vanillaPill/assets/images/image-4-006410958f809dc1d9fdf75d01315d41.png)

---

## Documentación en repositorio
Ya tenemos nuestro proyecto planificado en un primer nivel.

Las tres primeras versiones hacen referencia a definición de los requisitos, casos de uso y versiones así como a la planificación.

Vamos a dar un paso atrás para recuperar la documentación generada en estas historias y almacenarla en el repositorio.

Para ello, vamos a comenzar creando una nueva rama en nuestro repositorio:

![](https://carrebola.github.io/vanillaPill/assets/images/image-5-8256af28b16941762b282994c801489b.png)

Ahora abrimos el repositorio con VSCode para trabajar de manera más cómoda. Para ello:

- Abrimos una ventana de VSCode
- Hacemos click en clonar repositorio y copiamos en la ventana superior la url del repositorio de 'VanillaGames' y hacemos click en 'Clonar repositorio'
- Indicamos donde queremos que aparezca la carpeta de nuestro proyecto (en mi caso en el escritorio)
  
Observa como podemos ver en la columna izquierda la raiz del proyecto con el archivo README.md.
![](https://carrebola.github.io/vanillaPill/assets/images/image-6-2b600aad6cdca72382210a67236f3ad0.png)

Si te fijas, podrás ver en la parte inferior izquierda, el nombre de la rama actual ('main'). Haz click sobre el nombre de la rama y selecciona la rama 'Documentación' que acabamos de crear.

### Documentando el proyecto en el repositorio
Vamos a comenzar a subir archivos a nuestro repositorio. En nuestro caso utilizaremos archivos con extensión md para poder usar **Markup**. De esta manera podremos visualizar toda la información desde el mismo GitHub.

1. Asegurate que estás en la rama 'Documentación'
2. Crea un archivo con nombre ``DOCUMENTACION.md``
4. Copia la documentación que hemos generado hasta ahora (la encontrarás en el apartado 'Definiendo Vanilla Games' )
   
![](https://carrebola.github.io/vanillaPill/assets/images/image-7-2c8885354feb46b18a0eba071ec28a73.png)

Ahora, para subir los cambios en el repositorio, solo tienes que hacer click en el tercer icono de vscode (verás que tiene un 1 indicando que hay cambios en un archivo) y añadir un mensaje para el commit.

> ANTES DE HACER EL COMMIT...                          
Para asociar el commit con la historia (y el issue) de nuestro proyecto debemos añadir al mensaje del commit el numero de issue con un #. El mensaje quedaria así:                
**'Descripción del proyecto #1'**

![](https://carrebola.github.io/vanillaPill/assets/images/image-8-f5ddf76ca44190f3a519c6a7f8a2bd66.png)

Después de hacer el commit te preguntará si quieres hacer 'push'. Haz click en el bóton para hacerlo.

Si vas ahora a GitHub y seleccionas la rama podrás ver los cambios.

![](https://carrebola.github.io/vanillaPill/assets/images/image-9-7c112c51238eef09771b974485dd565e.png)

Abre los Issues del repositorio y podrás ver en el primer Issue con #1 como aparece información referente a este último push

![](https://carrebola.github.io/vanillaPill/assets/images/image-10-77b6ce97bcf2f2f0dbb14717e85d10aa.png)

> TAREA                       
Amplia la documentación que hemos generado en la historia 'Requisitos y diagrama de casos de uso' para la versión 1.                                       
Deberías poder ver la información actualizada desde GitHub:                   
![](https://carrebola.github.io/vanillaPill/assets/images/image-11-de7ef12dc76ee6bfa5555269933be7cb.png)

> ANTES DE HACER EL COMMIT...                           
Para asociar el commit con la historia (y el issue) de nuestro proyecto debemos añadir al mensaje del commit el número de issue con un #. El mensaje podría ser algo así:                                                                   
              'Crear Documentación: Requisitos y diagramas de uso completados #2'



---

## Casos de uso específicos y diagramas de flujo.

En el primer apartado 'Requisitos y diagrama de casos de uso' para esta versión 1.0, hemos definido de manera general los casos de uso que se contemplan para cada actor y los hemos reflejado en un diagrama de casos de uso.

Es el momento de ser más concretos y detenernos a reflexionar en cada uno de los procesos que se realizarán para cada tarea, incluyendo los posibles errores cometidos por el usuario o el propio sistema.

### Casos de uso específicos

#### 1. Registrar Usuario

Actores: Usuario no registrado.

Precondiciones: El usuario no ha iniciado sesión.

Flujo básico:

1. El usuario navega a la página de registro.
1. El usuario introduce su nombre, apellidos, email y contraseña.
1. El sistema valida que los campos estén completos y que el email no esté registrado previamente.
1. El sistema crea un nuevo usuario con los datos proporcionados.
1. El sistema muestra un mensaje de confirmación y redirige al usuario a la  página de inicio.
   
Flujos alternativos:

- 3a. El sistema detecta que el email ya está registrado: muestra un mensaje de error y no crea la cuenta.

#### 2. Recuperar contraseña
Actores: Usuario registrado.

Precondiciones: El usuario no ha iniciado sesión.

Flujo básico:

1. El usuario navega a la página de registro.
2. El usuario selecciona la opción 'Recuperar contraseña'
3. El sistema valida que el campo 'email' esté completo y que el email esté registrado previamente.
4. El sistema muestra un mensaje de confirmación de envio del mail para la recuperación de contraseña y redirige al usuario a la página de inicio.

Flujos alternativos:

- 3a. El sistema detecta que el email no está registrado: muestra un mensaje de error y no envia el mail.

#### 3. Iniciar sesión
Actores: Usuario registrado.

Precondiciones: El usuario no ha iniciado sesión.

Flujo básico:

1.  El usuario navega a la página de inicio de sesión.
3. El usuario introduce su email y contraseña.
3. El sistema valida las credenciales y crea una sesión para el usuario.
4. El sistema redirige al usuario a la página principal de la aplicación.

Flujos alternativos:

- 3a. Las credenciales son incorrectas: el sistema muestra un mensaje de error y no crea la sesión.

#### 4. Cerrar sesión
Actores: Usuario registrado.

Precondiciones: El usuario ha iniciado sesión.

Flujo básico:

1. El usuario hace clic en el botón de "cerrar sesión".
2. El sistema cierra la sesión del usuario.
3. El sistema redirige al usuario a la página de inicio.

#### 4. Ver/Editar perfil
Actores: Usuario registrado.

Precondiciones: El usuario ha iniciado sesión.

Flujo básico:

1. El usuario navega a la página de edición de perfil.
2. El usuario edita su nombre, apellidos y contraseña.
3. El sistema valida los campos y actualiza el perfil del usuario.
4. El sistema muestra un mensaje de confirmación.

Flujos alternativos:

- 3a. El usuario intenta cambiar su email: el sistema valida que el email no esté registrado previamente.

#### 5. Ver proyectos
Actores: Usuario registrado.

Precondiciones: El usuario ha iniciado sesión.

Flujo básico:

1. El usuario navega a la página de proyectos.
3. El sistema muestra una lista de proyectos publicados por desarrolladores.
3. El usuario puede hacer clic en un proyecto para ver más detalles.
4. El usuario puede mostrar/filtrar los proyectos a partir de un buscador

#### 6. Publicar proyecto
Actores: Usuario registrado con perfil de desarrollador.

Precondiciones: El usuario ha iniciado sesión y su perfil es de desarrollador.

Flujo básico:

1. El usuario navega a la página de publicación de proyecto.
2. El usuario introduce el nombre, descripción, imagen representativa, enlaces de servidor y repositorio, estado y otra información relevante del proyecto.
3. El sistema valida los campos y crea un nuevo proyecto.
4. El sistema muestra un mensaje de confirmación y redirige al usuario a la página de proyectos.

Flujos alternativos:

- 2a. El desarrollador decide no publicar el proyecto y selecciona la opción de cancelar.
- El sistema descarta la información ingresada en el formulario.
- El sistema muestra un mensaje de confirmación al desarrollador.

#### 7. Editar proyecto:
Actor principal: Desarrollador

Objetivo: Editar la información de un proyecto previamente creado.

Precondiciones: El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

Flujo principal:

1. El usuario selecciona la opción de "Editar proyecto".
2. El sistema muestra la lista de proyectos previamente creados por el usuario.
3. El usuario selecciona el proyecto que desea editar.
4. El sistema muestra el formulario de edición del proyecto con la información actual del mismo.
5. El usuario realiza los cambios necesarios en la información del proyecto y guarda los cambios.
6. El sistema valida la información ingresada por el usuario y actualiza la información del proyecto en la base de datos.
7. El sistema muestra una confirmación de que la información del proyecto ha sido actualizada correctamente.

#### 8. Eliminar proyecto:
Actor principal: Desarrollador

Objetivo: Eliminar un proyecto previamente creado.

Precondiciones: El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

Flujo principal:

1. El usuario selecciona la opción de "Eliminar proyecto" del proyecto que desea eliminar.
2. El sistema muestra una confirmación de que el usuario está seguro de eliminar el proyecto seleccionado.
3. El usuario confirma que desea eliminar el proyecto.
4. El sistema elimina el proyecto de la base de datos y muestra una confirmación de que el proyecto ha sido eliminado correctamente.
5. El sistema actualiza la información de proyectos.

#### 9. Ver/Editar usuario:
Actor principal: Usuario administrador

Objetivo: Editar la información de los usuarios registrados.

Precondiciones: El usuario debe haber iniciado sesión en la aplicación y tener rol administrador.

Flujo principal:

1. El usuario selecciona la opción de "Ver usuarios".
2. El sistema muestra una tabla con 'inputs' con los datos de los usuarios.
3. El administrador realiza los cambios necesarios en la información de los usuarios (incluido el rol y el estado) y guarda los cambios.
4. El sistema valida la información ingresada por el usuario y actualiza la información del usuario en la base de datos.
5. El sistema muestra una confirmación de que la información del perfil ha sido actualizada correctamente.

#### 9. Eliminar usuario:
Actor principal: Usuario administrador

Objetivo: Eliminar usuario del sistema.

Precondiciones: El usuario debe haber iniciado sesión en la aplicación y debe tener rol administrador.

Flujo principal:

1. El usuario selecciona la opción de "Ver usuarios".
2. El sistema muestra una tabla con 'inputs' con los datos de los usuarios.
3. El administrador hace clic sobre el icono de eliminar usuario de la fila correspondiente.
4. El sistema informa de que se eliminarán todos sus registros.
5. El sistema muestra una confirmación de que la información de que el usuario ha sido borrado correctamente.

### Errores
Vamos a repasar los diferentes casos de uso analizando el flujo principal y añadiendo los flujos alternativos para contemplar los posibles errores del sistema. Puedes considerar los siguientes mensajes:

- Error de conexión: El servidor no puede establecer una conexión con la base de datos, lo que impide que se puedan realizar operaciones en la plataforma. El sistema debería mostrar un mensaje de error indicando que no se pudo conectar con la base de datos y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

- Error de validación: Cuando el sistema recibe información del usuario, debe validarla para asegurarse de que cumple con los requisitos de formato y contenido necesarios. Si la información no es válida, el sistema debería mostrar un mensaje de error indicando el problema específico, como "El campo de correo electrónico debe ser una dirección de correo válida".

- Error de autenticación: Si un usuario intenta acceder a una página o realizar una acción que requiere autenticación, pero no ha iniciado sesión o sus credenciales son incorrectas, el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada y ofrecer la posibilidad de iniciar sesión o recuperar la contraseña.

- Error de autorización: Si un usuario intenta realizar una acción que no está autorizada para realizar debido a su rol, el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada y ofrecer la posibilidad de volver a la página anterior.

- Error de servidor: En caso de que se produzca un error interno en el servidor, como una excepción no controlada, el sistema debería mostrar un mensaje de error genérico indicando que se produjo un error y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

> TAREA: DOCUMENTACIÓN                        
Es momento de actualizar la documentación en el repositorio

>ANTES DE HACER EL COMMIT...                           
Para asociar el commit con la historia (y el issue) de nuestro proyecto debemos añadir al mensaje del commit el numero de issue con un #. El mensaje poddría ser algo así:                                                          
'Documentación: Casos de uso especificos #3'

---

# Finalización del Sprint 0
Llegados a este punto ya hemos acabado con todas las historias del primer Sprint.

Este sprint ha sido un tanto especial ya que las primeras historias las hemos llevado a cabo cuando aún no habíamos planificado el proyecto.

Es por esto que, esta vez, no hemos podido ir desplazando las historias por los tableros kanban una vez finalizadas. Pero no hay problema, lo hacemos ahora y chin pum!

![](https://carrebola.github.io/vanillaPill/assets/images/image-12-819c7b2abafcd82866b1f5be7f0f8985.png)

Pero sí que es momento de reflexionar sobre el proceso realizado hasta ahora y la metodología empleada.

> **TAREA: REFLEXIÓN SOBRE EL SPRINT 0**                              
Vamos a repasar juntos lo que hemos hecho hasta ahora, valorando la metodología y los resultados obtenidos

---

# Hist3a - Diseño de la interfaz. Bocetos
Una vez tenemos claro las funcionalidades que debe realizar nuestra aplicación, comenzamos con el diseño de la interfaz.

Este proceso incluye diseñar los bocetos, los wireframes y los mockups ,para acabar creando los prototipos con html.

Sin duda, el primer paso, debe ser dibujar los bocetos, así que, busca un lápiz, una goma de borrar y un puñado de papel, ¡y manos a la obra!

## Deseño de Bocetos

> INFO                          
Recuerda que los bocetos son dibujos a mano alzada que representan ideas de diseño de manera rápida y no detallada. Los bocetos suelen ser utilizados al inicio del proceso de diseño para explorar diferentes ideas y soluciones de diseño de manera rápida y económica. Los bocetos son ideales para hacer borradores rápidos y para discutir ideas con colegas y clientes.

Home y menús usuarios
![](https://carrebola.github.io/vanillaPill/assets/images/1684861508218-79dad6473fd7d571d5f73e96f893af7f.jpg)

Hemos didivido la interficie en 3 zonas, el encabezado (header), el cuerpo principal (main) y el pie de página (footer).

- En el header vamos a alojar una barra superior fija con: el logo y nombre de la web (que hará las veces de link a la página principal), un menú central genérico (para acceder a páginas públicas), un menú central específico (que será diferente en función del rol de usuario logueado), y un icono (avatar) que permitirá ver la imagen del usuario logueado y que hará de botón para desplegar otro menú, el menú de usuario (que tendrá diferentes items dependiendo de si la sesió está abierta o no y del tipo de rol que tenga el usuario logueado).
- El cuerpo (main) albergará el contenido de las páginas. Será la sección que vaya cambiando dependiendo de la página que carguemos. En la página home simplemente aparece una imagen de fondo y el nombre de la web.
- El header será meramente informativo.

## Regitro de un usuario

![](https://carrebola.github.io/vanillaPill/assets/images/1684861508212-88f1ed0a8c53df9f791872b3b03519d8.jpg)

## Iniciar sesión

![](https://carrebola.github.io/vanillaPill/assets/images/1684861508205-edba4a097ae58ec58f1bb07dc4b7e5e1.jpg)

## Editar mi perfil

![](https://carrebola.github.io/vanillaPill/assets/images/1684861508198-5b5eff368d5421682a834f3ed67af5bd.jpg)

Editar perfil será una ventana modal, es decir, se mostrará la ventana y el fondo se volverá oscuro.

Esta ventana de edición permitirá, además de modificar los datos del usuario, añadir una imagen de avatar. Por el momento, en esta primera versión, podremos añadir el link de una imagen que esté alojada en un servidor. En la siguiente versión (versión 1.1) actualizaremos esta ventana para que puedan subirse archivos (imágenes) al servidor.

## Listado de todos los proyectos

![](https://carrebola.github.io/vanillaPill/assets/images/1684861508192-6b771260fe99faccc760b23f71f02406.jpg)

En esta página podemos ver, en la pestaña izquierda, todos los proyectos en forma de tabla. La pestaña derecha mostrará solo los proyectos que ha subido el usuario que ha iniciado la sesión.

Al hacer clic en cualquier parte de la fila se accede al detalle del proyecto.

También tenemos un buscador que permite buscar proyectos por palabras clave en el nombre o descripción.

Las celdas de encabezado de las tablas incluyen un icono (flecha hacia arriba o hacia abajo) que permitirá ordenar la tabla por la columna en concreto.

## Listado de Mis proyectos

![](https://carrebola.github.io/vanillaPill/assets/images/1684861508186-f38d99164909a0783d2040ce646e928a.jpg)

En esta pestaña podemos ver los trabajos pertenecientes al usuario logueado. En cada fila aparece, además, un icono para editar y borrar el proyecto correspondiente. Por otro lado tenemos la opción de subir un nuevo proyecto.

*Habría que valorar si es mejor crear un único buscador para el nombre y descripción del proyecto o dos barras de busqueda, una para cada sección, tal y como se muestra en el boceto anterior.*

## Detalle de un proyecto

![](https://carrebola.github.io/vanillaPill/assets/images/1684861508178-ed1f5e41681a1dcee1edac19f807c239.jpg)

Si el usuario que está viendo la información de un proyecto en concreto es el autor de dicho proyecto, aparecerá un icono para la edición del mismo.

## Nuevo proyecto / Editar un proyecto

![](https://carrebola.github.io/vanillaPill/assets/images/1684861508170-9db2cd42ef7a339d517e3d0b38d4ae45.jpg)

Esta vista sirve tanto para crear un nuevo proyecto como para editarlo.

Si el proyecto es nuevo, el botón mostrará el texto ENVIAR, pero si estamos editándolo aparecerá el texto ACTUALIZAR. Al crear o actualizar el proyecto, la web nos reenvía a la vista 'Detalle de proyecto'.

## Panel administración de proyectos

![](https://carrebola.github.io/vanillaPill/assets/images/1684861508161-c9cfd413730d67ea74b43e48fedea5ec.jpg)

Si tienes el rol 'administrador' aparecerá el item 'Panel administración' en el menú superior específico. Este item nos permite cargar la vista 'Panel administración de proyectos'. Desde esta vista también podemos acceder al 'Panel administración de usuarios'.

Esta vista permite editar o borrar cualquier proyecto haciendo click en los iconos correspondientes. La opción editar nos llevará a la vista 'Editar proyecto'

## Panel administración de usuarios

![](https://carrebola.github.io/vanillaPill/assets/images/1684861508152-04e98cfb1faeecf2a53ea921bdd63ebe.jpg)

Esta vista permite editar los datos de los usuarios. Por supuesto es solo accesible para los administradores.

En esta vista, el método para editar la información es diferentes. Aquí los datos aparecen sobre 'inputs', de manera que al hacer clic sobre ellos, aparecerá el cursor de edición. Se pueden modificar todos los datos (en especial el 'estado' y el 'rol' del usuario) excepto el email.

---

# Hist3b - Test de usuarios inicial
## Primer Test de Usabilidad
Tal y como hemos comentado en el apartado 'Diseño centrado en el usuario', una de las premisas de esta metodología consiste en realizar evaluaciones constantes para detectar los posibles problemas de usabilidad cuanto antes mejor. Por lo que una buena idea es realizar un primer test de usabilidad.

>INFO                            
Más adelante, hablaremos con más detalle de la usabilidad y las diferentes técnicas para evaluarla.

Por el momento os adelanto que la técnica más utilizada par evaluar la usabilidad son los 'tests de usuario'.

Estos consisten en crear una bateria de acciones que el usuario debe realizar, para detectar si existe algún problema en la interación con la aplicación. A continuación vamos pidiendo a un usuario focal (una persona que esté dentro del target de usuarios a quien va dirigida la app) que realice cada tarea, mostrandole los bocetos que aparecerán en cada interacción. Por ejemplo, si hace clic sobre el item de menú 'login' le mostraremos el boceto de la página 'login'.

Para este primer test hemos preparado las siguientes acciones:

- Suponiendo que eres un usuario no registrado:

  - Accede a la información general 'A cerca de' de esta web.
  - Regístrate.
  - Logueate.
  - Modifica tu perfil añadiendo una imagen de avatar.
  - Busca un proyecto llamado 'Tetris'.
  - Accede al detalle de este proyecto.
  - Cierra sesión.

- Suponiendo que eres un usuario con rol 'Desarrollador':

  - Crea un proyecto nuevo.
  - Accede a la lista de tus proyectos.
  - Muestra el detalle de tu nuevo proyecto.
  - Edita tu proyecto cambiando la descripción.
  - Borra tu proyecto.

- Suponiendo que eres un usuario con rol 'Administrador':

  - Muestra la lista de proyectos.
  - Borra un proyecto.
  - Modifica el nombre de un proyecto.
  - Muestra la listra de todos los usuarios registrados.
  - Canvia el rol de uno de ellos.
  - Modifica la imagen de su avatar.

>NOTA                         
Las acciones del test de usuarios han sido realizadas por una persona de 20 años, con estudios universitarios y acostumbrado a navegar por la red y usar herramientas ofimáticas.

## Conclusiones y modificaciones
De este primer test de usuario se desprenden las siguientes conclusiones:

- La vista de proyectos en forma de tabla no es muy atractiva.
- El usuario ha tenido dificultades a la hora de intentar modificar la imagen avatar de un usuario.

Para mejorar estos pequeños problemas de usabilidad vamos a tomar las siguientes acciones:

- En la vista de proyectos vamos crear un par de botones para poder alternar entre ver los proyectos en forma de tabla o en forma de tarjetas.
- En la vista de administración de usuarios, añadir un pequeño icono (un lápiz) sobre la imagen del avatar del usuario para que se intuya que, al hacer clic sobre la imagen, se accede a la ventana de modificación de perfil.

Estos serían los bocetos actualizados:

## Vista de proyectos
*Poner la imagen del los nuevos bocetos*

## Vista del Panel de administraición de usuarios.
*Poner la imagen del los nuevos bocetos*

Ahora que tenemos los bocetos creados y testeados, es el momento de pasar al siguiente nivel: **El diseño de los wireframes.**

---

# Hist4 - Wireframe, mockup y guía de estilos
En el apartado anterior hemos diseñado y testeado los bocetos para la versión 1.0 de nuestro proyecto.

El siguiente paso, si nos basamos en el DCU (Diseño centrado en el usuario), sería diseñar los wireframes y, una vez tenemos los wireframes, los mockups junto a la guía de estilos.

>RECUERDA QUE...                            
Un boceto es un dibujo rápido que representa ideas,
un wireframe es una representación estructural y esquemática,
un mockup es una versión visualmente detallada del diseño y
una guía de estilos establece las pautas visuales y de diseño para un proyecto.
Puedes encontrar más información sobre el diseño de prototipos y guía de estilos 👉 [aquí]()

Un proyecto de mayor envergadura requeriría de un equipo de trabajo con más de un perfil. La tarea de diseñar la interficie corresponde, por un lado, al arquitecto de la información y por otro, a un diseñador gráfico.

>¿QUÉ ES UN ARQUITECTO DE LA INFORMACIÓN?                        
En diseño web, un arquitecto de la información (IA, por sus siglas en inglés) es un profesional encargado de organizar y estructurar la información de un sitio web de manera clara y coherente para mejorar la experiencia del usuario. Su objetivo principal es facilitar la navegación y la búsqueda de información, asegurándose de que los usuarios encuentren lo que están buscando de manera eficiente.
<details>
<summary>Qué hace un arquitecto de la información?</summary>
  El arquitecto de la información se enfoca en varios aspectos del diseño web, como la disposición y organización de los contenidos, la estructura de menús y enlaces, la taxonomía y la categorización de la información, y la creación de esquemas de navegación. Trabaja en estrecha colaboración con diseñadores, desarrolladores y especialistas en experiencia de usuario para crear una estructura coherente y lógica.

Las responsabilidades del arquitecto de la información pueden incluir:

- Análisis de requisitos: Comprender las necesidades y objetivos del sitio web, identificar los requerimientos de información y determinar la mejor manera de organizarla.

- Diseño de la estructura de información: Crear una estructura jerárquica y lógica para los contenidos del sitio web, estableciendo relaciones y categorías claras.

- Creación de esquemas de navegación: Definir la disposición de los menús, la ubicación de los enlaces y la forma en que los usuarios se desplazarán por el sitio web.

- Desarrollo de taxonomías: Clasificar y categorizar la información en términos de etiquetas, categorías y metadatos para facilitar la búsqueda y la recuperación de información.

- Diseño de wireframes y prototipos: Crear representaciones visuales de la estructura y organización de la información mediante wireframes y prototipos interactivos.

- Pruebas y evaluación: Realizar pruebas de usabilidad para verificar la efectividad de la arquitectura de la información y realizar ajustes según sea necesario.

En resumen, el arquitecto de la información en diseño web se encarga de organizar y estructurar la información de manera lógica y coherente, asegurando una experiencia de usuario mejorada y facilitando la navegación y búsqueda de información en un sitio web.
</details>


>**¿Y QUÉ PAPEL JUEGA UN DISEÑADOR GRÁFICO EN LA CREACIÓN DE LOS MOCKUPS Y LA GUÍA DE ESTILOS?**                       
La misión de un diseñador gráfico en la elaboración de mockups es crear representaciones visuales detalladas del diseño final de una interfaz o página web. Su objetivo es plasmar de manera precisa y visualmente atractiva los elementos visuales, como colores, tipografía, imágenes y estilos gráficos, que se utilizarán en el desarrollo del sitio web.

<details>
<summary>El diseñador gráfico crea los mockups y la guía de estilos...</summary>
El diseñador gráfico trabaja estrechamente con el equipo de diseño y desarrollo para convertir los conceptos y requisitos del proyecto en diseños visuales tangibles.

Utiliza herramientas de diseño gráfico y software de prototipado para crear mockups que reflejen el diseño final del sitio web, incluyendo la disposición de los elementos, la jerarquía visual y la experiencia de usuario.

Por otro lado, la misión del diseñador gráfico en la guía de estilos de un proyecto web es establecer y definir los estándares de diseño y las pautas visuales que se utilizarán en todo el sitio web.

El diseñador gráfico se encarga de crear una guía de estilos que incluya información sobre colores, tipografía, iconos, logotipos, espaciado, estilos de botones y otros elementos visuales.

La guía de estilos proporciona coherencia y uniformidad en el diseño del proyecto web, permitiendo que todos los elementos visuales se mantengan consistentes en todas las páginas y secciones. El diseñador gráfico asegura que los diseños de los mockups se alineen con las pautas establecidas en la guía de estilos, garantizando una apariencia visual coherente y una experiencia de usuario fluida en todo el sitio web.

En resumen, la misión de un diseñador gráfico en la elaboración de mockups es crear representaciones visuales detalladas del diseño final de una interfaz o página web, mientras que en la guía de estilos su misión es establecer y definir los estándares de diseño y las pautas visuales que se aplicarán en todo el proyecto web. Ambos roles son esenciales para garantizar un diseño visualmente atractivo, coherente y efectivo en el desarrollo de un sitio web.
</details>

## Y nosotros, ¿necesitamos wireframe? ¿y mockup? ¿y guía de estilos?
En nuestro caso, como el proyecto es muy básico, no nos vamos a centrar en aquellas tareas que corresponderían a un arquitecto de la información ni a un diseñador gráfico.

El mapa web de nuestra aplicación se limita a dar acceso a los proyectos y la administración de los usuarios. Sería tan sencillo com este:

En cuanto al diseño gráfico, aunque es una misión emocionante, nos vamos a limitar a trabajar con un tema de bootstrap utilizando Bootswatch, respetando, a priori, su paleta de colores y modificando, solo en algunos casos, algunos detalles como la fuente para los títulos.

>NOTA              
Puedes ver el aspecto del tema que vamos a utilizar en el siguiente enlace: https://bootswatch.com/cosmo/

![](https://carrebola.github.io/vanillaPill/assets/images/bootswatch-5cfb41f7af4e39535489cba274c60968.png)

>**¿QUÉ ES BOOTSWATCH?**    
Bootswatch es una biblioteca de temas (themes) para Bootstrap, un popular framework de desarrollo web.
Al utilizar Bootswatch, puedes cambiar fácilmente la apariencia de tu proyecto de Bootstrap simplemente importando los archivos CSS correspondientes al tema deseado. Esto te permite ahorrar tiempo y esfuerzo al no tener que crear los estilos desde cero.

---

# Hist5 - Entorno de desarrollo
## Comenzamos el SPRINT 2 - PROTOTIPOS
Comenzamos el sprint 2 que incluye tres historias: La configuración del entorno de desarrollo, la maquetación de los bocetos y la implementación de la validación de los formularios.

![](https://carrebola.github.io/vanillaPill/assets/images/image-1-14f1edaf03a5d4ca8ecc973db80a55cf.png)

*“Dame seis horas para cortar un árbol y pasaré las primeras cuatro afilando el hacha.” – Abraham Lincoln*

Si queremos ser eficientes en la creación de aplicaciones web, lo mejor es empezar por configurar bien nuestro entorno de desarrollo. Para ello vamos a instalar/configurar las siguientes herramientas:

1. Un buen software para escribir nuestro código. En nuestro caso usaremmos el programa VSCode de Microsoft.
2. Instalación del software para el control de versiónes. Nosotros instalaremos GIT.
3. Una aplicación web para sincronizar nuestro repositorio en la nube. En nuestro caso será GitHub.

## 1. VSCode
Sin duda, en le momento de escribir esta documentación, el rey de los IDs es, sin duda, Visual Studio Code (VSCode).

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png)

>NOTE                            
VSCode es un programa muy útil para escribir código. Es como una navaja suiza para los desarrolladores. Te permite editar y organizar tus archivos de código de manera fácil y rápida. Además, tiene un montón de extensiones y herramientas fantásticas que te facilitan la vida, como autocompletado, depuración y control de versiones. En resumen, es como el mejor amigo de un programador, siempre dispuesto a ayudarte a escribir código de manera eficiente.

Os hago un resumen de algunas aspectos que debes tener en cuenta a la hora de instalar y configurar VSCode, y te pondré información ampliada ya que es un tema muy trillado en internet:

## 1.1. Descarga e instala VSCode
Puedes encontrar la versión oficial de vscode aquí

## 1.2. Elige el tema que más te guste.
Puedes tunear tu VSCode instalando diferentes temas. Para ello:

- Desde el buscador de extensiones (ctrl + mayus + X) escribe el nombre del tema que quieres instalar.
- Haz clic en instalar extensión.
- Desde el icono de configuración de vscode (la tuerquecita de abajo a la izquierda) selecciona 'Temas > Tema de color'
- Selecciona el tema que has instalado y... ¡ya lo tienes!

>TIP
En este enlace puedes encontrar algunos temas para instalar en tu VSCode: Themes VSCode                                                                 
                  Y aquí te dejo una tabla de algunos temas que nos recomienda el amigo 'Manz'


Estos son algunos de los temas que nos recomienda Manz"
```
🌈 Flatland Monokai
👀 Enfocado Theme
🟡 Bluloco Dark Theme
🧔 Bearded Theme
🐼 Panda Theme
🟣 2077 Theme
🧛‍♀️ Dracula Dark Theme
💠 SynthWave 84
🤍 GitHub Light Theme
😸 Gatito Theme
💚 Vue Theme
⚫ One Monokai Theme
🌃 Palenight Theme
👧 Doki Theme
🗻 Monokai Theme
🔵 Cobalt2 Theme
🐺 Winter is Coming
```
## 1.3. Instala un tema de iconos, por ejemplo VSCode Icons o Material Icon
Para instalar los iconos el proceso es el mismo:

- Desde el buscador de extensiones escribe el nombre del tema de iconos
- En configuración, selecciona 'Tema > Tema de icono de archivo' y busca el tema instalado.
- Ahora verás que en la columna de la izquierda, cada archivo tiene un icono diferente en función de su extensión: html, css, etc.

### 1.4. Extensiones
Con las extensiones puedes aumentar la potencia y mejorar tu flujo de trabajo.

**Prettier**

Una de las extensiones que te recomiendo sí o sí es 'Prettier'. Esta extensión se va a encargar de formatear tu código HTML y CSS port tí, respetando las identaciones. El proceso para instalar esta extensión es muy simple, solo tienes que buscar la extensión en el buscador y darle a instalar.

>CÓMO FORMATEAR AUTOMÁTICAMENTE EN VS CODE PARA AHORRAR TIEMPO Y ESFUERZO                          
Aquí tienes un artículo donde se explica como instalar y configurar Prettier para que el código se formatee cada vez que guardamos nuestro archivo:

[Cómo formatear automáticamente en VS Code para ahorrar tiempo y esfuerzo]()

*Live Server*

Otra extensión imprescindible para nosotros es Live Server. Mediante esta extensión podremos tener un servidor virtual que mostrará el resultado de nuestro trabajo en un navegador, con la ventaja de que la vista se irá actualizando conforme vamos modificando el código.

Existen infinidad de extensiones para VSCode Aquí puedes ver un ejemplo de mi entorno. Utilizo el tema Night Owl y los iconos de VSCode Icons. Fijate que el código html está formateado con Prettier

![](https://carrebola.github.io/vanillaPill/assets/images/entornovscode-80ba59cf4e146584bd91bdc2ddc30ba1.png)

De momento, con esto es suficiente para comenzar a trabajar en el desarrollo de los prototipos html y css. Más adelante acabaremos de configurar nuestro entorno para trabajar con NodeJS y otras herramientas que nos ayudarán a programar de forma más eficiente.

## 2. Control de versiones - Git
Para el control de versiones vamos a instalar y configurar Git. Aunque seguro que a estas alturas ya sabes qué es Git, pero deja que te refresque algunas ideas importantes:

>INFO                 
✔ Git es como un superpoderoso control de versiones para tu código. Imagina que estás escribiendo un ensayo importante y cada vez que haces cambios guardas una nueva versión en diferentes archivos, como "ensayo_v1", "ensayo_v2" y así sucesivamente. Git hace algo similar pero para tu código.                      
✔ Con Git, puedes guardar diferentes versiones de tu proyecto a medida que avanzas. Esto significa que si cometes un error o quieres volver a una versión anterior, ¡es pan comido! Git te permite viajar en el tiempo y regresar a cualquier punto en la historia de tu proyecto.                               
                      ✔ Pero eso no es todo. Git también es excelente para trabajar en equipo. Puedes colaborar con otros programadores sin pisar los pies de nadie. Cada persona puede trabajar en su propia versión del proyecto y luego combinar los cambios de todos de manera ordenada.      
✔ Además, Git hace que compartir tu código sea súper fácil. Puedes subir tu proyecto a un repositorio en línea (como GitHub o GitLab) y otras personas pueden descargarlo y contribuir. Incluso puedes colaborar con desarrolladores de todo el mundo en proyectos de código abierto.                       
     Aprender git es muy importante para un desarrollador web. Por suerte lo vas a estudiar (si no lo has hecho ya) en el ciclo de DAW. De todas formas te dejo un enlace con más información que te será muy util para entender conceptos como que es una rama, como subir ramas al repositorio, clonarlas, sincronizarlas etc:

[👉Hello Git & GitHub👈]()

Vamos a instalar (si aun no está instalado) Git. Para ello:

1. Descarga su última versión de la web oficial: Download Git.

2. Instala en tu ordenador el software.

3. Configura git para tu usuario:

  - Lo primero que deberás hacer cuando instales Git es establecer tu nombre de usuario y dirección de correo electrónico. Esto es importante porque los "commits" de Git usan esta información, y es introducida de manera inmutable en los commits que envías:
  ```
    $ git config --global user.name "John Doe"
    $ git config --global user.email johndoe@example.com  
  ```
Sólo necesitas hacer esto una vez si especificas la opción --global, ya que Git siempre usará esta información para todo lo que hagas en ese sistema

```
INFO
✔️ Tienes más información de cómo configurar Git aquí:

👉Configurando Git por primera vez👈

✔️ Si quieres aprender más sobre git también puedes consultar este recurso de Obdulia Montiel:

👉La guía para principiantes de Git y Github👈
```

## 3. Repositorio en linea - Github

Ahora que tenemos Git instalado en nuestro ordenador, vamos crearnos una cuenta en Github para poder sincronizar todo nuestro trabajo en la nube.

```
¿QUÉ ES Y PARA QUE SIRVE GITHUB?
✔️ GitHub es una especie de red social para programadores. Es un lugar en línea donde los desarrolladores pueden compartir y trabajar en proyectos de software.

✔️ Funciona como un repositorio donde se guarda el código de diferentes versiones de un proyecto. Permite la colaboración entre programadores, quienes pueden ver y sugerir cambios en el código.

✔️ Es una herramienta muy popular y útil en la comunidad de desarrollo de software.
```

1. En primer lugar vamos a acceder github.com
2. Crea una cuenta e inicia sesión.
3. Ahora vamos a crear un proyecto de prueba con vscode, craremos un repositorio y lo sincronizaremos con github.


## Configurando entorno y subiendo página de pruebas
Vamos a ver un ejemplo de todo el proceso. La idea es instalar y configurar nuestro entorno de desarrollo para después crear una página web, guardar una versión en git, subirla a github y publicarla en github pages. Vamos a por ello:

1. Instala VSCode si no la has hecho aún.

2. Configúralo con el tema que más te guste, los iconos que decidas e instala las extensiones live server y prettier.

1. Crea una carpeta en tu ordenador con nombre pruebas

4. Abre VSCode y arrastra la carpeta dentro de la ventana central.

5. Crea un archivo con nombre index.html (algo básico, con un h1 y poco más).

6. Muestra el resultado en el navegador utilizando live server.

7. Configura prettier para que al guardar con ctrl + S se aplique formateado de tu código. Pruebalo.

8. Instala Git si no lo has hecho aún.

9. Configura tu usuario o confirma que ya está configurado.

10. Haz clic en el icono de 'Control de fuente' de tu vscode o pulsa ctrl + Mayus + G

11. Aparecerá un mensaje que te indica que no tienes repositorio creado, y te dará la opción de crearlo desde aquí. Hazlo

![](https://carrebola.github.io/vanillaPill/assets/images/pruebas-699477c2eaed5615c35abc13ab591adb.png)

![](https://carrebola.github.io/vanillaPill/assets/images/confirmgit-05eb2b43bcbe481fd8cec6be0976d4a5.png)

12. Escribe un mensaje de inicio de repositorio (por ejemplo 'primer commit de git') y dale a confirmar.

13. Ahora te pedirá si quieres publicar la rama ('Branch'). Dile que sí. Al hacer clic te preguntará qué nombre quieres para el repositorio y si quieres que sea privado o público. Por defecto, el nombre del repositorio coincide con el nombre de la carpeta de tu proyecto, pero puedes cambiarlo si lo deseas. Para esta prueba haremos que nuestro repositorio sea público.

14. Si es la primera vez que conectas tu VSCode con github te pedirá que lo sincronices. Utiliza la opción de confirmar a través de VSCode.

15. Una vez publicado tu archivo en github podrás ver, en tu página de github (por ejemplo carrebola.github.com), algo así:

![](https://carrebola.github.io/vanillaPill/assets/images/github-331ad9adada0e68ee217ed2a11147d31.png)

> ¿CÓMO UTILIZAR GIT DESDE VISUAL STUDIO CODE?                       
Aquí te dejo un enlace a un artículo de donde nos explica como trabajar con git y github desde VSCode:

[👉¿Cómo utilizar Git desde Visual Studio Code?👈]()

1. Vamos a documentar de forma básica nuestro proyecto prueba. Para ello vamos ahora a crear un archivo readme.md para que github muestre información del proyecto publicado en su pantalla inicial:
- Crea un archivo con nombre readme.md en la raiz de la carpeta del proyecto.
- Escribe dentro un texto descriptivo del proyecto, como por ejemplo:

```
# Configurando nuestro entorno de desarrollo

1. Instalación de VSCode
2. Configurarción de git y github
3. Pruebas con proyecto
```

Si abrimos ahora github podemos ver como se muestra esta información en la portada del repositorio de github.

![](https://carrebola.github.io/vanillaPill/assets/images/pruebamarkdown-e0afca8f47d07e677b84a971c713f4c3.png)

TIP
Fíjate que el # equivale a un <h1></h1> y que la numeración se comporta como una lista ordenada <ol></ol>. Este tipo de lenguaje se llama Markdown.

APRENDE MARKDOWN
Si quieres saber más de este sencillo y potente lenguaje aquí tienes más información:

👉 MARKDOWN👈

14. Para terminar vamos a subir nuestro proyecto a github pages. Para ello:
      - Haz clic en Settings (el icono con forma de engranaje de la parte superior)
      - Entra en Pages (opción que encontrarás en el menú lateral izquierdo)
      - Donde pone Branch selecciona la rama main y haz clic en Save.
      - Si todo ha ido bien, la página se está publicando... Espera un minuto y refresca la página con F5
      - Ahora puedes ver la url donde se ha publicado tu página. Haz clic en el enlace o en el botón Visit site y podrás ver la web publicada.

![](https://carrebola.github.io/vanillaPill/assets/images/githubpages-29b29a98b367965695b01b043cb7c0d2.png)

> INFO                         
GitHub Pages es como un servidor web estático gratuito para que los desarrolladores muestren su trabajo al mundo. Básicamente, puedes tomar tus proyectos de GitHub y convertirlos en páginas web públicas para que cualquiera las vea.

Y hasta aquí la configuración de nuestro entorno de desarrollo, al menos la versión básica. Más adelante aprenderemos a trabajar con otras herramientas como nodejs, eslint, etc, pero de momento, con este entorno, ya estamos preparados para crear los prototipos en html y css de la primera versión de nuestro proyecto.

# ¡¡¡ Comienza el juego !!!
Ahora que tenemos el hacha afilado, es el momento de comenzar a escribir el primer código de nuestro proyecto. Pero antes vamos a crear un proyecto nuevo en VSCode, a continuación crearemos un repositorio y lo vincularemos con github. Después crearemos una rama exclusiva para el diseño de los prototipos en html/css. Y ya estaremos listos para comenzar a picar código. Vamos a ello:

## Creando la rama principal
1. Crea en tu carpeta de proyectos una carpeta con nombre vanillagames10

2. Abre VSCode y arrástrala a la parte central de tu IDE

>DANGER                     
Asegúrate de que has arrastrado la carpeta a la ventana central de VSCode. Si la arrastras a la columna de la izquierda tendrás varios proyectos abiertos a la vez, y podrías tener problemas cuando trabajes con tu repositorio. Yo te recomiendo que cada ventana de VSCode contenga tan solo un proyecto único.

3. Crea un repositorio para el proyecto.

4. Crea el primer commit con el mensaje 'Commit principal'

5. Publica la rama con el mensaje 'Rama principal'

6. Publica el repositorio como privado

7. Ahora tienes un proyecto con una única rama, cuyo nombre por defecto es main. Vamos a crear un archivo readme.md para esta rama. Escribe en él el título 'Vanilla Games' junto a un párrafo con la descripción del proyecto: 'Vanilla Games es el nombre que recibe el proyecto que vamos a desarrollar en esta documentación. Es un proyecto sencillo, en las versiones iniciales, que se irá complicando a medida que vayamos trabajando en él.'.

8. Crea un segundo commit con el texto 'Creamos archivo readme.md para rama principal'. A continuación sincroniza los cambios con github.

9. Abre ahora la página de github y comprueba que:

      1.  El proyecto se ha creado y subido con éxito en la rama main.
      2. Se muestra la información del archivo readme.md en la página principal.
      3. Se muestra el mensaje del commit que has hecho.

![](https://carrebola.github.io/vanillaPill/assets/images/inicioproyecto-ab5828d05b8e4317f9f0087120d9361e.png)

### Creando la rama prototipos
Vamos a crear una rama exclusiva para el diseño de los prototipos y a subirla a github. Sigue los siguientes pasos:

1. Crea una rama nueva con nombre prototipos. Para ello haz clic en el nombre de la rama actual 'main' que verás en la parta inferior izquierda de VSCode.

2. Selecciona Crear rama...

3. Vamos a ponerle el nombre 'prototipos'

4. Fijate que ahora en la parte inferior izquierda aparece el nombre de la rama actual en la que estás trabajando.

5. Crea una carpeta en la raiz con nombre prototipos.

6. Ahora vamos a crear el archivo home.html (de momento pon un h1 con el título y poco más)

![](https://carrebola.github.io/vanillaPill/assets/images/protos1-26ba5502c1bce36be8cc2de8a52a4433.png)

7. Y hacemos un commit con el texto 'Prueba prototipo home'. Te pedirá si quieres publicar la rama, dile que sí y haz push (sincronziar con github).

8. Fíjate que ahora en github tienes las dos ramas, la rama mainy la rama prototipos. En la rama main solo tienes el archivo readme.md pero en la rama prototipos ahora ya tienes la carpeta prototiposcon el archivo home.html. Es decir, ahora tienes un repositorio de tu proyecto pero con diferentes ramas que, por el momento, serán completamente independientes.

![](https://carrebola.github.io/vanillaPill/assets/images/ramaprototipos-4b6a4adf8d2813e783f2498ea4b6a395.png)

9. Ya para acabar, puede ser interesante crear un archivo readme.md dentro de la carpeta prototipos. Hazlo y sube los cambios a github

![](https://carrebola.github.io/vanillaPill/assets/images/readmeprototipos-a2709d586bc007c947e45e1744b72777.png)