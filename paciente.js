"use strict";
var Hospital;
(function (Hospital) {
    var Paciente = /** @class */ (function () {
        function Paciente() {
        }
        Paciente.prototype.getCodPaciente = function () {
            return this.CodPaciente;
        };
        Paciente.prototype.setCodFuncionario = function (CodPaciente) {
            this.CodPaciente = CodPaciente;
        };
        return Paciente;
    }());
    Hospital.Paciente = Paciente;
})(Hospital || (Hospital = {}));
