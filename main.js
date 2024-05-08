"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Make a array of magicians names in a function
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Function to make magicians Great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define array of magicians name
let magician_names = ["Usman", "Hamza", "Sunny", "Salman"];
// Makin a copy of an original array through .slice() function
let copy_magician_names = magician_names.slice();
// modify the copy array to include "the great" with their name
let copy_great_magicians = make_great(copy_magician_names);
// Show both arrays orginal and copied
// original
console.log("\nOriginal Array\n");
show_magicians(magician_names);
// copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
