//Calculator with individual Functions
const calculator = {
   cal: function(num1, num2, operation){
        if(operation == "+"){
            return num1 + num2;
        }
        else if(operation == "-"){
            return num1 - num2;
        }
        else if(operation == "*"){
            return num1 * num2;
        }
        else  if(operation == "/"){
            return num1 / num2;
        }
        else  if(operation == "%"){
            return num1 % num2;
        }
   }
}

module.exports = calculator;