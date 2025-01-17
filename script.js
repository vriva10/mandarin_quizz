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

function choisirModule() {
    let moduleSelection = prompt("Choisissez un module :\n1. Verbes\n2. Moments de la journée\n3. Compteurs\n4. Mots interrogatifs\n5. Prépositions d'espace\n6. Vale\n7. Espace\n8. Couleurs\n9. Test");

    switch(moduleSelection) {
        case "1":
            currentModule = termesVerbes;
            break;
        case "2":
            currentModule = termesMomentsJournée;
            break;
        case "3":
            currentModule = termesCompteurs;
            break;
        case "4":
            currentModule = termesMotsInterrogatifs;
            break;
        case "5":
            currentModule = termesPrépositionsEspace;
            break;
        case "6":
            currentModule = termesVale;
            break;
        case "7":
            currentModule = termesEspace;
            break;
        case "8":
            currentModule = termesCouleurs;
            break;
        case "9":
            currentModule = termesTest;
            break;
        default:
            alert("Module non valide, essayez encore !");
            return choisirModule();
    }

    jouerQuiz(currentModule);
}

function jouerQuiz(termes) {
    let termesToGuess = Object.keys(termes);
    let termesFound = [];
    let frise = Array(termesToGuess.length).fill('grey');
    
    alert("Bienvenue dans le quiz !");
    let questionIndex = 0;

    function askQuestion() {
        if (questionIndex < termesToGuess.length) {
            let terme = termesToGuess[questionIndex];
            let traduction = prompt(`Quelle est la traduction en mandarin de '${terme}' ?`);
            let correcte = termes[terme];

            if (traduction === correcte) {
                alert("Correct ! Passons à la question suivante.");
                termesFound.push(terme);
                frise[questionIndex] = 'green';  // Réussi
                questionIndex++;
                afficherFrise(frise, termesToGuess, termesFound);
                askQuestion();  // Poser la prochaine question
            } else {
                alert("Incorrect ! Réessayez.");
                askQuestion();  // Refaire la même question
            }
        } else {
            alert("Félicitations ! Vous avez terminé ce module.");
            proposerAutreModule();
        }
    }

    askQuestion();  // Lancer la première question
}

function afficherFrise(frise, termesOrdered, termesFound) {
    // Affiche la progression de l'utilisateur (utiliser une bibliothèque comme chart.js ou autre pour un graphique)
    console.log("Frise de progression:", frise);
    console.log("Termes trouvés:", termesFound);
}

function proposerAutreModule() {
    let choix = prompt("Souhaitez-vous choisir un autre module ? (oui / non)");
    if (choix.toLowerCase() === "oui") {
        choisirModule();
    } else

