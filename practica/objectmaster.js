const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
//Una serie de objetos Pokémon donde la identificación es divisible por 3
const idDivTres= pokemon.filter(item => item.id % 3 === 0);
//Una serie de objetos Pokémon que son del tipo "fuego"
const firePkmn= pokemon.filter(item => item.types.includes("fire"));
//Una variedad de objetos Pokémon que tienen más de un tipo
const pkmnTypes= pokemon.filter(item => item.types.length > 1);
//Una matriz con solo los nombres de los Pokémon
const pkmnNames= pokemon.map(item => item.name);
//Una matriz con solo los nombres de Pokémon con una identificación mayor que 99
const greaterThan99= pokemon.filter(item => item.id > 99).map(item => item.name);
//Una matriz con solo los nombres del pokémon cuyo único tipo es veneno
const poisonPkmn= pokemon.filter(item => item.types[0] === "poison" && item.types.length === 1).map(item => item.name); 
//Una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
const typeFlyingPkmn= pokemon.filter(item => item.types[1] === "flying").map(item => item.types[0]);
//Un recuento de la cantidad de pokémon que son de tipo "normal"
const normalPkmn= pokemon.filter(item => item.types.includes("normal")).map(item => item= 1).reduce((a, b) => a + b, 0);