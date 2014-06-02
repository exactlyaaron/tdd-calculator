/* global describe, it */

'use strict';

var expect = require('chai').expect;
var traceur = require('traceur');
var Calculator = traceur.require(__dirname + '/../../app/models/calculator.js');

describe('Calculator', function(){
  describe('.add', function(){
    it('should add two numbers', function(){
      var sum = Calculator.add(2,3);
      expect(sum).to.equal(5);
    });
  });

  describe('.subtract', function(){
    it('should find difference of two numbers', function(){
      var diff1 = Calculator.subtract(3,2);
      expect(diff1).to.equal(1);

      var diff2 = Calculator.subtract(-4,-2);
      expect(diff2).to.equal(-2);
    });
  });

  describe('.pow', function(){
    it('should exponentiate 2 numbers', function(){
      var pow = Calculator.pow(3,2);
      expect(pow).to.equal(9);

      var pow2 = Calculator.pow(-3,2);
      expect(pow2).to.equal(9);
    });
  });

  describe('.sum', function(){
    it('should add up a list of numbers', function(){
      var sum = Calculator.sum([3,4,5]);
      expect(sum).to.equal(12);
    });
  });

  // describe('.splitNums', function(){
  //   it('should split the input value into array of numerators', function(){
  //     var numeratorArray = Calculator.splitNums('15/16,7/8,6/7');
  //     expect(numeratorArray).to.eql([15,7,6]);
  //   });
  // });
  //
  // describe('.splitDenoms', function(){
  //   it('should split the input value into array of denominators', function(){
  //     var denomArray = Calculator.splitDenoms('15/16,7/8,6/7');
  //     expect(denomArray).to.eql([16,8,7]);
  //   });
  // });
  //
  // describe('.findLCD', function(){
  //   it('should find the lowest common denominator', function(){
  //     var lcd = Calculator.findLCD([16,8,7]);
  //     expect(lcd).to.equal(112);
  //   });
  // });


});
