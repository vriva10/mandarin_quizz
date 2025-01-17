document.addEventListener('DOMContentLoaded', function () {
    const modules = {
        verbs: {
            "aller": "qu",
            "venir": "laai",
            "faire": "zuo",
            "dire/parler": "shuooo",
            "voir/regarder": "kàn",
            "écouter": "tiiing",
            "manger": "chiii",
            "boire": "heee",
            "écrire": "xiê",
            "lire": "duu",
            "étudier": "xué",
            "savoir": "zhiiidào",
            "(re)connaitre": "rènshi",
            "aimer/apprécier": "xîhuaaan",
            "vouloir (besoin) / devoir": "yào",
            "vouloir (désirer) / penser": "xiâng",
            "dormir": "shuijiào",
            "acheter": "mâi",
            "vendre": "mài",
            "marcher/partir": "zôu",
            "demander": "wèn",
            "répondre": "huiidaa",
            "attendre": "dêng",
            "aider": "baaang",   
            "jouer/s'amuser": "waan",   
            "donner": "gêi",
            "ouvrir/conduire": "kaaai",   
            "aimer": "ài",    
            "travailler": "gooongzuo",    
            "pouvoir (skill acquise, possibilité subjective)": "hui",    
            "pouvoir (skill naturel, possibilité objective et permission)": "néng",
            "pouvoir (skill naturel, possibilité objective, conseil et permission)": "kê yî",
            "cuisiner": "zuofàn",
            "voyager": "lüûxiing",
            "résider/habiter": "zhu"
        },

        time: {
            "nuit": "yèwân",
            "soir": "wânshàng",
            "après-midi": "xiàwû",
            "midi": "zhooongwû", 
            "matin": "zâoshàng",
            "aujourd'hui": "jiiintiaaan",    
            "demain": "miingtiaaan",    
            "hier": "zuootiaaan",   
            "jour": "hào/tiaaan",  
            "mois": "yuè",  
            "année": "niaan",
        },
        counters: {
            "personnes, fruits": "gè",
            "animaux": "zhiii",
            "livres": "bên", 
            "objets longs, minces, flexibles": "tiaao",
            "objets en bloc/ morceaux, argent": "kuài",
            "objets plats": "zhaaang",
            "boissons en récipient": "beeei",
            "véhicules": "liàng",
            "personnes (respectueux)": "wèi",
            "paires": "shuaaang",
        },
        questions: {
            "Questions fermées": "ma",
            "Qui": "shéi",
            "Quoi/quel": "shénme",
            "Où": "nâlî",
            "Comment": "zênme",
            "Combien": "duoooshâo",
            "Quand": "shénme shiihou",
            "Pourquoi": "wèishénme",
            "Quelle (quantité, heure)": "jî",
            "Quel âge": "duooo dà",
            "Quelle (distance)": "duooo yuân",
            "Quelle (longueur)": "duooo chaang", 
            "Quelle (taille)": "duooo gaaao",
            "Qu'en est-il": "zênmeyàng",
        },
        space: {
            "à / dans / chez": "zài",
            "sur / dessus ": "shàng",
            "sous / dessous": "xià",
            "dans": "lî-miàn",
            "dehors / à l'extérieur": "wài-miàn",
            "devant": "qiaan-miàn",
            "derrière": "hou-miàn",
            "en face de": "dui-miàn",
            "à côté de": "paangbiaaan",
            "au milieu de / entre": "zhooongjiaaan",
        },
        Vale: {
            "coeur": "xiiin",
            "lapin": "tu",
             "gâteau": "dàngaaao",
            "étoiles": "xiiing",
            "Jupiter": "muxiiing",
            "petit": "xiâo",
            "mangue": "maang guô",
            "tarp": "hou(miàn)",
            "peticopuine": "nüûpéngyôu",
        },
        Espace: {
            "planète": "xiinxiiing",
            "Terre": "tu",
            "Lune": "dàngaaao",
            "étoile": "xiiing",
            "Soleil": "muxiiing",
            "Mars": "xiâo",   
        },
        Couleurs: {
            "rouge": "hoongsè",
            "bleu": "laansè",
            "vert": "lüûsè",
            "noir": "heeeisè",
            "blanc": "baaisè",
            "violet": "zîsè",
            "orange": "chéngsè",
            "rose": "fênhoongsè",
            "gris": "huìsè",
            "marron": "hooongsè",
            "jaune": "huuangsè",
        }
    };

    let currentModule = null;
    let totalQuestions = 0;
    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById("quiz-container");
    const questionElement = document.getElementById("question");
    const feedbackElement = document.getElementById("feedback");
    const answerInput = document.getElementById("answer");
    const validateButton = document.getElementById("validate");
    const restartButton = document.getElementById("restart");
    const progressBar = document.getElementById("progress-bar");

    document.querySelectorAll("#module-selection button").forEach(button => {
        button.addEventListener("click", () => {
            const moduleKey = button.getAttribute("data-module");
            if (modules[moduleKey]) {
                currentModule = modules[moduleKey];
                totalQuestions = Object.keys(currentModule).length;
                currentQuestionIndex = 0;
                score = 0;
                startQuiz();
            }
        });
    });

    function startQuiz() {
        document.getElementById("module-selection").style.display = "none";
        quizContainer.style.display = "block";
        displayQuestion();
        updateProgressBar();
    }

    function displayQuestion() {
        const questions = Object.keys(currentModule);
        if (currentQuestionIndex < totalQuestions) {
            questionElement.textContent = `Traduisez : ${questions[currentQuestionIndex]}`;
        } else {
            endQuiz();
        }
    }

    function updateProgressBar() {
        const progress = (score / totalQuestions) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function endQuiz() {
        questionElement.textContent = "Quiz terminé !";
        validateButton.style.display = "none";
        restartButton.style.display = "block";
        answerInput.style.display = "none";
        feedbackElement.textContent = `Votre score : ${score}/${totalQuestions}`;
    }

    validateButton.addEventListener("click", () => {
        const questions = Object.keys(currentModule);
        const correctAnswers = Object.values(currentModule);
        const userAnswer = answerInput.value.trim();

        if (userAnswer.toLowerCase() === correctAnswers[currentQuestionIndex].toLowerCase()) {
            feedbackElement.textContent = "Bonne réponse !";
            feedbackElement.style.color = "green";
            score++;
            updateProgressBar();
        } else {
            feedbackElement.textContent = `Faux ! La bonne réponse était : ${correctAnswers[currentQuestionIndex]}`;
            feedbackElement.style.color = "red";
        }

        currentQuestionIndex++;
        answerInput.value = "";
        setTimeout(displayQuestion, 1000);
    });

    restartButton.addEventListener("click", () => {
        quizContainer.style.display = "none";
        document.getElementById("module-selection").style.display = "block";
        feedbackElement.textContent = "";
        answerInput.style.display = "block";
        validateButton.style.display = "block";
        progressBar.style.width = "0%";
    });
});
