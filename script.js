if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("Service Worker registrado con éxito:", registration.scope);
      })
      .catch((error) => {
        console.error("Error al registrar el Service Worker:", error);
      });
  }
  
  if (navigator.onLine) {
    const socket = new WebSocket('ws://127.0.0.1:8080/index.html');
    socket.onopen = function(event) {
        console.log("Conexión WebSocket establecida");
    };
    socket.onerror = function(event) {
        console.error("Error en WebSocket:", event);
    };
    socket.onclose = function(event) {
        console.log("Conexión WebSocket cerrada");
    };
  } else {
    console.log("No hay conexión a internet, WebSocket no iniciado.");
  }
  
  // Preguntas y respuestas
  const questions = [
    { question: "1) ¿En qué año se proclamó la independencia del Peru?", answers: ["1809", "1821", "1890"], correct: 1 },
    { question: "2) ¿Cuál es el departamento más grande del Perú?", answers: ["Loreto", "Cusco", "Ucayali"], correct: 0 },
    { question: "3) ¿En qué año inició la Primera Guerra Mundial?", answers: ["1941", "1916", "1914"], correct: 2 },
    { question: "4) ¿Qué país fue el primero en enviar un hombre al espacio?", answers: ["China", "Unión Soviética", "Francia"], correct: 1 },
    { question: "5) ¿Qué personaje histórico fue conocido como el libertador?", answers: ["Simón Bolívar", "Francisco Bolognesi", "José de San Martín"], correct: 0 },
    { question: "6) ¿En qué año se fundó la ONU?", answers: ["1925", "1945", "1938"], correct: 1 },
    { question: "7) ¿Con qué océano limita Perú?", answers: ["Océano Pacífico", "Océano Atlántico", "Océano Ártico"], correct: 0 },
    { question: "8) ¿Quién es el actual presidente de Estados Unidos?", answers: ["Jhon Videm", "Donald Trump", "Joe Biden"], correct: 2 },
    { question: "9) ¿A qué moneda reemplazó el sol?", answers: ["Dólar", "Peso", "Inti"], correct: 2 },
    { question: "10) ¿Qué filósofo griego fue maestro de Alejandro Magno?", answers: ["Sócrates", "Plutón", "Aristóteles"], correct: 2 },
    { question: "11) ¿Quién fue el Caballero de los Mares?", answers: ["José Olaya", "Miguel Grau Seminario", "José Quiñones"], correct: 1 },
    { question: "12) ¿Quién fue el líder de la Revolución Francesa?", answers: ["Napoleón Bonaparte", "Luis XVI", "Maximilian Robespierre"], correct: 2 },
    { question: "13) ¿Qué presidente peruano abolió la esclavitud?", answers: ["Ramon Castilla", "Juan Velasco Alvarado", "Pedro castillo"], correct: 0 },
    { question: "14) ¿Quién pinto la obra La Última Cena?", answers: ["Picasso", "Leonardo D' Caprio", "Leonardo Da Vinci"], correct: 2 },
    { question: "15) ¿Quién fue el primer emperador del Imperio Romano?", answers: ["Cesar Augusto", "Trajan", "Caracalla"], correct: 0 },
    { question: "16) ¿Cuál es el ave nacional del Perú?", answers: ["Condor", "Gallito de las rocas", "Tucán"], correct: 1 },
    { question: "17) ¿Quién fue la primera mujer en el mundo en ser presidenta?", answers: ["María Elena Martínez de Prada", "Micaela Navarro Garzón", "María Estela Martínez de Perón"], correct: 2 },
    { question: "18) ¿En qué país se originó el COVID 19?", answers: ["Japón", "China", "Rusia"], correct: 1 },
    { question: "19) ¿Quién fue el primer presidente del Perú?", answers: ["José Haya de la Torre", "José de la Riva Agüero", "José de San Martín"], correct: 1 },
    { question: "20) ¿Cuándo se celebra el Día de la Bandera?", answers: ["7 de Junio", "27 de Julio", "17 de Junio"], correct: 0 },
    { question: "21) ¿Quién es el actual presidente de Venezuela?", answers: ["Nicolás Maduro", "Rafael Piñera", "Rafael Maduro."], correct: 0 },
    { question: "22) ¿En qué año se descubrió América?", answers: ["1944", "1942", "1492"], correct: 2 },
    { question: "23) ¿Cuál fue la lengua oficial del Imperio Incaico?", answers: ["Quechua", "Aimara", "Castellano"], correct: 0 },
    { question: "24) ¿Qué acontecimiento ocurrió el 11 de septiembre de 2001?", answers: ["La caída del Muro de Berlín", "El atentado terrorista contra las Torres Gemelas", "El inicio de la Segunda Guerra Mundial"], correct: 1 },
    { question: "25) ¿En qué país se encuentra la Torre Eiffel?", answers: ["Francia", "Italia", "Alemania"], correct: 0 },
    { question: "26) ¿Quiénes fundaron Roma?", answers: ["Rómulo y Remo", "Aquiles y Odiseo", "Rómulo y Ramiro"], correct: 0 },
    { question: "27) ¿Qué peruano ganó el premio Nobel de Literatura? ¿En qué año?", answers: ["Abraham Valdelomar - 2009", "Ricardo Palma - 2010", "Mario Vargas Llosa - 2010"], correct: 2 },
    { question: "28) ¿Cuál es la moneda oficial de Estados Unidos?", answers: ["Euro", "Dólar americano", "Peso"], correct: 1 },
    { question: "29) Qué significa Tahuantinsuyo?", answers: ["Las cuatro regiones unidas", "Las dos regiones unidas", "Las cuatro regiones diferentes"], correct: 0 },
    { question: "30) ¿A qué cultura pertenece las cabezas clavas?", answers: ["Paracas", "Chavín", "Nazca"], correct: 1 },
    { question: "31) ¿Qué tratado puso fin a la Primera Guerra Mundial?", answers: ["Tratado de Tordesillas", "Tratado de Paris", "Tratado de Versalles"], correct: 0 },
    { question: "32) ¿Cuál es la montaña más alta del Perú?", answers: ["Huascarán", "Alpamayo", "Misti"], correct: 0 },
    { question: "33) ¿Cuál es la capital de Japón?", answers: ["Seúl", "Tokio", "Pekín"], correct: 1 },
    { question: "34) Cuál es el río más largo del mundo?", answers: ["Amazonas", "Nilo", "Yangtsé"], correct: 1 },
    { question: "35) ¿Quién descubrió América?", answers: ["Cristóbal Colón", "Simón Bolívar", "José Olaya"], correct: 0 },
    { question: "36) ¿Cuál es la montaña más alta del mundo?", answers: ["Manaslu", "Everest", "Makalu"], correct: 1 },
    { question: "37) ¿De qué país es el pisco?", answers: ["Chile", "Argentina", "Perú"], correct: 2 },
    { question: "38) ¿En qué departamento se encuentra Machu Picchu?", answers: ["Puno", "Cusco", "Arequipa"], correct: 1 },
    { question: "39) ¿Cuál es el continente más grande del mundo?", answers: ["África", "América", "Asia"], correct: 2 },
    { question: "40. ¿A qué departamento del Perú se le denomina 'La Tierra de la Eterna Primavera'?", answers: ["Cusco", "Arequipa", "Trujillo"], correct: 2 },
  ];
  
  // Variables de juego
  let currentQuestion = 0;
  let spinning = false;
  let stars = 0; // Contador de estrellas
  let correctAnswers = 0; // Contador de respuestas correctas
  let currentLevel = 1; // Nivel inicial
  
  // Elementos del DOM
