## **Índice**
*  [1. Resumen del proyecto](#resumen-del-proyecto)
*  [2. Resumen del producto](#poketmon-resumen-del-producto)
*  [3. Planificación](#planificacion)
*  [4. Proceso de Diseño](#proceso-de-diseno)
    *  [4.1. Definición de usuario](#definición-de-usuario)
    *  [4.2. Encuesta On line](#encuesta-on-line)
    *  [4.3. Historias de usuario](#historias-de-usuario)
*  [5. Proceso Diseño de la Interfaz de Usuario](#proceso-diseno-de-la-interfaz-de-usuario)
    *  [5.1. Diagrama de flujo](#diagrama-de-flujo)
    *  [5.2. Prototipo de baja y media fidelidad](#prototipo-de-baja-y-media-fidelidad)
    *  [5.3. Test de usuario](#test-de-usuario)
    *  [5.4. Prototipo de alta fidelidad](#prototipo-de-alta-fidelidad)
    *  [5.5. Decisiones de diseño](#decisiones-de-diseno)
    *  [5.6. Test de usuario](#test-de-usuario)
    *  [5.7. Interfaz final](#interfaz-final)
    *  [5.8. Pruebas unitarias](#pruebas-unitarias)
    *  [5.9. Herramientas utilizadas](#herramientas-utilizadas)
*  [6. Conclusión](#conclusion)
*  [7. Checklist](#checklist)

## **1. Resumen del proyecto**

## **2. PoketMon - Resumen del producto**

## **3. Planificación**

  ***
## **4. Proceso de Diseño**

  ***
### **4.1. Definición de usuario**

  ***
### **4.2. Encuesta On line**



 ***
### **4.3. Historias de usuario**
-  **HU01** - **YO COMO** jugador principiante de pokémon Go, **QUIERO** saber los datos básicos(nombre y número de la pokedex) de cada pokémon, **PARA** saber cuáles me faltan capturar.
<a href="https://ibb.co/x6fLnXq"><img src="https://i.ibb.co/w4wgnBh/5-Historia-de-Usuario.png" alt="5-Historia-de-Usuario" border="0"></a>

-  **HU02** - **YO COMO** jugador principiante de pokemon go, **QUIERO** poder ordenar la lista de pokemones alfabéticamente y por número de la pokedex, **PARA** encontrar el personaje que busco con mayor rapidez.
-  **HU03**- **YO COMO** jugador intermedio de Pokémon Go, quiero conocer las debilidades de cada pokemon**PARA** saber cuál utilizar y lograr vencer en una batalla.
-  **HU04** - **YO COMO** usuario intermedio **QUIERO** saber cuál es el porcentaje de pokemones que hay por tipo, **PARA** tener una idea de que probabilidades tengo de encontrarlo en estado salvaje.

***
## **5. Proceso Diseño de la Interfaz de Usuario**

### **5.1. Diagrama de flujo**
Nuestro sitio cuenta con un flujo simple, para que sea de rápido acceso para los usuarios.

<a href="https://ibb.co/DKgbQVv"><img src="https://i.ibb.co/KyzGW0f/6-Diagrama-de-flujo.png" alt="6-Diagrama-de-flujo" border="0"></a>

Cuenta con un “Home” o página principal con 4 opciones de interacción (botones):
1.  **Botón PoketDex:** Lleva a una galería con un card para cada pokémon. En este sitio a su vez se encuentran 3 botones de interacción:
- Input para ordenar ascendente o decrecientemente los pokemones por Número o Alfabéticamente.
- Input para filtrar los pokemones por tipo (Elemento).
- Input para Filtrar los pokemones por la debilidad que presentan frente a determinado elemento o tipo.
2.  **Botón +PoketGo:** Lleva a una página donde de muestran algunos tips para enfrentar el juego.
3.  **Botón Facebook:** Link a la red Facebook oficial de Pokemon Go Chile.
4.  **Botón Instagram:** Link a la red Instagram oficial de Pokemon Go Chile.
  
***
### **5.2. Prototipo de baja y média fidelidad**
Nuestro prototipo de baja fidelidad, es una representación gráfica simple de lo descrito en nuestro diagrama de flujo:

<a href="https://ibb.co/5MqCnfP"><img src="https://i.ibb.co/p0CNR9S/7-Prototipo-Baja-Fidelidad.png" alt="7-Prototipo-Baja-Fidelidad" border="0"></a>

  
Fue más desarrollado en Balsamiq creando en un prototipo de media fidelidad, el cuál fue testeado:

<a href="https://ibb.co/237z7y9"><img src="https://i.ibb.co/F4bQbKr/8-Prototipo-Media-Fidelidad.png" alt="8-Prototipo-Media-Fidelidad" border="0"></a>

***
### **5.3. Test de usuario**

Hicimos las pruebas (utilizando Loom) con 5 usuarios (grabamos 4) utilizando el prototipo hecho en Balsamiq. Evaluamos los seguientes puntos:

- Percepcion de los colores y fuentes: preguntamos que sensación le causaban los colores causaba.

- Si el diseño de la interfaz le parece intuitivo: Fue propuesto el recorrido de la historia del usuario - ingresando en al página, para que filtrara los pokemones que tuvieran la debilidad de Agua e ingresar en el card.

- Evaluar si la información del card es interesante y cumplen con las necesidades al usuario.

- Si es intuitiva la manera de volver a la pantalla principal, o recorrer la galería de pokemones.

A continuación se encuentran los links de los tests:

<a href="https://ibb.co/PNTvypk"><img src="https://i.ibb.co/G0s4Dwm/9-Test-con-usuario-con-Loom-y-Balsamiq.png" alt="9-Test-con-usuario-con-Loom-y-Balsamiq" border="0"></a>

- Link para [Test 01](https://www.loom.com/share/b08482d987734f7d8389376f47ab3eb3)

- Link para [Test 02](https://www.loom.com/share/5f6e592fbde24c809c8823804b3e30ce)

- Link para [Test 03](https://www.loom.com/share/2c58a113d96a4e35a2e9eb1deff01ac5)

- Link para [Test 04](https://www.loom.com/share/8e5339b590b541008a088dd1dfa1c5d8)

Recibimos algunos feedbacks, con los que decidimos hacer los siguientes cambios al diseño:

- Sacar pantalla input donde el usuario debía ingresar su nombre de entrenador, porque no íbamos a tener un registro de esto, y no cumplía realmente con alguna función de utilidad.

- Simplificar la pantalla “Home”.

- Eliminar opción para ver gráfico de datos en pantalla “Home”.

<a href="https://ibb.co/sjKsyfx"><img src="https://i.ibb.co/ZdBcWj4/10-Prototipo-M-dia-Fidelidad-revisado.png" alt="10-Prototipo-M-dia-Fidelidad-revisado" border="0"></a>

  ***

### **5.4. Prototipo de alta fidelidad**

Después de realizar un estudio de “benchmark” consultando a los potenciales usuarios sobre cuáles son los principales sitios y/o aplicaciones que utilizan para obtener información de pokemon Go, tomamos como referentes las páginas que ellos nos mencionaron para armar nuestro sitio. 
Los sitios que visitamos sobre el tema, tenian un diseño entretenido pero cargado de información, lo que encontramos excesivo para el usuario. Además todos utilizaban colores muy fuertes:

<a href="https://ibb.co/8DdgWcF"><img src="https://i.ibb.co/N6m28Sw/11-Estudio-de-Benchmark.png" alt="11-Estudio-de-Benchmark" border="0"></a>

<a href="https://ibb.co/ngvrqYL"><img src="https://i.ibb.co/HFs7LbH/12-Estudio-de-Benchmark.png" alt="12-Estudio-de-Benchmark" border="0"></a>
  
Los sitios que usamos finalmente como referencia fueron los siguientes:

-  [Pokemon Go](https://www.pokemon.com/es/pokedex/) Página oficial del juego (nos basámos específicamente en el sitio “pokedex” que se encuentra dentro de la página).
-  [Pokémon Go info](https://pokemon.gameinfo.io/pt-br/tools/iv-calculator) Dentro de este sitio web se encuentra una aplicación llamada IV calculator. Esta utilidad calcula el potencial que tiene un pokémon específico para enfrentar un combate. Solo nos pide proporcionar los datos de PC (Puntos de combate), PS (Puntos de salud) y cantidad de polvos estelares que requiere para aumentar su PC.
-  [Poke Genie](https://andro4all.com/2018/07/iv-pokemon-go-que-es) Aplicación IV calculator disponible en Google play.
Básicamente calculadora de los “valores individuales” (ataque, defensa y salud) de los pokemones. Información de alta utilidad a la hora de elegir que pokémon utilizar en incursiones y combates en gimnasios.

### **5.5. Decisión de diseño**

Como decisión final del diseño, quisimos basárnos en la Pokedex original de la serie, eligiendo colores similares como rojo, azul y gris (en tonalidades más suaves), sumado al estilo "manga" que utilizamos en los íconos e imagenes de nuestro sítio. Optamos por un diseño minimalista enfocado en el juego Pokemon Go.

<a href="https://ibb.co/djsq2Gn"><img src="https://i.ibb.co/gmbpTzs/13-Estudio-de-colores-y-fuente.png" alt="13-Estudio-de-colores-y-fuente" border="0"></a>

Acá pueden ver el prototipo realizado en figma [el proyecto en Zeplin](https://zpl.io/bJGBw83):

<a href="https://ibb.co/CMWJPVW"><img src="https://i.ibb.co/yYVh4gV/14-Prototipo-de-Alta-Fidelidad-Mobile.png" alt="14-Prototipo-de-Alta-Fidelidad-Mobile" border="0"></a>

<a href="https://ibb.co/gJ6vYrc"><img src="https://i.ibb.co/bX7Ht6G/15-Prototipo-de-Alta-Fidelidad-Desktop.png" alt="15-Prototipo-de-Alta-Fidelidad-Desktop" border="0"></a>

  ***

### **5.6. Test de usuario**

Realizamos una prueba de usuario con el prototipo de alta fidelidad, y el feedback recibido fue el siguiente:

<a href="https://ibb.co/swWws5f"><img src="https://i.ibb.co/NjTjW1v/16-Test-Prototipo-Alta-Fidelidad.png" alt="16-Test-Prototipo-Alta-Fidelidad" border="0"></a>

Link para el [Test Prototipo de Alta Fidelidad](https://www.loom.com/share/b64c9f3d81ca4de4a66d734da4c5959d) en loom

- A los usuarios les agrada la paleta de colores utilizada en el proyecto.
- La interfaz les parece amigable.
- Les gusta que haya una miniguía con tips para jugadores principiantes.
Nos suguieren añadir lo siguiente:
- Entregar más información de los filtros.
- Cruzar datos entre filtros.
- Asignarle a los card un modal, para mostrar más información.
- Incluir un botón para volver a arriba automáticamente.
- Incluir un Campo de Búsqueda. 
  
***
### **5.7. Interfaz final**

la interfaz final quedó similar al prototipo de alta fidelidad, variando en algunos detalles muy pequeños, cómo por ejemplo la localización de los links de las redes sociales y el buscador. El sitio todavía no es responsivo para mobile, lo cuál es una de las mejoras que pretendemos hacer.

<a href="https://ibb.co/QdKGbRW"><img src="https://i.ibb.co/GT5jxLZ/17-Pagina-Home.png" alt="17-Pagina-Home" border="0"></a>

<<<<<<< HEAD
<a href="https://ibb.co/0rsV5Xd"><img src="https://i.ibb.co/qpJF6nP/18-Pagina-Poket-Dex.png" alt="18-Pagina-Poket-Dex" border="0"></a>
=======
## **1. Preámbulo**

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por el usuario.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

\* Puedes ver el datalle de la data en este [link](https://gist.github.com/lalogf/dd4aa3017a9f8aa8f90dfbca382c4dc9#file-student-json)
y la interfaz construida en este [link](https://app.talento.laboratoria.la/profile/HFOoMpOreBU2psCcjjLg5O2EWEv2).

## **2. Resumen del proyecto**

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que descubras que tu usuario
necesita.

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que
explores y decidas con qué temática te interesa trabajar. Hemos elegido
específicamente estos sets de datos porque creemos que se adecúan bien a esta
etapa de tu aprendizaje.

Una vez que definas tu área de interés, entiende quién es tu usuario y qué
necesita saber o ver exactamente; luego podrás construir la interfaz que le
ayude a interactuar y entender mejor esos datos.

Estos son datos que te proponemos:

* [Banco Mundial](src/data/worldbank/worldbank.json) Indicadores de desarrollo del Banco Mundial de algunos países (Brasil, Chile, 
  México y Perú). Estos datos incluyen indicadores demográficos, económicos y 
  comerciales.
* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 151 Pokémon de la región de Kanto,
  junto con sus respectivas estadísticas usadas en el juego [Pokémon GO](https://pokemongolive.com).
* [Steam noticias](src/data/steam/steam.json):
  Lista noticias relacionadas a los videojuegos presentes en la
  plataforma de [Steam](https://store.steampowered.com/).
* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de jugadores en una liga del
  juego League of Legends (LoL), puedes revisar la documentación de su API en
  este [link](https://developer.riotgames.com/api-methods/).
* [Personas heridas por medio de transporte en EEUU](src/data/injuries/injuries.json).
  Este set nos muestra el número de personas heridas en accidentes de
  transporte, con data anual desde 1960 y categorizada por tipo de transporte
  (aire, barco, automóvil, moto, bicileta, ...).
* [Rick and Morty](src/data/rickandmorty/rickandmorty.json): Este set nos proporciona la lista de los personajes de la serie Rick and Morty. Puedes revisar la documentación de su API en este [link](https://rickandmortyapi.com/)
* [Pacientes en EEUU](src/data/patient/patient.json): Este set nos proporciona una lista de pacientes de EEUU. Puedes revisar la documentación de su API en este [link](https://r2.smarthealthit.org/Patient)

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y hacer algún calculo agregado**. Como aclaración,
con cálculo agregado nos referimos a distintos cálculos que puedes hacer con
la data que tienes para mostrar información aún más relevante a los usuarios.
Una opción serían cálculos estadísticos como el promedio, el máximo o el mínimo,
por ejemplo, si tenemos una colección que representa a un grupo de personas,
y cada persona está representada como un _objeto_ con una _propiedad_ `altura`,
podríamos elegir calcular la altura promedio en el grupo entre otras cosas.

## **3. Objetivos de aprendizaje**

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

Dicho en palabras sencillas, aprenderás a:

* Aplicar y profundizar todo lo que aprendiste en el proyecto anterior.
* Pensar en las **necesidades de los usuarios** para crear historias de usuario.
* Escribir y trabajar con **historias de usuario**, sus definiciones de
  terminado (_definition of done_) en la organización y planificación de tu
  trabajo.
* Definir qué data y de qué forma mostrarla en el producto, basándote en
  tu **entendimiento del usuario**.
* Crear productos que sigan los **principios básicos de diseño visual** y
  las **heurísticas de usabilidad**.
* Iterar el diseño del producto, basándote en los resultados de los
  **tests de usabilidad**.
* Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
* **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
* **Manejar eventos del DOM** para permitir interacción con el usuario
  (filtrado, ordenado, ...).
* Entender los beneficios y complejidades de **trabajar en equipo** en un
  ambiente de incertidumbre.

## **4. Consideraciones generales**

* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo para completarlo: El proyecto dura 2.5
 semanas, trabaja con sprints 
y planificando tus tareas.
* La división y organización del trabajo debe permitir, sin excepciones, que **cada integrante** del equipo practique el aprendizaje de todo lo involucrado en **cada historia**. No se dividan el trabajo como en una fábrica.
* Antes de comenzar, conversen sobre cómo le fue a cada una en el proyecto anterior para que puedan entender mejor cómo organizarse. No caigan en el error de cada una hacer lo que ya sabe bien cómo hacer. Aprovechen la oportunidad de hacer lo que no saben bien. Acá estás para aprender, no para "entregar" proyectos solamente.
* Una vez que hayan definido y priorizado sus Historias de Usuario, solamente podrán trabajar en una por vez, no pueden avanzar a la siguiente sin haber completado la anterior. La historia se completa cuando se cumplen **todos** sus Criterios de Aceptación + **toda** su Definición de Terminado.

## **5. Criterios de Aceptación Mínimos del Proyecto**

Los criterios para considerar que has completado este proyecto son:

### **5.1 Definición del producto**

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### **5.2 Historias de usuario**

Una vez que entiendas las necesidades de tu usuario, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Asegúrate de incluir una definición
de terminado (_definition o done_) para cada una.

### **5.3 Diseño de la Interfaz de Usuario**

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado sketches (boceto) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que realices, y las subas a tu repositorio, y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc. Recuerda utilizar la identidad
gráfica correspondiente a cada set de datos que elijas.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para hackear. Además, tu
diseño debe seguir los fundamentos de _visual design_. También, deberás exportar
tu diseño a [Zeplin](https://zeplin.io/) y utilizar las especificaciones de
estilo que te dé Zeplin al momento de implementar tus diseños en código.

#### Testeos de usabilidad

Durante el reto deberás realizar tests de usabilidad con distintos usuarios, y
en base a los resultados de esos tests, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los tests y cómo los
mejoraste en tu propuesta final.

### **5.4 Implementación de la Interfaz de Usuario (HTML/CSS/JS)**

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz tal como la
diseñaste. Tendrás un tiempo limitado para hackear, así es que deberás
priorizar.

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
2. Permitir al usuario filtrar y ordenar la data.
3. Calcular estadísticas de la colección (o subcolección) como media aritmética,
   máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece
   un determinado valor, por ejemplo.
4. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
siga los fundamentos de _visual design_.

### **5.5 Pruebas unitarias**

El _boilerplate_ de este proyecto no incluye pruebas unitarias, pero esperamos
que escribas tu propias pruebas unitarias para las funciones encargadas de
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.
Para ello te recomendamos implementar las siguientes funciones en el archivo
`src/data.js`:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estas son ideas de funciones que podrías implementar, pero esto depende de tu
propia implementación.

El archivo `src/data.js` tiene que tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_).

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

## **6. Parte Opcional (Hacker edition)**

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## **7. Consideraciones técnicas**

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#parte-opcional-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── package.json
├── README.md
├── src
│   ├── data
│   │   ├── injuries
│   │   │   ├── injuries.js
│   │   │   └── injuries.json
│   │   ├── lol
│   │   │   ├── lol.js
│   │   │   └── lol.json
│   │   ├── pokemon
│   │   │   ├── pokemon.js
│   │   │   └── pokemon.json
│   │   ├── steam
│   │   │   ├── steam.js
│   │   │   └── steam.json
│   │   └── worldbank
│   │       ├── worldbank.js
│   │       └── worldbank.json
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    └── data.spec.js

8 directories, 17 files
```

### `src/index.html`

Al igual que en el proyecto anterior, existe un archivo `index.html`. Como ya
sabrás, acá va la página que se mostrará al usuario. También nos sirve para
indicar qué scripts se usarán y unir todo lo que hemos hecho.

En este archivo encontrarás una serie de _etiquetas_ (_tags_) `<script>`
_comentadas_. Para _cargar_ las diferentes fuentes de datos tendrás que
_descomentar_ estas _etiquetas_. Cada uno estos scripts asignará una variable
global con la data correspondiente a esa fuente de datos.

Por ejemplo, si descomentamos la siguiente línea:

```html
<!-- <script src="./data/worldbank/worldbank.js"></script> -->
```

La línea quedaría así:

```html
<script src="./data/worldbank/worldbank.js"></script>
```

Y ahora tendríamos la variable global `WORLDBANK` disponible en nuestros otros
scripts (como `src/data.js` o `src/main.js`).

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos y
objetos. La idea de este archivo es contener toda la funcionalidad
que corresponda a obtener, procesar y manipular datos.

En este archivo esperamos que implementes las funciones detalladas en la sección
de [_Pruebas Unitarias_](#pruebas-unitarias).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#parte-opcional-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## **8. Evaluación**
Recuerda revisar la [rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada habilidad y cada nivel. Esta es una
lista de todas las habilidades involucradas en este proyecto y que evaluaremos
cuando lo completes:

### **General**

| Característica/Habilidad |
|--------------------------|
| Completitud |

### **Tech**

| Habilidad |
|-----------|
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Estructuras de datos |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| **CSS** |
| DRY |
| Responsive |
| **SCM** |
| Git |
| GitHub |
| **CS** |
| Lógica |
| Arquitectura |

### **UX**

| Habilidad |
|-----------|
| User Centricity |
| Visual Design |

### **Habilidades Blandas**

| Habilidad |
|-----------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo |
| Responsabilidad |
| Comunicación eficaz |
| Presentaciones |
>>>>>>> 24aa43953db99d94935609fb1af7e7293ba0e6c7

<a href="https://ibb.co/kDF7tNC"><img src="https://i.ibb.co/B6Rp90M/19-Pagina-Poket-Go.png" alt="19-Pagina-Poket-Go" border="0"></a>
  
***
### **5.8. Pruebas unitarias**

El _boilerplate_ de este proyecto incluye pruebas unitarias:
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas. Para ello implementamos las siguientes funciones en el archivo`src/data.js`:
-  `filterData(data, condition)`: esta función `filter` o filtrar recibe la data, y nos debe retornar aquellos datos que sí cumplan con la condición.
-  `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar recibe tres parámetros. El primer parámetro, `data`, nos entrega los datos. El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera ascendente o descendente.
-  `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.
Fueron realizadas las pruebas para las 3 funciones requeridas en el proyecto. Los resultados de las pruebas unitarias son los siguientes:

<a href="https://ibb.co/1n6GzFh"><img src="https://i.ibb.co/YWZB0HY/20-Pruebas-unit-rias.png" alt="20-Pruebas-unit-rias" border="0"></a>

  
***
### **5.9. Herramientas utilizadas**

- Visual Studio (HTML5, CSS, JAVASCRIPT)

-  [Trello](https://trello.com)

-  [Stackedit](https://stackedit.io)

-  [Balsamiq](https://balsamiq.com/)

-  [Figma](https://www.figma.com/)

-  [Zeplin](https://zeplin.io/)

- Illustrator

-  [Loom](https://www.loom.com)

-  [Git](https://git-scm.com/)

-  [GitHub](https://github.com/)

-  [GitHub Pages](https://pages.github.com/)

-  [Node.js](https://nodejs.org/)

***
## **6. Conclusión**

Nuestro proyecto cumple con los requisitos solicitados. La investigación y realización del proyecto en ningún momento pierde como foco las necesidades y opiniones del usuario, el cuál es un jugador principiante a intermedio, que necesita cierta información sobre los pokemones.

Optamos por armar un sitio minimalista y de búsqueda rápida con información centrada solo en el juego y no en todo el universo pokémon como lo hacen la mayoría de los sitios similares, pero que contenga las herramientas necesarias para conectar a los usuarios con sitios que proporcionan mayor información.

Pensamos que aún podemos añadir algunas mejoras a nuestro proyecto como:

- Implementación de un Modal.
- Añadir más información a través del modal.
- Herramienta de búsqueda por texto.
- Hacerlo Responsivo.
- Cruce de datos entre filtros y orden.
- Añadir filtros de aparición por horario.
- Añadir una función para cargar contenidos por parte.
***
