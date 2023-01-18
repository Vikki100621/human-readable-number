module.exports = function toReadable (number) {
   let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
   let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

   if (number < 20) {
      return numbers[number];
   } else if (number < 100) {
      return tens[Math.floor(number / 10) - 2] + (number % 10 === 0 ? "" : " " + numbers[number % 10]);
   } else if (number < 1000) {
      return numbers[Math.floor(number / 100)] + " " + 'hundred' + (number % 100 === 0 ? "" : " " + toReadable(number % 100));
   } else if (number < 20000) {
      return numbers[Math.floor(number / 1000)] + " " + 'thousand' + (number % 1000 === 0 ? "" : " " + toReadable(number % 1000));
   } else if (number < 100000) {
      return (tens[Math.floor(number / 10000) - 2] + " " + toReadable(number % 10000));
   } else {
      return (numbers[Math.floor(number / 100000)] + " " + 'hundred' + " " + toReadable(number % 100000));
   }
}