const wheel = document.getElementById("wheel");
const ctx = wheel.getContext("2d");
const spinButton = document.getElementById("spinButton");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const starsCounter = document.getElementById("starsCounter"); // Elemento para mostrar las estrellas
const correctAnswersCounter = document.getElementById("correctAnswersCounter"); // Elemento para mostrar respuestas correctas
const endGameMessage = document.getElementById("endGameMessage"); // Elemento para mostrar mensaje de finalización
const restartButtonContainer = document.getElementById("restartButtonContainer");
const restartButton = document.getElementById("restartButton");
const levelDisplay = document.getElementById("level"); // Elemento para mostrar el nivel
const nextButton = document.getElementById("nextButton");
const finalWindow = document.getElementById("finalWindow");
const timeElement = document.getElementById("timeElement");


  // Mostrar retroalimentación
  function showFeedback(message, color) {
    // Crear el elemento div para el mensaje de feedback
    const feedback = document.createElement('div');
    feedback.textContent = message;  // Agregar el mensaje
    feedback.style.backgroundColor = color;  // Cambiar el color según el tipo de respuesta
    feedback.style.color = "#fff";  // Texto blanco para visibilidad
    feedback.style.padding = "10px";
    feedback.style.marginTop = "20px";
    feedback.style.borderRadius = "5px";
    feedback.style.textAlign = "center";
    feedback.style.fontSize = "16px";

    // Agregar el feedback al contenedor
    const container = document.getElementById("question-container");
    container.appendChild(feedback);

    // Eliminar el feedback después de 3 segundos
    setTimeout(() => {
        feedback.remove();
    }, 3000);
}

