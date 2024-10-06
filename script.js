function firstNonRepeatedChar(str) {
    const charCount = {};

    // Count occurrences of each character in the string
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Loop through the string to find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Return null if no non-repeating character is found
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
