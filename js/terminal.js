$(document).ready(function() {
    $('#terminal').terminal(function(command, term) {
    
       
        switch(command) {
 
 
 
         case 'help':
             term.echo('\n');
             term.echo('the available commands in v1 system: ');
             term.echo('\n');
             term.echo('[1] Initialize system');
             term.echo('[2] clear');
             term.echo('[3] wpa-crack');
             term.echo('[4] nmap {IP} {PORT} {name server or service}');
             term.echo('[5] ls for listing directories and files');
             term.echo('[6] history for view the history commands');
             term.echo('[7] history-clear for delete all history commands');
             term.echo('[8] proc for listing process system');
             term.echo('[9] sniffer for activate the sniffer network');
             term.echo('[10] show-ip for view the ip address server  ');
             term.echo('[11] my_ip for your location and Public IPv4 Address');
             term.echo('[12] time for Hour and Date ');
             term.echo('[13] linktree for open the linktree');
             term.echo('[14] facebook for open the facebook ');
             term.echo('[15] X for open the twitter ');
             term.echo('[16] instagram for open the instagram ');
             term.echo('[17] tik-tok for open the tiktok');
             term.echo('[18 skills for know my skills in computer science');
             term.echo('[19] experience for know my job experience in IT');
             term.echo('[20] cv-download for download my cv ');
             term.echo('[21] education for view my education degree in computer science');
             term.echo('[22] github for open my github portfolio public repository of software');
             term.echo('[23] pathways for open my pathways IT Courses Completed');
             term.echo('[24] blogv1 for open my cybersecurity blog in version 1 (blogger) ');
             term.echo('[25] blogv2 for open my cybersecurity and forensics blog version 2 ');
             term.echo('[26] livesystemlabs for open the livesystemlabs webpage');
             term.echo('\n');
             navigator.vibrate(2000);
             break;
 
         case 'initialize':
              initialize();
              autoTypeText(term, 'Información de BIOS: Configuración de hardware y firmware. ');
              term.clear();
             break;

 
         case 'clear':
           clearterminal();
           navigator.vibrate(2000);
           break;
           

         case 'wpa-crack':
            initialize();
           romperClaveWEP();
           navigator.vibrate(2000);
           term.clear();
           term.signature();
            break;


        case 'nmap':
            simulateNmapScan(generarIPv4Aleatoria(), term);
          break;


         case 'ls': 
         //logic for listing directories and files simulated 
         initialize();
         term.clear();
         term.echo(listarDirectoriosLinux());
         navigator.vibrate(20000);



          break;

          case 'history':
            initialize();
           // Crea un nuevo terminal

    if (command === 'history') {
      navigator.vibrate(2000);
      // Accede al historial y muestra cada comando en el terminal
      const history = this.history().data();
      for (let i = 0; i < history.length; i++) {
        this.echo(`Comando ${i + 1}: ${history[i]}`);
      }
    } else {
      navigator.vibrate(2000);
      this.echo('Comando no reconocido: ' + command);
    }

       
            break;

    case 'history-clear':
        //logica para borrar todo el historial 
        navigator.vibrate(20000);
        this.history().clear();
        term.echo("commands historial delete!");
        clearterminal();
        
        break;

    case 'proc':
        //listing simulating process system
       if(command == 'proc') {
        navigator.vibrate(2000);
        initialize();
        const procesos = generateProcesos(10); // Genera 5 procesos aleatorios
        this.echo('Procesos abiertos:');
for (let i = 0; i < procesos.length; i++) {
  const proceso = procesos[i];
  this.echo(`Nombre: ${proceso.nombre}, Fecha: ${proceso.fecha}`);
}
       } else {
        this.echo('Comando no reconocido: ' + command);
        navigator.vibrate(2000);

       }
      break;
           
    case 'sniffer':
        //logic for sniffer network data simulation
        if (command == 'sniffer'){
           term.echo(mostrarCaracteresAleatorios(this));
           navigator.vibrate(2000);


        } else {
          term.echo('command wrong');
        }
        break;

    case 'show-ip':
        //logic for view the IP address 
        initialize();
        navigator.vibrate(2000);
        term.echo("IPV4 address server is:\n" + generarIPv4Aleatoria());
        break;





   case 'my_ip':
       initialize();
       term.clear();
       term.echo(obtenerIPyUbicacion());
       navigator.vibrate(2000);
        break;
 
        
           default: 
           term.error('command not found please type help for available commands', + command);
           navigator.vibrate(2000);
           break;
   
  case 'time':
     initialize();
     navigator.vibrate(2000);
     term.echo(obtenerHoraLocal());
      break;
        
 case 'linktree':
  initialize();
  navigator.vibrate(2000);
  url('https:www.linktree.com');
     break;

  case 'facebook':
    initialize();
    navigator.vibrate(2000);
    url('https:www.facebook.com');
    break;

  case 'X':
    initialize();
    navigator.vibrate(2000);
    url('https://www.twitter.com');
    break;
  
  case 'instagram':
    initialize();
    navigator.vibrate(2000);
    url('https://www.instagram.com');
   break;

  case 'tik-tok':
    initialize();
    navigator.vibrate(2000);
    url('https://www.tiktok.com/');
    break;

 case 'linkedin':
  initialize();
  navigator.vibrate(2000);
  url('https://www.linkedin.com');
  break;

  case 'skills':
    initialize();
      mostrarProgreso({
          "Python": 8,
          "JavaScript": 6,
          "SQL": 7,
          "cybersecurity": 10
      }, term);
 
    break;

case 'github':
  initialize();
  navigator.vibrate(2000);
  url('https://www.github.com');
  break;

  case 'pathways':
    initialize();
    navigator.vibrate(2000);
    url('https://www.example.com');
    break;


case 'blogv1':
  initialize();
  navigator.vibrate(1000);
  url('https://www.example.com');
  break;


case 'blogv2':
  initialize();
  navigator.vibrate(1000);
  url('https://www.example.com');
  break;

  case 'livesystemlabs':
    initialize();
    navigator.vibrate(1000);
    url('https://www.livesystemlabs.com');
    break;


  case 'experience':
    experience('Unid Hermosillo 2014-2016', 'Consultor de soporte tecnico');
    break;

  case 'cv-download':
    initialize();
    //lamar a la funcion que lee el contenido del archivo y lo descarga en este caso el CV digital
    navigator.vibrate(1000);
    descargar_cv('https://ruta_de_tu_archivo/archivo.pdf');
    break;


    case 'education':
      initialize();
      navigator.vibrate(1000);
      experience('Universidad Intermericana para el desarollo 2016-2019', 'Ingenieria en Sistemas');
      break;

 
 ///////////////////////////////////SECCION DE FUNCIONES ////////////////////////////////////////////////////////////////
      
//funcion para ver las barras de progreso segun las skills y se muestren en la terminal
function mostrarProgreso(skills, term) {
  $.each(skills, function(skill, nivel) {
      navigator.vibrate(2000);
      let barra = '[' + '='.repeat(nivel) + ' '.repeat(10 - nivel) + ']';
      term.echo(`${skill}: ${nivel} ${barra}`);
  });
}


//funcion modificable que contiene una lista para ver la experiencia laboral que se muestra en la terminal
function experience (job, description) {
     let myMap = new Map();
     myMap.set(job, description);
     myMap.forEach((job, description) => {
     term.echo(job + '\n'  + '<=======>'+ '\n' + description);
     });
}


//funcion para descargar archivos 
function descargar_cv(url) {
    var elemento = document.createElement('a');
    elemento.href = url;
    elemento.download = 'archivo descargado';
    elemento.click();


}


//funcion para abrir paginas web en cuanto a redes sociales

function url(url){
   let pagina = window.open(url, '_blank');
   return pagina;
}




//mostrar la hora actual dependiendo de la ubicacion del navegador 

function obtenerHoraLocal() {

if ("geolocation" in navigator) {
   navigator.vibrate(2000);
  // Obtener la ubicación actual del dispositivo
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    
    // Crear un objeto Date con la fecha y hora actuales en la ubicación del dispositivo
    var fechaHora = new Date();
    var timestamp = fechaHora.getTime();
    
    // Crear un objeto Date con la hora local basada en la ubicación del dispositivo
    var horaLocal = new Date(timestamp + (fechaHora.getTimezoneOffset() * 60000));
    
    // Mostrar la hora local en la consola o en pantalla
    term.echo("Hora local en tu ubicación: " + horaLocal.toLocaleTimeString());
    // Opcionalmente, puedes mostrar la hora local en la pantalla utilizando jQuery Terminal u otra interfaz de usuario
    // Ejemplo: term.echo("Hora local en tu ubicación: " + horaLocal.toLocaleTimeString());
  });
} else {
  navigator.vibrate(2000);
  term.echo("El navegador no soporta geolocalización.");
  // Opcionalmente, puedes mostrar un mensaje en la pantalla indicando que la geolocalización no es compatible
  // Ejemplo: term.echo("El navegador no soporta geolocalización.");
}
}

//fin --- mostrar la hora actual dependiendo de la ubicacion del navegador

 //mostrar nuestra ip publica
 function obtenerIPyUbicacion() {
  // Hacer una solicitud HTTP GET a ipinfo.io
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://ipinfo.io/json', true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      var respuesta = JSON.parse(xhr.responseText);
      term.echo("Tu dirección IP pública es: " + respuesta.ip);
      term.echo ("Tu ubicación es: " + respuesta.city + ", " + respuesta.region + ", " + respuesta.country);
    } else {
      term.error ('Error al obtener la información de IP: ' + xhr.status);
    }
  };
  xhr.send();
}




//fin ----- mostrar nuestra ip publica


///generacion de directorios y archivos simulados estilo linux

// Función para simular el listado aleatorio de directorios de Linux

function listarDirectoriosLinux() {
  // Directorios simulados
  const directorios = ["home", "usr", "var", "bin", "etc", "opt", "tmp", "dev", "the pentester", ".ssh"];

  // Función para generar los permisos aleatorios
  function generarPermisos() {
    const permisos = ['r', 'w', 'x', '-']; // Lectura, escritura, ejecución, sin permisos
    let permisosAleatorios = '';
    for (let i = 0; i < 9; i++) {
      const indiceAleatorio = Math.floor(Math.random() * permisos.length);
      permisosAleatorios += permisos[indiceAleatorio];
    }
    return permisosAleatorios;
  }

  // Función para generar el peso aleatorio en KB
  function generarPeso() {
    return Math.floor(Math.random() * 1000) + 1; // Peso aleatorio entre 1 y 1000 KB
  }

  // Barajar los directorios de forma aleatoria
  const directoriosAleatorios = directorios.sort(() => Math.random() - 0.5);

  // Mostrar los directorios con permisos y peso en la consola
  directoriosAleatorios.forEach(directorio => {
    const permisos = generarPermisos();
    const peso = generarPeso();
    term.echo(`${permisos} ${peso}KB ${directorio}`);
  });
}
 
 /// fin de la seccion de la generacion de directorios y archivos simulados estilo linux
 
 function progress(percent, width) {
             var size = Math.round(width*percent/100);
             var left = '', taken = '', i;
             for (i=size; i--;) {
                 taken += '=';
             }
             if (taken.length > 0) {
                 taken = taken.replace(/=$/, '>');
             }
             for (i=width-size; i--;) {
                 left += ' ';
             }
             return '[' + taken + left + '] ' + percent + '%';
         }
 
 
 
        function initialize() {
         var i = 0, size = 30;
         prompt = term.get_prompt();
         string = progress(0, size);
         term.set_prompt(progress);
         animation = true;
         (function loop() {
             string = progress(i++, size);
             term.set_prompt(string);
             if (i < 100) {
                 timer = setTimeout(loop, 10);
             } else {
                 term.echo(progress(i, size) + ' [[b;green;]OK]').set_prompt(prompt);
                 animation = false
             }
         })();
 
        }
 
 
 
        function autoTypeText(term, text) {
         const delay = 10; // Milisegundos por caracter
         let index = 0;
     
         function typeCharacter() {
           if (index < text.length) {
             term.insert(text[index]);
             index++;
             navigator.vibrate(text[index]);
             setTimeout(typeCharacter, delay);
           } else {
              onComplete();
           }
         }
     
         typeCharacter();
       }
 
 
 
 
        function clearterminal() {
           term.clear();
           navigator.vibrate(1000); 
        }



        function generarCaracterHexadecimalAleatorio() {
            const caracteresHexadecimales = '0123456789ABCDEF';
            const caracterAleatorio = caracteresHexadecimales[Math.floor(Math.random() * 16)];
            return caracterAleatorio;
          }

          function romperClaveWEP() {
            const claveGenerada = [];
            const longitudClave = 10; // Puedes ajustar la longitud de la clave según tus necesidades
            const velocidadAnimacion = 500; // Milisegundos por caracter

            function generarSiguienteCaracter() {
                if (claveGenerada.length < longitudClave) {
                  const nuevoCaracter = generarCaracterHexadecimalAleatorio();
                  claveGenerada.push(nuevoCaracter);
                  term.clear(); // Limpia la consola para la animación
                  term.echo(`Rompiendo clave WEP: ${claveGenerada.join('')}`);
                  setTimeout(generarSiguienteCaracter, velocidadAnimacion);
                } else {
                  term.clear();
                  term.echo('\n');
                  term.echo('[[b;red;]Wep Key Broken Attack Successfully] ' + ' [[b;green;]OK]').set_prompt(prompt);
                //   term.echo('clave wep rota: ');
                  term.echo(claveGenerada.join(''));
                  term.echo('[[b;green;]KEY FOUND!]').set_prompt(prompt);
                  term.echo('\n');

                }
              }


              generarSiguienteCaracter();
            }
            
           //funcion nmap simulado 

           function simulateNmapScan(target, term) {
            // Array de puertos abiertos
            const openPorts = [];
            // Array de puertos cerrados
            const closedPorts = [];
        
            // Lista de servicios
            const services = ['http', 'ftp', 'ssh', 'telnet', 'smtp', 'dns', 'mysql', 'postgresql', 'rdp'];
        
            // Simula el escaneo de 100 puertos
            for (let i = 0; i < 100; i++) {
                const port = Math.floor(Math.random() * 65535) + 1; // Genera un puerto aleatorio
                const isOpen = Math.random() < 0.5; // Determina aleatoriamente si el puerto está abierto
        
                if (isOpen) {
                    openPorts.push(port);
                } else {
                    closedPorts.push(port);
                }
            }
        
            // Muestra los resultados en el terminal
            term.echo(`Starting Nmap scan against ${target}...\n`);
            term.echo(`Host is up, scanned ${openPorts.length + closedPorts.length} ports.\n`);
        
            // Muestra los puertos abiertos
            openPorts.forEach(openPort => {
                const service = services[Math.floor(Math.random() * services.length)]; // Elige un servicio aleatorio
                term.echo(`${target} (${service}) - ${openPort}/tcp open`);
            });
        
            // Muestra los puertos cerrados
            closedPorts.forEach(closedPort => {
                term.echo(`${target} - ${closedPort}/tcp closed`);
            });
        }
        




           
            // Función para generar procesos aleatorios
function generateProcesos(numProcesos) {
    return Array.from({ length: numProcesos }, generateRandomProceso);
  }
  
  // Función para generar un proceso aleatorio
  function generateRandomProceso() {
    const nombres = ['Explorer.exe', 'shell.exe', 'pentesterdiaries.js', 'terminal.exe', 'putty.exe'];
    const nombre = nombres[Math.floor(Math.random() * nombres.length)];
    const fecha = generateRandomFecha();
    return { nombre, fecha };
  }
  
  
  // Función para generar una fecha aleatoria
  function generateRandomFecha() {
    const startDate = new Date(2022, 0, 1).getTime();
    const endDate = new Date().getTime();
    const randomDate = new Date(startDate + Math.random() * (endDate - startDate));
    return randomDate.toDateString();
  }

// Función para generar IP aleatoria IPv4
function generarIPv4Aleatoria() {
  var ip = [];
  for (var i = 0; i < 4; i++) {
    ip.push(Math.floor(Math.random() * 256));
  }
  return ip.join('.');
}




//funcion para generar caracteres aleatorios y simular un sniffer 
function mostrarCaracteresAleatorios(terminal) {
    // Tamaño de la terminal
    const terminalWidth = term.cols();
    const terminalHeight = term.rows();
  
    // Caracteres aleatorios posibles
    const caracteresPosibles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    // Genera y muestra cadenas de caracteres aleatorios
    let animationInterval = setInterval(function () {
      let cadenaAleatoria = '';
      for (let i = 0; i < terminalWidth; i++) {
        cadenaAleatoria += caracteresPosibles.charAt(Math.floor(Math.random() * caracteresPosibles.length));
      }
  
      // Borra y muestra la cadena en la terminal
      for (let j = 0; j < terminalHeight; j++) {
        term.clear(j);
        term.echo(cadenaAleatoria);
      }
    }, 200); // Actualiza cada 200 milisegundos
  
    // Detener la visualización después de cierto tiempo (por ejemplo, 10 segundos)
    setTimeout(function () {
      clearInterval(animationInterval);
      term.echo('Network Traffic Captured in pcap!\n.');
      term.echo('Sniffer stoped................');
    }, 10000); // Detiene después de 10 segundos
  }

    //function for open external page 
      function external_page(url){

        if (typeof url == "string") {
            window.open(url, '_blank');
        }
        else {
            url.toString();
          }

      }
      
      
      

 
     }

    
 
     }, { //prompt personalizado y atributos
         prompt: '[[;green;]HackintoshMachine001@' ,  
         greetings: `
                                                        
eeee ee   e    eeeee  eeee eeeee e   e eeeeeee eeee 
8  8 88   8    8   8  8    8   " 8   8 8  8  8 8    
8e   88  e8    8eee8e 8eee 8eeee 8e  8 8e 8  8 8eee 
88    8  8     88   8 88      88 88  8 88 8  8 88   
88e8  8ee8     88   8 88ee 8ee88 88ee8 88 8  8 88ee  

Welcome to my Terminal CV System 
for more information how to usage please type help
 
       ` , 
       
      completion: ['initialize', 'clear', 'wpa-crack', 'ls', 'history', 'history-clear', 'proc', 'sniffer', 'help' ,'show-ip', 'my_ip'],
      name: 'terminal'
         
     });
 
   
      });
      

    


