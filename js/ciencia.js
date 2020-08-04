const misPreguntas = [
    {
        pregunta: "¿Cómo se clasifican los animales con columna vertebral?",
        respuesta: {
            a:"Invertebrados",
            b:"Vertebrados",
            c:"Ambas"
        },
        respuestCorrecta: "b"
    },
    {
        pregunta: "¿Que utilizan los peces para respirar?",
        respuesta: {
            a:"Nariz",
            b:"Orejas",
            c:"Branqueas"
        },
        respuestCorrecta: "c"
    },
    {
        pregunta: "¿El delfín es un pez o un mamífero?",
        respuesta: {
            a:"Pez",
            b:"Ambas",
            c:"Mamífero"
        },
        respuestCorrecta: "c"
    },
    {
        pregunta: "¿Que animales no necesitan aparearse para reproducirse?",
        respuesta: {
            a:"Caballito de Mar",
            b:"Estrellas de Mar",
            c:"Peces en general"
        },
        respuestCorrecta: "a"
    },
    {
        pregunta: "¿Qué elemento representa Na en la Tabla Periódica?",
        respuesta: {
            a:"Sodio",
            b:"Ambas",
            c:"Sal"
        },
        respuestCorrecta: "b"
    },

]


var i=0;
var vidas=3;
var vivo=true;

  window.onload = function() {
    
     document.getElementById("preguntas").innerHTML=misPreguntas[i].pregunta;
     document.getElementById("respuestaA").innerHTML=misPreguntas[i].respuesta.a;
     document.getElementById("respuestaB").innerHTML=misPreguntas[i].respuesta.b;
     document.getElementById("respuestaC").innerHTML=misPreguntas[i].respuesta.c;
  }



  function validar(respuestaElegida){
    if (i<5){
      if (respuestaElegida==misPreguntas[i].respuestCorrecta) {
       i=i+1;
       siguientePregunta(i);
       
      }
      
      else {
        vidas=vidas-1;
        if (vidas==0) {
          vivo=false;
          //El screamer va acá
          console.log("PERDISTE");
        }
      }
    }   

    else if (vivo=true) {
        //CARTEL DE GANASTE
        console.log("GANASTE");
       }
  }

function siguientePregunta(i){
     document.getElementById("preguntas").innerHTML=misPreguntas[i].pregunta;
     document.getElementById("respuestaA").innerHTML=misPreguntas[i].respuesta.a;
     document.getElementById("respuestaB").innerHTML=misPreguntas[i].respuesta.b;
     document.getElementById("respuestaC").innerHTML=misPreguntas[i].respuesta.c;
}