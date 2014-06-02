'use strict';

//var _ = require('lodash');

class Calculator{

  static add(x,y){
    return x+y;
  }

  static subtract(x,y){
    return x-y;
  }

  static pow(base,exp){
    return Math.pow(base,exp);
  }

  static sum(array){
    var total = 0;
    array.forEach(x=>{
      total += x;
    });
    return total;
  }

  // static splitNums(string){
  //   var numArray = [];
  //   var fractionArray = string.split(',');
  //
  //   fractionArray.forEach(frac=>{
  //     var singleFracArray = frac.split('/');
  //     numArray.push(singleFracArray[0] * 1);
  //   });
  //
  //   return numArray;
  // }
  //
  // static splitDenoms(string){
  //   var denomArray = [];
  //   var fractionArray = string.split(',');
  //
  //   fractionArray.forEach(frac=>{
  //     var singleFracArray = frac.split('/');
  //     denomArray.push(singleFracArray[1] * 1);
  //   });
  //
  //   return denomArray;
  // }
  //
  // static findLCD(array){
  //   var gcf = ( b == 0 ) ? (a):( gcf(b, a % b) );
  //
  //
  //
  //
  //
  // }


}

module.exports = Calculator;
