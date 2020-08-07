﻿"use strict";

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

};

// Define the voice files used in the game.
const voice = {
	"No": "Moan 15.wav",
	"Yes": "Moan 14.wav",
};

// Define the sounds used in the game.
const sound = {
	
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
	}
};


let script = {
	// The game starts here.
	"Start": [
		// "notify Welcome",
		"scene Good",
		"show h Normal middle",
		"play voice No",
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
		"play voice Yes",
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