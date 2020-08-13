/*Notes:
* This file is a helper that generates a URL for the room to be created.
*
* TODO: 
* Find where the input goes
* Pull doctor last name to use in custom room URL
* Check if .nodeValue is equivalent to .value
*/
var docName = '';
var num = Math.floor(Math.random() * 100);

// (Original code used .value instead here)
document.getElementById("input-01").nodeValue = docName;