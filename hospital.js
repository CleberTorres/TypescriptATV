"use strict";
var Hospital;
(function (Hospital_1) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this.enfermeiros = [];
            this.Medicos = [];
            this.Pacientes = [];
        }
        Hospital.prototype.getNome = function () {
            return this.Nome;
        };
        Hospital.prototype.setNome = function (Nome) {
            this.Nome = Nome;
        };
        Hospital.prototype.addEnfermeiro = function (Enfermeiro) {
            this.enfermeiros.push(Enfermeiro);
        };
        Hospital.prototype.getEnfermeiro = function () {
            return this.enfermeiros;
        };
        Hospital.prototype.addMedicos = function (medico) {
            this.Medicos.push(medico);
        };
        Hospital.prototype.getMedicos = function () {
            return this.Medicos;
        };
        Hospital.prototype.addPacientes = function (paciente) {
            this.Pacientes.push(paciente);
        };
        Hospital.prototype.getPacientes = function () {
            return this.Pacientes;
        };
        return Hospital;
    }());
    Hospital_1.Hospital = Hospital;
})(Hospital || (Hospital = {}));
