class Calculator {
    constructor(){
      this.result = 0;
    }
    
    getResult(){
      return this.result;
    }
  
    clear(){
      this.result = 0;
    }
  
    add(number){
      this.result += number;
    }
  
    subtract(number){
      this.result -= number;
    }
  
    multiply(number){
      this.result *= number;
    }
  
    divide(number){
      if(number == 0){
        throw new Error(Error);
      }
      return this.result /= number;
    }
    
    calculate(expression){
  
      if(/[a-zA-Z]/g.test(expression)){ // if contains invalid numbers i.e abc, xyz
        throw new Error(Error);
      }
      else if(expression.includes('/')){ // if contains divide by 0
        let spaceless = expression.split(' ').join('').split(' ').join('');
  
        if(spaceless[spaceless.indexOf('/')+1] == 0) {
          throw new Error(Error);
        }
      }
      this.result = eval(expression);
    }
  }

let calc = new Calculator();
calc.add(5);
//calc.divide(0);
calc.calculate('(10 + 2) + ab');