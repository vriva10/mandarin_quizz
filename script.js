document.addEventListener('DOMContentLoaded', function () {
    
    // Les modules avec leurs termes en mandarin
const termesVerbes = {
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

const termesMomentsJournée = {
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
};

const termesCompteurs = {
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
};

const termesMotsInterrogatifs = {
    "- Questions fermées": "ma",
    "- Qui": "shéi",
    "- Quoi/quel": "shénme", 
    "- Où": "nâlî",
    "- Comment": "zênme",
    "- Combien": "duoooshâo",
    "- Quand": "shénme shiihou",
    "- Pourquoi": "wèishénme",
    "- Quelle (quantité, heure)": "jî",
    "- Quel âge": "duooo dà",
    "- Quelle (distance)": "duooo yuân",
    "- Quelle (longueur)": "duooo chaang", 
    "- Quelle (taille)": "duooo gaaao",
    "- Qu'en est-il": "zênmeyàng",
};

const termesPrépositionsEspace = {
    "à / dans / chez": "zài",
    "sur / dessus": "shàng",
    "sous / dessous": "xià",
    "dans": "lî-miàn",
    "dehors / à l'extérieur": "wài-miàn",
    "devant": "qiaan-miàn",
    "derrière": "hou-miàn",
    "en face de": "dui-miàn",
    "à côté de": "paangbiaaan",
    "au milieu de / entre": "zhooongjiaaan",
};

const termesVale = {
    "coeur": "xiiin",
    "lapin": "tu",
    "gâteau": "dàngaaao",
    "étoiles": "xiiing",
    "Jupiter": "muxiiing",
    "petit": "xiâo",
    "mangue": "maang guô",
    "tarp": "hou(miàn)",
    "peticopuine": "nüûpéngyôu",  
};

const termesEspace = {
    "planète": "xiinxiiing",
    "Terre": "tu",
    "Lune": "dàngaaao",
    "étoile": "xiiing",
    "Soleil": "muxiiing",
    "Mars": "xiâo",
};

const termesCouleurs = {
    "rouge": "hoongsè",
    "bleu": "laansè",
    "jaune": "huuangsè",
    "vert": "lüûsè",
    "noir": "heeeisè",
    "blanc": "baaisè",
    "violet": "zîsè",
    "orange": "chéngsè",
    "rose": "fênhoongsè",
    "gris": "huìsè",
    "marron": "hooongsè",
};

const termesTest = {
    "test": "ok",
};

const modules = {
    "Verbes": termesVerbes,
    "Moments de la journée": termesMomentsJournée,
    "Compteurs": termesCompteurs,
    "Mots interrogatifs": termesMotsInterrogatifs,
    "Prépositions d'espace": termesPrépositionsEspace,
    "Vale": termesVale,
    "Espace": termesEspace,
    "Couleurs": termesCouleurs,
    "Test": termesTest
};

let currentModule = null;

    // Gérer la sélection du module
    const buttons = document.querySelectorAll('#module-selection button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const moduleName = this.dataset.module;
            currentModule = modules[moduleName];

            // Afficher le quiz
            document.querySelector('#module-selection').style.display = 'none';
            document.querySelector('#quiz-container').style.display = 'block';

            // Commencer le quiz
            startQuiz();
        });
    });

    function startQuiz() {
        const terms = Object.keys(currentModule);
        let currentTermIndex = 0;

        // Affiche la première question
        displayQuestion(terms[currentTermIndex]);

        // Gestion du clic sur "Valider"
        document.querySelector('#validate').addEventListener('click', function () {
            checkAnswer(terms[currentTermIndex], document.querySelector('#answer').value);
        });

        // Gestion de la touche "Entrée" pour valider la réponse
        document.querySelector('#answer').addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                checkAnswer(terms[currentTermIndex], document.querySelector('#answer').value);
            }
        });

        function displayQuestion(term) {
            document.querySelector('#question').textContent = `Quelle est la traduction de '${term}' ?`;
            document.querySelector('#answer').value = '';  // Effacer le champ de réponse
            document.querySelector('#feedback').textContent = '';  // Effacer le feedback précédent
        }

        function checkAnswer(term, userAnswer) {
            const correctAnswer = currentModule[term];

            // Vérifier si la réponse est correcte
            if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
                document.querySelector('#feedback').textContent = `Correct ! La traduction de '${term}' est '${correctAnswer}'.`;
                document.querySelector('#feedback').style.color = 'green';
            } else {
                document.querySelector('#feedback').textContent = `Incorrect. La bonne réponse est '${correctAnswer}'.`;
                document.querySelector('#feedback').style.color = 'red';
            }

            // Passer à la question suivante après une courte pause
            setTimeout(function () {
                currentTermIndex++;

                if (currentTermIndex < terms.length) {
                    displayQuestion(terms[currentTermIndex]);
                } else {
                    document.querySelector('#feedback').textContent = "Félicitations ! Vous avez terminé le quiz.";
                    document.querySelector('#feedback').style.color = 'blue';
                    document.querySelector('#restart').style.display = 'inline-block';
                }
            }, 2000);  // Pause de 2 secondes avant de passer à la question suivante
        }
    }

    // Bouton pour recommencer le quiz avec un autre module
    document.querySelector('#restart').addEventListener('click', function () {
        document.querySelector('#module-selection').style.display = 'block';
        document.querySelector('#quiz-container').style.display = 'none';
        document.querySelector('#restart').style.display = 'none';
    });
});
