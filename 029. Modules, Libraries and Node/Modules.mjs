console.clear();
// Modules are files that contain variables, functions, etc.
// To use a variable from a module in a different file, we need to first import it using import from
// Here, we'll import pi from mod.js
import pi from "./mod.mjs";
// Now that we've imported the variable, we can use it. Let's display the value of pi in the console.
console.log(pi);

import reminder from './mod1.mjs';
console.log(reminder("Wake up.", "coding"));

import { flight, query } from './mod2.mjs';
console.log(query(flight, "Vienna", "New York"));
