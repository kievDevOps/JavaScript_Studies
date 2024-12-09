//  string methods = allow you to manipulate and work with text (strings)

let username = "KievDev";

console.log(username.charAt(0)); // K (letter at position 0)

console.log(username.indexOf("e")); // 2 (first ocurrence of the letter e)

console.log(username.lastIndexOf("e")); // 5 (last ocurrence of the letter e)

console.log(username.length); // 6 (how many characters are in the string)

username = username.trim(); // clears unused blank spaces
console.log(username);

username = username.toUpperCase(); // makes all characters upper case

username = username.toLowerCase(); // makes all characters lower case

username = username.repeat(3); // will repeat the string 3 times

let result = username.startsWith(" "); // false (checks if 'username' starts with " ")
console.log(result);

let result2 = username.endsWith(" "); // false (checks if 'username' ends with " ")
console.log(result2);

// ------------------------------------------------------------------------------------- //

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", ""); // This will replace all dashes with nothing (or anything else) on the spaces
console.log(phoneNumber);
