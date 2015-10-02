(function(angular) {
	var $scope;
    var app = angular.module('skills', ['ui.bootstrap']);

	app.service('filterArray', function(){
		var skills = [
		    {
		      "title": "NPM",
		      "description": "En los desarrollos de aplicaciones web, bien sean estáticos o dinámicos, el uso de esta herramienta es esencial, este manejado de paquetes automatiza un sin fin de tareas que me ayudan a la creación y publicación de proyectos, como en la instalación de paquetes y sus dependencias que son de gran utilidad en el desarrollo de mis proyectos, sin preocuparme por ruta, ni requires ya que las tareas las realiza con un alto grado de automatización.",
		      "domain": "70",
		      "productivity": "80",
		      "usability": "60"
		    },
		    {
		      "title": "ALLOY",
		      "description": "Framework que utilizo, en el desarrollo de proyectos mobiles sobre el sistema operativo Android, que en su versión mas reciente ha implementado el patrón MVVM, por lo que me facilita y organiza la estructura de los proyectos, ademas el lenguaje XML de Alloy permite desarrollar Front End muy rápidamente con una diversidad de componentes, su consola del lado del cliente permite ejecutar la creación de proyectos y componentes dentro del mismo, o bien integrado al IDE appcelerator titanium.",
		      "domain": "65",
		      "productivity": "80",
			  "usability": "60"
		    },
		    {
		      "title": "LINUX",
		      "description": "Sistema Operativo que uso en ciertos desarrollos, mi experiencia con el mismo pasa por la instalación de diferentes distribuciones, instalación de diferentes aplicaciones, herramientas para desarrollo, servidores web, configuración de diferentes variables, instalación y configuración de bases de datos, uso de manejadores de paquetes de instalación propios de cada sistema y/o instalaciones personalizadas, manejo de comandos de consola, permisología, manejo de usuarios entre otras cosas dicte cátedra del sistema operativo linux en el curso Programa de Desarrolladores de Software dictado por la empresa IBM, en la cual me desempeñe como Instructor Certificado. ",
		      "domain": "60",
		      "productivity": "90",
		      "usability": "40"
		    },
		    {
		      "title": "ECLIPSE IDE",
		      "description": "En los desarrollos de aplicaciones web dinámicos, JEE usando el framework ZK, utilizo este ambiente integrado de desarrollo, es una herramienta muy útil y flexible por a cantidad de Plugins asociados que permiten multiplicidad de tareas diferentes e un mismo IDE, la integración directa de los servidores web, tal como tomcat, jetty, glassfish, entre otros permite desarrollos efectivos, también se integra con otras herramientas como los manejadores de paquetes maven, o la ejecución de tareas como Apache Ant, Buckmister, integrado originalmente con equinox que nos brinda la posibilidad real de realizar proyectos completamente modulares, mi experiencia y conocimiento en la herramienta me hace considerarlo como el ambiente de desarrollo java mas eficaz que uso",
		      "domain": "90",
		      "productivity": "90",
		      "usability": "95"
		    },
		    {
		      "title": "GIT-HUB",
		      "description": "He usado este sitio para alojar aplicaciones que aun están en fase de desarrollo, para compartir fácilmente el repositorio con los participantes del grupo de desarrollo, de cualquier forma para desarrollo es muy útil si la aplicación esta basada en Git, permite conexiones con otros repositorios de la nube lo cal es conveniente si se quiere mantener respaldos de las aplicaciones de una repositorio a otro realizando sincronización entre ellos. Por ejemplo entre git-hub y heroku u openshift,",
		      "domain": "70",
		      "productivity": "60",
		      "usability": "55"
		    },
		    {
		      "title": "APACHE TOMCAT",
		      "description": "Servidor de aplicaciones java para servlets, es el servidor que mas uso al desarrollar aplicaciones web java, se integra automáticamente con el IDE Eclipse y es posible realizar una serie de configuraciones a cada aplicación, su flexibilidad permite la integración con ZK framework, tanto en función de su configuración como en la extensión de witgets del mismo, su configuración e inicialización de propiedades es sencilla permitiendo desde seguridad hasta balanceo de cargas, muy sencillo en las operaciones de despliegue de aplicaciones, las librerías pueden ser descargadas en su propia carpeta lib, aminorando el peso de las aplicaciones, y se instala apropiada y establemente tanto en linux como en windows. ",
		      "domain": "80",
		      "productivity": "95",
		      "usability": "90"
		    },
		    {
		      "title": "HEROKU",
		      "description": "Usando este sitio para el alojamiento de aplicaciones web dinámicas usando javascript, node.js como servidor usando express.js, es rápido usa git o hg para la sincronización de la aplicación desde el escritorio hacia la nube, actualiza el repositorio mediante la consola heroku. ",
		      "domain": "50",
		      "productivity": "50",
		      "usability": "40"
		    },
		    {
		      "title": "GIT",
		      "description": "Utilizo este manejador de versiones distribuido, tanto en las aplicaciones con el IDE Eclipse como los desarrollos de javascript html node, es fácil de usar y sus comandos ya son el standar para el alojamiento distribuido de varios sitios de la nube, el cual nos facilita la distribución a el equipo de trabajo de los proyectos. También me ha sido útil para la clonación de otros proyectos open-source que he usado en la integración y/o adaptación de los mismos.",
		      "domain": "60",
		      "productivity": "70",
		      "usability": "75"
		    },
		    {
		      "title": "BOOSTRAP",
		      "description": "El framework Boostrap, esta entre mis herramientas de uso continuo, me ha permitido integración limpia sin conflictos en ZK, su interfaz gráfica plana y minimalista, su utilización de iconos tipo fuentes, su gran dominio de la grid y response me permiten desarrollos simples sin dolores de cabeza en cuanto a disponer los componentes html en el Front End HTML.",
		      "domain": "85",
		      "productivity": "95",
		      "usability": "90"
		    },
		    {
		      "title": "YEOMAN",
		      "description": "Si me refiero a la productividad, después de haber iniciado camino en el desarrollo con Angular.js este framework de google no te indica en su especificación cual debería ser la estructura mas idónea para desarrollar aplicaciones, El uso de YEOMAN me permitió aumentar la productividad con sus generadores y manejadores de librerías, en solo 10 minutos se es capaz de generar todo un template con toda su estructura de un proyecto Node, Javascript. Se apoya en yo, grunt y bower para realizar las tareas de automatizacion y generar scaffolding.",
		      "domain": "80",
		      "productivity": "90",
		      "usability": "75"
		    },
		    {
		      "title": "GRUNT",
		      "description": "Este gestor de tareas específico para Javascript, nos permite realizar las tareas más comunes en mi código Javascript, como pueden ser el control de calidad(JSLint), la ofuscación, minimización, concatenación de archivos, optimización de imágenes, Compilación ( SASS -> CSS y otros), entre otros posee cerca de 5000 plugins y siguen generándose mas, también nos es útil para automatizar el pase de una batería de test antes de realizar estos pasos, lo que nos facilita el desarrollo y nos provee de productividad.",
		      "domain": "80",
		      "productivity": "85",
		      "usability": "65"
		    },
		    {
		      "title": "CSS",
		      "description": "El lenguaje de hojas de estilo en cascada, es la implementación mas efectiva para mantener separados los estilos aplicados a el contenido de una pagina html, en cada una de las versiones la contribución al desarrollo html es mas y mas poderoso, conocer suficiente de como es su uso es lo que nos permite crear desde transparencias a slides, desde armonizar colores, a situar componentes, sin tener que administrar el arbol de representación del documento DOM , mediante clases, tags, me es posible transformar completamente el estilo de una pagina y crear componentes de navegacion con CSS.",
		      "domain": "90",
		      "productivity": "95",
		      "usability": "90"
		    },
		    {
		      "title": "BOWER",
		      "description": "Para desarrollar web y móvil con HTML5 está Bower, un gestor de paquetes frontend me facilita la administración de dependencias en los proyectos. Esto es algo esencial porque me permite instalar y actualizar las dependencias de una forma simple. De esta forma todos los miembros del equipo tenemos la misma versión de las librerías usadas sin tenerlas que incluir en el repositorio de código, manteniéndolo limpio y únicamente con el código de nuestra web o aplicación móvil. Además permite conocer de una manera rápida y sencilla todas las dependencias de los proyectos y la versión de las librerías que se están usando.",
		      "domain": "60",
		      "productivity": "60",
		      "usability": "40"
		    },
		    {
		      "title": "JAVA",
		      "description": "Al comenzar el camino para desarrollos web, como aplicaciones, evalué que lenguaje utilizar, el mas flexible que me permitía una gran cantidad de ventajas fue, Java, es flexible, multiplataforma, orientado a objetos, es libre, posee librerías de todo tipo enfocadas a resolver temas específicos, existen librerías que mejoran rendimiento y resolución de tareas mas que las originales de java como por ejemplo Joda-Time, su JVM existen para n cantidad de plataformas incluso para Android, tiene soporte y documentación por doquier, es el que normalmente uso para los proyectos de aplicaciones WEB. Permite la generación y consumo de servicios, bien del tipo SOAP o Restful, compatibilidad con XML, JSON, uso de objetos Beans, transformación de objetos a dichas representaciones, y mas recientemente integración de Javascript para interactuar con valores almacenados en memoria por Javascript, ademas se han generado una cantidad de framework para el desarrollo WEB, cada uno enfocando la resolución de formas diferentes y no se ha quedado pasivo por el contrario todo el tiempo esta en desarrollo.",
		      "domain": "90",
		      "productivity": "95",
		      "usability": "90"
		    },
		    {
		      "title": "ANGULARJS",
		      "description": "El Framework de Google para javascript del lado cliene y servidor, ha evolucionado como para ofrecer algo que otro no ofrecían en determinado momento, y es extender las posibilidades del HTML, este framework posee unas ventajas que lo hacen mi favorito a la hora de crear proyectos web basados en Javascript, su patron de MV* (Modelo, Vista, Lo que sea) es el mas flexible que he utilizado, aunado a ello su binding two way me provee la facilidad pasmosa de mantener actualizados la data del front end con la del modelo, y por ende el Back End, por otra parte el escribir menos código te hace mas productivo está suficientemente documentado y sigue en desarrollo continuo en manos de la comunidad de Google. De hecho a pesar de que esta pagina es estática usa Angular para mostrar justamente esto que lees en este momento.",
		      "domain": "70",
		      "productivity": "95",
		      "usability": "75"
		    },
		    {
		      "title": "IMPRESS.JS",
		      "description": "Esta libreria Javascript me ha permitido la facilidad de utilizar slides, rotaciones, 3D, transiciones, para hacer de las paginas mas interactivas y navegables, de hecho las opciones de menú como las acciones que se realizan con el teclado en esta pagina están soportadas por impress.js, se sencillo de utilizar lo que me permite ser mas productivo al enfocarme en el contenido de la pagina ya que se tiene resuelta la forma de navegar de forma interactiva y sencilla, ademas esta diseñada para realizar presentaciones del tipo Prezi, pero al ser Javascript me da la facilidad de usarla junto a otras librerías que tiene otras actividades a resolver. ",
		      "domain": "50",
		      "productivity": "80",
		      "usability": "70"
		    },
		    {
		      "title": "JAVASCRIPT",
		      "description": "Uso Javascript, y hasta VBScript desde hace mucho tiempo, sin embargo la comunidad que respalda el lenguaje ha hecho de su desarrollo una evolución constante de lo que se puede hacer con el, actualmente es el lenguaje mas útil en cuanto a front end web que se pueda imaginar, su flexibilidad de uso hace posible que puedas ir desde un tipo de programación estructurada, pasando por orientada a objetos, para llegar a funcional, posee documentación de todo tipo al alcance de todos, librerías, plugins frameworks y optimización del engine de ejecución que ya no se habla de ser lento en la web ni en el browser y ahora como servidor, cada vez es mas y mas utilizado para hacer aplicaciones cliente-servidor usando Node.js como soporte en el servidor. ",
		      "domain": "70",
		      "productivity": "95",
		      "usability": "85"
			},
			{
		      "title": "HTML5",
		      "description": "La más reciente versión de HTML, la cual despliega un amplio potencial para realizar proyectos no solo en el ámbito del Navegador de escritorio, sino que permite utilizar el mismo desarrollo para web mobile, y aplicaciones especificas de smartphones, utilizo este lenguaje de marcado para desarrollar tanto aplicaciones web, como páginas estáticas, al realizar aplicaciones utilizando un conjunto de librerías bien de Javascript, bien con el uso de CSS, se crean páginas como por ejemplo este resumen laboral al que estas accediendo.",
		      "domain": "95",
		      "productivity": "99",
		      "usability": "95"
		    },
		    {
		      "title": "NODE.JS",
		      "description": "Este es un entorno de programación en la capa del servidor, aunque no se limita solo a ello, basado en el lenguaje de programación ECMAScript, asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. He utilizado este entorno para realizar aplicaciones completas cliente-servidor javascript, frontend basadas en HTML, CSS, librerías Javascript y servicios REST en servidor Javascript con transferencia de datos en objetos JSON, máxima escalabilidad , en el desarrollo de aplicaciones.",
		      "domain": "70",
		      "productivity": "90",
		      "usability": "75"
		    },
		    {
		      "title": "MICROSOFT OFFICE",
		      "description": "Uso la herramienta para la documentación inherente a informes y/o transcripciones, análisis de requerimientos, dicte clases de dicha SUITE por lo que mi desempeño en dicha herramienta va desde la creación de indices, tablas de contenido, a creación de macros usando VisualBasic for application, en sus tres principales herramientas Excel, World, PowerPoint, actualmente uso una SUITE free que ocupa mucho menos requerimientos para realizar el mismo trabajo",
		      "domain": "90",
		      "productivity": "50",
		      "usability": "30"
		    },
		    {
		      "title": "PHOTOSHOP",
		      "description": "Es líder mundial del mercado de las aplicaciones de edición de imágenes, lo uso frecuentemente al generar el ambiente gráfico, imágenes iconos que uso en las plantillas y/o front end de una aplicación web, desde el retoque de logotipos a creación de favicon, retoques utilizando una amplia gama de filtros y plugins que permite realizar el arte gráfico de una pagina, o aplicación para smatphones, sin duda es el mejor editor gráfico que he usado, permitiendo productividad y rendimiento al máximo.",
		      "domain": "60",
		      "productivity": "90",
		      "usability": "80"
		    },
		    {
		      "title": "ADOBE ILLUSTRATOR",
		      "description": "Editor de gráficos vectoriales destinado a la creación artística de dibujo e ilustración como rama del arte digital aplicado a la ilustración técnica o el diseño gráfico, es la herramienta en la cual creo logo-tipos, o arte gráfico de una empresa en especifico que lo requiera al momento de realizar un desarrollo y diseño de paginas web",
		      "domain": "50",
		      "productivity": "60",
		      "usability": "50"
			},
		    {
		      "title": "SUBLIME TEXT",
		      "description": "Sin duda alguna mi mejor editor de texto y editor de código fuente está escrito en C++ y Python para infinidad de plugins. Lo uso como el editor de texto por defecto y en cada una de los desarrollos de aplicaciones en Javascript, ya que sus plugins me permiten integrarlo a una amplia cantidad de tecnologias, librerias, lenguajes entre otros, puedo usarlo con el entorno de servicio NODE.JS, usando la amplia gama de gestores asociados a estas tecnologias tal es el caso de bower, NPM, YEOMAN entre otras.",
		      "domain": "95",
		      "productivity": "98",
		      "usability": "90"
		    },
		    {
		      "title": "COUCHDB",
		      "description": "Gestor de bases de datos de código abierto, cuyo foco está puesto en la facilidad de su uso y en ser (una base de datos que asume la web de manera completa). Se trata de una base de datos NoSQL que emplea JSON para almacenar los datos, JavaScript como lenguaje de consulta por medio de MapReduce y HTTP como API, lo que me permitió generar una aplicación Mobile para android que mediante servicios RESTful accediera a data almacenada en forma de documentos, con una facilidad y velocidad extrema si se compara con las DB RDBMS. En un enfoque completamente diferente es posible sacar la máxima productividad de este tipo de nuevas tecnologías.",
		      "domain": "60",
		      "productivity": "95",
		      "usability": "60"
		    }
		];

	    this.get = function (title) {
	        for (i in skills) {
	            if (angular.uppercase(skills[i].title.trim()) == angular.uppercase(title.trim())) {
//	            	alert(skills[i].title+"    "+skills[i].domain+"    "+skills[i].productivity+"    "+skills[i].usability);
	                return skills[i];
	            }
	        }

	    };

	});

	app.controller('SkillsCtrl',function($scope, filterArray) {
	    $scope.getSkill = function(title) {
	        $scope.title = title;
	        $scope.product=filterArray.get($scope.title);
			$scope.max = 100;
			$scope.dynamicDomain = $scope.product.domain;
			$scope.dynamicProd = $scope.product.productivity;
			$scope.dynamicUse = $scope.product.usability;
       		var domElement = document.querySelector('#title-modal');
			var $domElement;
			if (domElement) {
				$domElement = angular.element(domElement);
			  	$domElement.text($scope.title + ' Info');
			}
		};
	});

})(window.angular);