// Comprobar la respuesta
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];

    // Verificar la respuesta seleccionada
    if (selectedIndex === question.correct) {
        correctAnswers++;
        stars += 10; // Gana 10 estrellas por cada respuesta correcta
        showFeedback("¡Correcto! Has ganado 10 estrellas", "#4CAF50"); // Verde para respuesta correcta
    } else {
        stars = Math.max(0, stars - 5); // Pierdes 5 estrellas por respuesta incorrecta
        showFeedback("Incorrecto, perdiste 5 estrellas", "#FF5733"); // Rojo para respuesta incorrecta
    }

    // Actualizar el contador de estrellas y respuestas correctas
    starsCounter.textContent = `Estrellas: ${stars}`;
    correctAnswersCounter.textContent = `Respuestas correctas: ${correctAnswers}`;

    // Esperar 3 segundos antes de pasar a la siguiente pregunta
    setTimeout(() => {
        currentQuestion++; // Aumentar el índice de la pregunta actual
        if (currentQuestion < questions.length) {
            showQuestion(); // Mostrar la siguiente pregunta
        } else {
            endGame(); // Finalizar el juego si no hay más preguntas
        }

        // Actualizar nivel y girar la ruleta (solo después de mostrar la siguiente pregunta o terminar el juego)
        updateLevel(); // Actualizar el nivel
        spinWheel(); // Gira la ruleta para la siguiente pregunta o finalización
    }, 3000); // Espera 3 segundos antes de mostrar la siguiente pregunta
}

  function startGame() {
    
    currentQuestion = 0;
    correctAnswers = 0;
    timeLeft = 60;
    nextButton.style.display = "none";
    restartButton.style.display = "none";
    finalWindow.style.display = "none"; // Ocultar ventana final
    displayQuestion();
    showQuestion();
    startTimer();
}

