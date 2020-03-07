"use strict";
var Hospital;
(function (Hospital_1) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this.Enfermeiros = [];
            this.Medicos = [];
            this.Pacientes = [];
        }
        Hospital.prototype.getNome = function () {
            return this.Nome;
        };
        Hospital.prototype.setNome = function (Nome) {
            this.Nome = Nome;
        };
        Hospital.prototype.getEnfermeiro = function () {
            return this.Enfermeiro;
        };
        Hospital.prototype.addNome = function (Enfermeiro) {
            this.Enfermeiros.push(Enfermeiro);
        };
        return Hospital;
    }());
    Hospital_1.Hospital = Hospital;
})(Hospital || (Hospital = {}));
