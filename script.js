// Registro del Service Worker
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

// WebSocket: Verificar si hay conexión antes de establecer
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
    { question: "40) ¿A qué departamento del Perú se le denomina 'La Tierra de la Eterna Primavera'?", answers: ["Cusco", "Arequipa", "Trujillo"], correct: 2 },
  ];

// Variables de juego
let currentQuestion = 0;
let stars = 0; // Contador de estrellas
let correctAnswers = 0; // Contador de respuestas correctas
let currentLevel = 1; // Nivel inicial
const levelThreshold = 10; 
const maxLevel = 4; // Nivel máximo

// Elementos del DOM
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const starsCounter = document.getElementById("starsCounter"); // Elemento para mostrar las estrellas
const correctAnswersCounter = document.getElementById("correctAnswersCounter"); // Elemento para mostrar respuestas correctas
const levelText = document.getElementById("levelText"); // Elemento para mostrar el nivel
const levelDisplay = document.getElementById("level"); // Elemento para mostrar el nivel
const endGameMessage = document.getElementById("endGameMessage");
const finalWindow = document.getElementById("finalWindow");
// Mostrar pregunta y respuestas
function loadQuestion() {
    const current = questions[currentQuestion];
    questionText.textContent = current.question;
    answersContainer.innerHTML = "";
    current.answers.forEach((answer, index) => {
        const answerButton = document.createElement("button");
        answerButton.textContent = answer;
        answerButton.classList.add("answer-button");
        answerButton.addEventListener("click", () => checkAnswer(index));
        answersContainer.appendChild(answerButton);
    });
}

function incrementLevel() {
    if (currentLevel < maxLevel) { // Solo sube de nivel si no ha alcanzado el nivel máximo
      currentLevel++;
    }
    console.log("Nivel actual:", currentLevel);
  }

// Mostrar feedback
function showFeedback(message, color) {
    const feedback = document.createElement('div');
    feedback.textContent = message;
    feedback.style.backgroundColor = color;
    feedback.style.color = "#fff";
    feedback.style.padding = "10px";
    feedback.style.marginTop = "20px";
    feedback.style.borderRadius = "5px";
    feedback.style.textAlign = "center";
    feedback.style.fontSize = "16px";

    questionContainer.appendChild(feedback);

    setTimeout(() => {
        feedback.remove();
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            endGame();
        }
        updateLevel();
    }, 3000);
}

// Verificar la respuesta
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    if (selectedIndex === question.correct) {
        stars += 10;
        showFeedback("¡Correcto! Has ganado 10 estrellas", "#4CAF50");
        correctAnswers++;
    } else {
        stars = Math.max(0, stars - 5);
        showFeedback("Incorrecto, perdiste 5 estrellas", "#FF5733");
    }

    starsCounter.textContent = `Estrellas: ${stars}`;
    updateStats();
}

// Actualizar estadísticas
function updateStats() {
    starsCounter.textContent = `Estrellas: ${stars}`;
    correctAnswersCounter.textContent = `Respuestas correctas: ${correctAnswers}`;
    levelText.textContent = `Nivel: ${currentLevel}`;
}

// Función para actualizar el nivel
function updateLevel() {
    currentLevel = Math.floor(currentQuestion / levelThreshold) + 1;
    if (currentLevel > 4) {
        currentLevel = 4; // Limitar el nivel máximo a 4
    }
    levelDisplay.textContent = `Nivel: ${currentLevel}`;
}


// Finalizar el juego
function endGame() {
    document.getElementById("endGameMessage").classList.remove("hidden");
    document.getElementById("game-over-modal").style.display = "block";
    document.getElementById("correct-answers").textContent = `Respuestas Correctas: ${correctAnswers}`;
    
    // Limpiar el contenido previo
    let starsContainer = document.getElementById("stars");
    document.getElementById("stars").innerHTML = ""; // Limpiar el contenido previo

    // Crear la imagen de una estrella
    let img = document.createElement("img");
    img.src = "images/estrella.png"; // Ruta de la imagen de la estrella
    img.alt = "Estrella"; // Texto alternativo para la imagen
    img.style.width = "30px"; // Ajusta el tamaño de la estrella
    img.style.height = "30px"; // Ajusta el tamaño de la estrella

    // Crear un contenedor de texto con la cantidad de estrellas obtenidas
    let starsText = document.createElement("span");
    starsText.textContent = ` ${stars}`; // Mostrar el número de estrellas obtenidas

    // Agregar la estrella y el texto al contenedor de estrellas
    document.getElementById("stars").appendChild(img);
    document.getElementById("stars").appendChild(starsText);
}

function answerQuestion() {
    currentQuestion++;
    updateLevel();
}

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
    };
}

// Iniciar el juego
loadQuestion();
