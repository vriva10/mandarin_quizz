document.addEventListener('DOMContentLoaded', function () {
    const modules = {
        verbs: {
            "aller": "qu",
            "venir": "laai",
            "faire": "zuo",
            // Ajoute d'autres verbes ici...
        },
        time: {
            "nuit": "yèwân",
            "soir": "wânshàng",
            "après-midi": "xiàwû",
            // Ajoute d'autres moments de la journée ici...
        },
        counters: {
            "personnes": "gè",
            "animaux": "zhiii",
            "livres": "bên",
            // Ajoute d'autres compteurs ici...
        },
        questions: {
            "Qui": "shéi",
            "Quoi/quel": "shénme",
            // Ajoute d'autres mots interrogatifs ici...
        },
        space: {
            "à / dans / chez": "zài",
            "sur / dessus ": "shàng",
            // Ajoute d'autres prépositions d'espace ici...
        },
        Vale: {
            "coeur": "xiiin",
            "lapin": "tu",
            // Ajoute d'autres termes de Vale ici...
        },
        Espace: {
            "planète": "xiinxiiing",
            "Terre": "tu",
            // Ajoute d'autres termes d'Espace ici...
        },
        Couleurs: {
            "rouge": "hoongsè",
            "bleu": "laansè",
            // Ajoute d'autres couleurs ici...
        },
    };

    let currentModule = null;
    let currentTermIndex = 0;
    let termsToGuess = [];
    
    // Sélection du module
    const buttons = document.querySelectorAll('#module-selection button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const moduleName = this.dataset.module;
            currentModule = modules[moduleName];

            // Affichage du quiz et préparation des termes
            document.querySelector('#module-selection').style.display = 'none';
            document.querySelector('#quiz-container').style.display = 'block';

            termsToGuess = Object.keys(currentModule);
            currentTermIndex = 0;

            displayQuestion();
        });
    });

    function displayQuestion() {
        const currentTerm = termsToGuess[currentTermIndex];
        document.querySelector('#question').textContent = `Quelle est la traduction de '${currentTerm}' ?`;
        document.querySelector('#answer').value = '';  // Effacer le champ de réponse
        document.querySelector('#feedback').textContent = '';  // Effacer le feedback
    }

    // Validation de la réponse
    document.querySelector('#validate').addEventListener('click', function () {
        const userAnswer = document.querySelector('#answer').value.trim();
        const correctAnswer = currentModule[termsToGuess[currentTermIndex]];

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            document.querySelector('#feedback').textContent = `Correct ! La traduction de '${termsToGuess[currentTermIndex]}' est '${correctAnswer}'.`;
            document.querySelector('#feedback').style.color = 'green';
        } else {
            document.querySelector('#feedback').textContent = `Incorrect. La bonne réponse est '${correctAnswer}'.`;
            document.querySelector('#feedback').style.color = 'red';
        }

        // Passer à la question suivante après un délai
        setTimeout(() => {
            currentTermIndex++;

            if (currentTermIndex < termsToGuess.length) {
                displayQuestion();
            } else {
                document.querySelector('#feedback').textContent = "Félicitations ! Vous avez terminé le quiz.";
                document.querySelector('#feedback').style.color = 'blue';
                document.querySelector('#restart').style.display = 'inline-block';
            }
        }, 2000);  // 2 secondes avant la prochaine question
    });

    // Gestion de la touche "Entrée" pour valider la réponse
    document.querySelector('#answer').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            document.querySelector('#validate').click();
        }
    });

    // Recommencer avec un autre module
    document.querySelector('#restart').addEventListener('click', function () {
        document.querySelector('#module-selection').style.display = 'block';
        document.querySelector('#quiz-container').style.display = 'none';
        document.querySelector('#restart').style.display = 'none';
    });
});
