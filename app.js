// //Changing Case
// let text = prompt("Enter some text");
// console.log("Uppercase" , text.toUpperCase());
// console.log("Lowercase" , text.toLowerCase());





// // Strings: Measuring length and extracting parts
// let text = "JavaScript";

// // Extract characters from index 0 to 4 (4 is not included)
// let result = text.slice(0, 4);

// console.log(result); // Output: "Java"

// // 0 is the start (includes J).
// // 4 is the end (doesn’t include the 4th character S).

// //  Negative Indices (Counting Backwards)
// // You can use negative numbers to count from the end of the string
// let texts = "JavaScript";

// // Slice the last 3 characters
// let results = texts.slice(-3);

// console.log(results); // Output: "ipt"

// // -3 starts 3 characters from the end.

// let city = "LOS ANGELES"
// let formattedCity = city.slice(0, 1).toUpperCase() + city.slice(1).toLowerCase();
// console.log(formattedCity);





//indexOf 
// let para = "JavaScript is awesome!";
// let position = para.indexOf("Script");
// console.log(position); // Output: 11 (the index where "is" starts)

// let text = "Banana cat Banana";
// let posts = text.indexOf("Banana", 7); // Start search from index 7
// console.log(posts); // Output: 11/

// // lastindexOf
// let sentence = "I love JavaScript and JavaScript is awesome!";
// let lastIndex = sentence.lastIndexOf("JavaScript");
// let result = sentence.slice(0, lastIndex) + sentence.slice(lastIndex + "JavaScript".length);
// console.log(result); // Output: "I love JavaScript and is awesome!"







// //Math.round()
// // uese
// // The function Math.round() rounds a number to the nearest integer:
// // Example: Math.round(3.7) gives 4, and Math.round(3.2) gives 3.
// // How it works: If the decimal part is 0.5 or greater, it rounds up. Otherwise, it rounds down.

// var scoreAvg = 4.6;
// var numberOfStars = Math.round(scoreAvg);
// console.log(numberOfStars); // Output: 5





// // //Math.ceil
// // Using Math.ceil() (Round Up)
// // The Math.ceil() function always rounds up, no matter how small the decimal part is.
// // Example: Math.ceil(3.01) gives 4.
// var scoreAvg = 3.2;
// var roundedUp = Math.ceil(scoreAvg);
// console.log(roundedUp); // Output: 4





// // //Math.floor
// // Using Math.floor() (Round Down)
// // The Math.floor() function always rounds down, regardless of the decimal part.
// // Example: Math.floor(3.9) gives 3.
// var scoreAvg = 4.9;
// var roundedDown = Math.floor(scoreAvg);
// console.log(roundedDown); // Output: 4



// //dice
// var bigDecimal = Math.random();  // Random decimal between 0 and 1
// var improvedNum = (bigDecimal * 6) + 1;
// console.log(improvedNum);  // Output: A number between 1 and 6 (e.g., 3.5)

// var bigDecimal = Math.random();  // Generate a random decimal between 0 and 1
// var improvedNum = (bigDecimal * 6) + 1;  // Scale to range 1 to 6
// var numberOfStars = Math.floor(improvedNum);  // Round down to an integer between 1 and 6
// console.log(numberOfStars);  // Output: A random integer from 1 to 6.

// Summary of Each Step:
// Generate a random decimal: Math.random() gives us a decimal between 0 and 1.
// Scale the decimal: Multiply the decimal by 6 to get a range from 0 to 5.999999.
// Add 1: Shifts the range from 1 to 6.999999.
// Round down: Use Math.floor() to round down to the nearest integer between 1 and 6.







// //toFixed
// var num = 1.555;
// var prettyTotal = num.toFixed(2); // Could give "1.55" or "1.56" depending on the browser
// Summary
// The whole process ensures that if a number ends in .5, it is rounded up correctly. The method does the following:
// Converts the number to a string.
// Checks if the last character is "5".
// Replaces "5" with "6" if necessary.
// Converts the string back to a number.
// Rounds the number to the required decimal places.
// This solution is a workaround for the inconsistent behavior of .toFixed() when rounding numbers ending in .5.

















