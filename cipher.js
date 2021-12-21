// a list of required input
const alphabet = ['A','B','C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Creating a function that change the position of the alphabets with + or - 9
function rot9(str) {
    // create placeholder
    let placeHolder = '';

    // loop through the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const isALetter = alphabet.includes(char);
        // if char is not letter, add to placeHolder
        if (isALetter === false) {
            placeHolder += char;
        } else {
            // else, rotate + or - 9, add to placeHolder
            const charIndex = alphabet.findIndex((c) => c === char);

            placeHolder += alphabet[charIndex  + 9] || alphabet[charIndex - 9];

        }
    }
    return placeHolder;
}

// Test the encryption with these
console.log (rot9('THIS IS A GOOD DAY'))