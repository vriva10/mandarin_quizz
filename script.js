// Les modules avec leurs termes en mandarin
const modules = {
    verbs: {
        "aller": "qu",
        "venir": "laai",
        "faire": "zuo",
        "voir": "kàn"
    },
    time: {
        "nuit": "yèwân",
        "soir": "wânshàng",
        "matin": "zâoshàng"
    },
    counters: {
        "personnes": "gè",
        "animaux": "zhiii",
        "livres": "bên"
    },
    questions: {
        "Qui": "shéi",
        "Quoi": "shénme",
        "Pourquoi": "wèishénme"
    },
    space: {
        "à": "zài",
        "sur": "shàng",
        "sous": "xià"
    }
};

let currentModule = null;
let termsToGuess = [];
let currentTerm = null;

const moduleSelectionDiv = document.getElementById("module-selection");
const quizContainerDiv = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const validateButton = document.getElementById("validate");
const feedbackElement = document.getElementById("feedback");
const restartButton = document.getElementById("restart");

// Fonction pour démarrer un module
function startModule(moduleName) {
    currentModule = modules[moduleName];
    termsToGuess = Object.keys(currentModule);
    currentTerm = null;

    moduleSelectionDiv.style.display = "none";
    quizContainerDiv.style.display = "block";

    nextQuestion();
}

// Fonction pour afficher la question suivante
function nextQuestion() {
    if (termsToGuess.length > 0) {
        const randomIndex = Math.floor(Math.random() * termsToGuess.length);
        currentTerm = termsToGuess.splice(randomIndex, 1)[0]; // Retirer le terme
        questionElement.textContent = `Quelle est la traduction de "${currentTerm}" en mandarin ?`;
        feedbackElement.textContent = "";
        answerInput.value = "";
        answerInput.focus();
    } else {
        questionElement.textContent = "Félicitations ! Vous avez terminé le module.";
        feedbackElement.textContent = "";
        answerInput.style.display = "none";
        validateButton.style.display = "none";
        restartButton.style.display = "block";
    }
}

// Fonction pour valider la réponse
function validateAnswer() {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = currentModule[currentTerm];

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct ! Passons à la question suivante.";
        setTimeout(nextQuestion, 1000); // Pause avant la question suivante
    } else {
        feedbackElement.textContent = `Incorrect. La bonne réponse était "${correctAnswer}". Passons à la suivante.`;
        setTimeout(nextQuestion, 2000);
    }
}

// Réinitialiser le quiz pour choisir un autre module
restartButton.addEventListener("click", () => {
    moduleSelectionDiv.style.display = "block";
    quizContainerDiv.style.display = "none";
    answerInput.style.display = "inline";
    validateButton.style.display = "inline";
    restartButton.style.display = "none";
});

// Déclencheur pour la validation
validateButton.addEventListener("click", validateAnswer);

// Permettre de valider avec la touche "Entrée"
answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        validateAnswer();
    }
});

// Gestion de la sélection de module
document.querySelectorAll("#module-selection button").forEach((button) => {
    button.addEventListener("click", (event) => {
        const moduleName = event.target.dataset.module;
        startModule(moduleName);
    });
});
