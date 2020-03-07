"use strict";
var Hospital;
(function (Hospital) {
    var Enfermeiro = /** @class */ (function () {
        function Enfermeiro() {
        }
        Enfermeiro.prototype.getCoren = function () {
            return this.coren;
        };
        Enfermeiro.prototype.setCoren = function (coren) {
            this.coren = coren;
        };
        return Enfermeiro;
    }());
    Hospital.Enfermeiro = Enfermeiro;
})(Hospital || (Hospital = {}));
