"use strict"

/*
     Se require el paquete que contiene la clase Shape.
*/
var nuevo = require('ull-shape-lucas-ivan-miguel-jairo');
var Shape = nuevo.Shape

 /**
 * Clase para representar un Triángulo que es de tipo Shape.
 *
 * @param {object} options Bloque de código.
 * @param {width} options.width Anchura de la figura.
 * @param {height} options.height Altura de la figura.
 */
class Triangle extends Shape{
    
        constructor(options){
            super(options); 
        }
        /* @param {function?} done Callback function to execute when finished.*/
        area(){
           var area = .5 * this.width * this.height;
           return area;
        }
}



Shape.tipo.Triangle = Triangle;

module.exports = { Triangle: Triangle};

