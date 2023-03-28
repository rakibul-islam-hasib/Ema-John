function addCommas(num) {
    // Convert number to a string
    num = num.toString();
  
    // Split the integer and decimal parts
    var parts = num.split(".");
    var integerPart = parts[0];
    var decimalPart = parts.length > 1 ? "." + parts[1] : "";
  
    // Add commas to the integer part
    var regex = /(\d+)(\d{3})/;
    while (regex.test(integerPart)) {
      integerPart = integerPart.replace(regex, "$1,$2");
    }
  
    // Combine the integer and decimal parts
    return integerPart + decimalPart;
  }   

export {addCommas}