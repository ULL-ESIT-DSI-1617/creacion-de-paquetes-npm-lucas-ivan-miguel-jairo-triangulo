"use strict"

var Tri = require('../triangulo.js')
var Triangle = Tri.Triangle
var should = require('should');



describe("Triangle", function() {

   it("Inicializacion", function() {
        should.exist(new Triangle({width:15, height:15}));
   })
  
   it("Calculo del area triangulo", function() {
        var result = new Triangle({width:15, height:15}).area();
        result.should.equal(112.5);
   })
   
});
      