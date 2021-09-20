# Prueba-Diana-Salazar
Prueba Técnica - Diana Salazar

# Clonar el proyecto desde git hub

Para clonar el proyecto: En el git hub, es necesario cambiar de la rama main por defecto a la rama master posterior a esto: ejecutar el siguiente comando en la terminal de git bash: 

 git clone --branch master url 

 Esto permitira que el proyecto se clone de forma correcta.
 Posterior a esto, se abre el proyecto en el editor de codigo de visual studio code, 
 se ejecuta el comando:

 npm install

 y posterior se ejecuta

  ng serve
   El proyecto se ejecuta:  en  http://localhost:4200/


-----------------------------------------------------------------------------------------


  # Funcionamiento del proyecto
  El proyecto esta basado en la logica modularizada, la cual permite usar lazy loading 
  en donde el header y el footer son estaticos y cambia el layout. En el proyecto se implemento Angular Materials en las diferentes componentes.
  Lo primero que se visualiza al ingresar,  es el componente del home, el cual tiene el titulo  "Personajes de Marvel".

  En la parte superior se encuentra el menu de navegacion, donde esta la opcion del home, personajes, y carousel. La navegacion es posible gracias a el routing y las etiquetas <roter-oulet></router-oulet> ubicadas en determinadas componentes.

# Opcion del Home:
Cuando se da click en esta opcion se dirige a el componente del home

# Opcion de personajes:
Cuando se da click en esta opcion se dirige a el componente card, donde se muestran las diferentes card con los diferentes personajes, tambien se visualiza el boton de ver mas en cada card. Para la creacion de laslas card, se hizo uso de un ngFor. Una vez se da click en el button "ver mas" se dirige al componente de detalle.

# Opcion ver mas:
Cuando se da click en esta opcion se dirige a el componente detalle, el cual es el que permite ver el detalle de cada card. Para realizar esto se hizo uso del servicio productoservice ubicado en la carpeta core- y se implemento el metodo getProduct.

# Opcion Carousel:
Cuando se da click en esta opcion se dirige a el componente carousel,  donde se visualiza un carousel o un swiper, con las diferentes imagenes de los personajes y su respectivo boton de ver mas, cuando se da click en el boton ver mas se dirige al componente de detalle. 

------------------------------------------------------------------------------------------

  # Estructura de carpetas (Modulos):

  # Modulo de Shared: 
  Este modulo corresponde a los componentes compartidos,
  dentro del modulo se encuentran 3 componentes: Footer, Header, Layout.

# Modulo de Layout: 
  Este modulo corresponde a los componentes que permiten que el layout cambie y la aplicacion se mueva con las rutas,dentro del modulo se encuentran 4 componentes: card, carousel,detalle,home.

# Modulo de materials: 
Este modulo corresponde al de angular material, el cual permitio importar cada uno de los componentes implementados en el proyecto. algunos de los componentes de angular material fueron button, card, mat tolbar entre otros, todos estos fueron importados en el (t.s) de modulo. 


# Estructura de carpetas (Carpetas):

# core: 
Esta carpeta corresponde a los servicios. Para el proyecto se creo un Productoservice que permitio obtener el detalle de cada personaje.Tambien dentro de la carpeta se encuentra  el modelo, el cual permitio tipar el arreglo de objetos del servicio. 

# assets:
En esta carpeta se enuentran las diferentes imagenes de la aplicacion, estan guardadas de forma local en el proyecto. 


----------------------------------------------------------------------------------------

# Aplicacion Movil cordova

Para realizar la conexion a cordova fue necesario: instalar cordova haciendo uso del siguiente comando:

npm install -g cordova

se creo la carpeta ejecutando el siguiente comando:

cordova create cordova

y posterior a esto se agregaron las plataformas:
ejemplo: 
cordova platform add browser

posterior a esto se hizo el proceso para obtener el archivo .apk

# Ejecutar aplicacion Movil 

Para visualizar la aplicacion movil, se anexa una carpetvaa llamada Prueba-cordo dentro de la carpeta del proyecto, esta carpeta hace posible la ejecucion, por medio de los siguientes comandos:

Movil:
 cordova run android


 Navegador: 
  cordova run browser


---------------------------------------------------------------------------------------
# Herramientas necesarias: 


# Angular Materials
Es necesario instalar angular material dentro del proyecto.

# Documentacion:
se hizo uso de las diferentes documentaciones para la creacion del <swiper> 
en el componente de carousel.