function startTimer() {
    const timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timeElement.textContent = `Tiempo: ${timeLeft}s`;
        } else {
            clearInterval(timerInterval);
            showFinalWindow();
        }
    }, 1000);
}
  // Dibuja la ruleta
  function drawWheel() {
      const segments = ["Pregunta 1", "Pregunta 2", "Pregunta 3", "Pregunta 4", "Pregunta 5", "Pregunta 6"];
      const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFC300", "#DAF7A6", "#581845"];
      const arc = (2 * Math.PI) / segments.length;
  
      segments.forEach((segment, index) => {
          const startAngle = index * arc;
          const endAngle = startAngle + arc;
          ctx.beginPath();
          ctx.arc(200, 200, 200, startAngle, endAngle);
          ctx.lineTo(200, 200);
          ctx.fillStyle = colors[index % colors.length];
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
  
          ctx.save();
          ctx.translate(200, 200);
          ctx.rotate(startAngle + arc / 2);
          ctx.textAlign = "right";
          ctx.fillStyle = "black";
          ctx.font = "18px Arial";
          ctx.fillText(segment, 180, 10);
          ctx.restore();
      });
  }
  
  // Función para hacer girar la ruleta
  function spinWheel() {
      // Verifica si ya no hay más preguntas antes de girar la ruleta
      if (spinning || currentQuestion >= questions.length) return;
  
      spinning = true;
      let rotation = Math.random() * 360 + 720; // Gira al menos 2 vueltas
      const duration = 2000; // 2 segundos
      const start = performance.now();

      questionContainer.style.display = "none"; // Ocultar el contenedor de la pregunta
  
      function animate(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const angle = progress * rotation;
  
          ctx.clearRect(0, 0, wheel.width, wheel.height);
          ctx.save();
          ctx.translate(200, 200);
          ctx.rotate((angle * Math.PI) / 180);
          ctx.translate(-200, -200);
          drawWheel();
          ctx.restore();
  
          if (progress < 1) {
              requestAnimationFrame(animate);
          } else {
              spinning = false;
              showQuestion(); // Mostrar la siguiente pregunta o el mensaje de fin de juego
          }
      }
  
      requestAnimationFrame(animate);
  }
  
  // Actualiza el nivel
  function updateLevel() {
      currentLevel = Math.floor(currentQuestion / 10) + 1; // Cada 10 preguntas sube un nivel
      levelDisplay.textContent = `Nivel: ${currentLevel}`; // Actualiza el texto del nivel en el DOM
  }
  
  // Muestra la pregunta
  function showQuestion() {
    if (currentQuestion < questions.length) {
        const current = questions[currentQuestion];
        questionText.textContent = current.question;

        answersContainer.innerHTML = '';
        current.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.onclick = () => checkAnswer(index);
            answersContainer.appendChild(button);
        });

        // Mostrar la pregunta solo después de que termine el giro
        questionContainer.style.display = "block";
    } else {
        // Si no hay más preguntas, mostrar mensaje de fin de juego
        showFinalWindow();
        startGame();
    }
}


// Finalizar el juego
function endGame() {
    document.getElementById("endGameMessage").classList.remove("hidden");
    document.getElementById("game-over-modal").style.display = "block";
    document.getElementById("correct-answers").textContent = `Respuestas Correctas: ${correctAnswers}`;
    document.getElementById("stars").textContent = `Estrellas: ${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}`;
    restartButtonContainer.classList.remove('hidden');
}


// Reiniciar el juego
function restartGame() {
    currentQuestion = 0;
    correctAnswers = 0;
    stars = 0;
    starsCounter.textContent = "0 Estrellas";
    correctAnswersCounter.textContent = "Respuestas Correctas: 0";
    levelDisplay.textContent = "Nivel: 1";
    questionContainer.classList.add('hidden');
    endGameMessage.classList.add('hidden');
    restartButtonContainer.classList.add('hidden');
    showQuestion();
}

  // Muestra el mensaje de fin de juego
  function showEndGameMessage() {
      endGameMessage.textContent = `Juego Terminado! Respuestas correctas: ${correctAnswers} Estrellas: ${stars}`;
      restartButtonContainer.classList.remove("hidden");
      restartButton.onclick = () => {
          currentQuestion = 0;
          correctAnswers = 0;
          stars = 0;
          updateLevel();
          endGameMessage.textContent = "";
          restartButtonContainer.classList.add("hidden");
          spinWheel(); // Reinicia el juego
      };
  }
  

  function showFinalWindow() {
    scoreElement.textContent = `Tu puntaje es: ${correctAnswers}/${questions.length}`;
    finalWindow.style.display = "block"; // Mostrar ventana final
    nextButton.style.display = "none"; // Ocultar el siguiente botón
    restartButton.style.display = "block"; // Mostrar botón reiniciar
}

  // Inicializa el juego
  function init() {
      drawWheel();
      updateLevel();
      spinButton.onclick = spinWheel;
  }
  
  init();
  