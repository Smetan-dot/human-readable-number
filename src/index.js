module.exports = function toReadable (number) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = ' hundred ';
    let output = '';
    let numberString = number.toString();

    if (number ==- 0) return 'zero';
    if (number === 20) return 'twenty';
    if (number === 30) return 'thirty';
    if (number === 40) return 'forty';
    if (number === 50) return 'fifty';
    if (number === 60) return 'sixty';
    if (number === 70) return 'seventy';
    if (number === 80) return 'eighty';
    if (number === 90) return 'ninety';
    if (number === 100) return 'one hundred';
    if (number === 200) return 'two hundred';
    if (number === 300) return 'three hundred';
    if (number === 400) return 'four hundred';
    if (number === 500) return 'five hundred';
    if (number === 600) return 'six hundred';
    if (number === 700) return 'seven hundred';
    if (number === 800) return 'eight hundred';
    if (number === 900) return 'nine hundred';
   
    if (number < 20) {
        output = ones[number];
        return output;
    }

    if (number < 100) {
        if (number % 10 === 0) {
            output += tens[parseInt(numberString.charAt(1))];
            output += ones[parseInt(numberString.charAt(2))];
        }
        else {
            output += tens[parseInt(numberString.charAt(0))] + ' ';
            output += ones[parseInt(numberString.charAt(1))];
        }
        return output;
    }
  
    if (numberString.length == 3) {
        output = ones[parseInt(numberString.charAt(0))] + hundred;
        if ((number % 100) < 20) {
            output += ones[number % 100];
        }
        else {
            if (number % 10 === 0) {
                output += tens[parseInt(numberString.charAt(1))];
                output += ones[parseInt(numberString.charAt(2))];
            }
            else {
                output += tens[parseInt(numberString.charAt(1))] + ' ';
                output += ones[parseInt(numberString.charAt(2))];
            } 
        }
        return output;
    }  
}
