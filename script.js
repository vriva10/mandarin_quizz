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
        };

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
                document.querySelector('#feedback').textContent = "Félicitations ! Vous avez terminé le quizz.";
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
