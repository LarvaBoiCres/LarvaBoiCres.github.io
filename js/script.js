"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {
	"welcome": "welcome.mp3",
};

// Define the voice files used in the game.
const voice = {
	"No": "Moan 15.wav",
	"Yes": "Moan 14.wav",
};

// Define the sounds used in the game.
const sound = {
	"bulbasaur": "bulbasaur.mp3",
	"charmander": "charmander.mp3",
	"squirtle": "squirtle.mp3",
	"nidorino": "nidorino.mp3",
};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	"Good": "notrip.jpg",
	"Bad": "trip.png",
	"lab": "lab.png",
};

// Define the Characters
const characters = {
	"h": {
		"Name": "Señor Barriga",
		"Color": "#5bcaff",
		"Directory": "character1",
		"Images": {
            "Normal": "akari.gif",
            "Mad": "abadon.png",
        },
	},
	"oak": {
		"Name": "Profesor Oak",
		"Color": "#5bcaff",
		"Directory": "pokemon",
		"Images": {
            "normal": "oak.png",
        },
	},
	"player": {
		"Name": "{{player.name}}",
		"Color": "#5bcaff",
		"Directory": "pokemon",
		"Images": {
            "normal": "red.png",
        },
	},
	"rival": {
		"Name": "{{rival.name}}",
		"Color": "#5bcaff",
		"Directory": "pokemon",
		"Images": {
            "normal": "blue.png",
        },
	},
	"bulbasaur": {
		"Name": "Bulbasaur",
		"Color": "#5bcaff",
		"Directory": "pokemon",
		"Images": {
            "normal": "bulbasaur.jpg",
        },
	},
	"charmander": {
		"Name": "Charmander",
		"Color": "#5bcaff",
		"Directory": "pokemon",
		"Images": {
            "normal": "charmander.jpg",
        },
	},
	"squirtle": {
		"Name": "Squirtle",
		"Color": "#5bcaff",
		"Directory": "pokemon",
		"Images": {
            "normal": "squirtle.jpg",
        },
	},
	"nidorino": {
		"Name": "Nidorino",
		"Color": "#5bcaff",
		"Directory": "pokemon",
		"Images": {
            "normal": "nidorino.jpg",
        },
	},
};


let script = {
	// The game starts here.
	"Start": [
		"scene lab with fadeIn",
		"show oak normal right with fadeIn",
		"play music welcome",
		"oak ¡Hola! ¡Bienvenido al mundo de Pokémon! ¡Mi nombre es Oak!",
		"oak ¡La gente me llama Profesor Pokémon!",
		"show nidorino normal center",
		"play sound nidorino",
		"oak ¡Este mundo está habitado por criaturas llamadas Pokémon!",
		"oak Para algunas personas, los pokémon son mascotas. Otros los usan para peleas.",
		"oak En cuanto a mí, yo estudio a los pokémon como profesión.",
		"hide nidorino",
		"show player normal left",
		"oak ¿Cuál es tu nombre?",
	    {
			"Input": {
				"Text": "¿Cuál es tu nombre?",
				"Validation": function(input) {
				    return input.trim().length > 0;
			    },
			    "Save": function(input) {
			        storage.player.name = input;
			    },
			    "Warning": "Escribe algo po, weón."
            }
        },
		"oak ¡Aah! ¡Entonces tu nombre es {{player.name}}!",
		"hide player",
		"show rival normal left",
		"oak Este es mi nieto. Ha sido tu rival desde que eras un bebé.",
		"oak Ehh... ¿cuál era su nombre?",
		{
			"Input": {
				"Text": "¿Cuál era su nombre?",
				"Validation": function(input) {
				    return input.trim().length > 0;
			    },
			    "Save": function(input) {
			        storage.rival.name = input;
			    },
			    "Warning": "Escribe algo po, weón."
            }
        },
		"oak ¡Ahora recuerdo! ¡Su nombre es {{rival.name}}!",
		"hide rival",
		"show player normal left",
		"oak ¡{{player.name}}! ¡Tu propia aventura pokémon está a punto de comenzar!",
		"oak Montón de sueños y aventuras con pokémon te esperan! ¡Vamos!",
		"oak [2 MINUTOS MAS TARDE...]",
		"jump choosePokemon",
	],
	"choosePokemon": [
		"hide bulbasaur",
		"hide charmander",
		"hide squirtle",
		"oak ¿Cuál pokémon quieres?",
		{
			"Choice": {
				"bulbasaur": {
					"Text": "Bulbasaur",
					"Do": "jump chooseBulbasaur"
				},
				"charmander": {
					"Text": "Charmander",
					"Do": "jump chooseCharmander"
				},
				"squirtle": {
					"Text": "Squirtle",
					"Do": "jump chooseSquirtle"
				},
				"ninguno": {
					"Text": "nimguno",
					"Do": "jump chooseNone"
				},
			}
		},
	],
	"chooseBulbasaur": [
		"show bulbasaur normal center",
		"play sound bulbasaur",
		"oak ¿Quieres a Bulbasaur, el pokémon sapo culiao?",
		{
			"Choice": {
				"Demás!": {
					"Text": "Demás!",
					"Do": "jump choose",
				},
				"Calmao...": {
					"Text": "Calmao...",
					"Do": "jump choosePokemon",
				},
			},
		},
	],
	"chooseCharmander": [
		"show charmander normal center",
		"play sound charmander",
		"oak ¿Quieres a Charmander, el pokémon largarto ctm?",
		{
			"Choice": {
				"Demás!": {
					"Text": "Demás!",
					"Do": "jump choose",
				},
				"Calmao...": {
					"Text": "Calmao...",
					"Do": "jump choosePokemon",
				},
			},
		},
	],
	"chooseSquirtle": [
		"show squirtle normal center",
		"play sound squirtle",
		"oak ¿Quieres a Squirte, el pokémon tortuga de mierda?",
		{
			"Choice": {
				"Demás!": {
					"Text": "Demás!",
					"Do": "jump choose",
				},
				"Calmao...": {
					"Text": "Calmao...",
					"Do": "jump choosePokemon",
				},
			},
		},
	],
	"choose": [
		"oak Perkin.",
	],
	"chooseNone": [
		"stop music",
		"oak Si querí no más.",
	],
	"unused": [
		// "notify Welcome",
		"scene Good",
		"show h Normal middle",
		// "play voice No",
		{
			"Choice": {
				"Dialog": "h Págueme la renta.",
				"Yes": {
					"Text": "Yes",
					"Do": "jump Yes"
				},
				"No": {
					"Text": "No",
					"Do": "jump Start",
				}
			}
		}
	],

	"Yes": [
		"scene Bad",
		// "play voice Yes",
		"show h Mad with fadeIn",
		"h Nadie se va sin pagarme la renta!",
		"end"
	],

	"No": [

		"h You can do it now.",

		"display message Help",

		"h Go ahead and create an amazing Game!",
		"h I can't wait to see what story you'll tell!",
		"end"
	]
};