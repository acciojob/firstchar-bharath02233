function firstChar(text) {
  // Loop through the string to find the first non-space character
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            return str[i]; // Return the first non-space character
        }
    }
    return '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
