"use strict";
var Hospital;
(function (Hospital) {
    var Medico = /** @class */ (function () {
        function Medico() {
        }
        Medico.prototype.getcrm = function () {
            return this.crm;
        };
        Medico.prototype.setcrm = function (crm) {
            this.crm = crm;
        };
        Medico.prototype.getespecialidade = function () {
            return this.especialidade;
        };
        Medico.prototype.setespecialidade = function (especialidade) {
            this.especialidade = especialidade;
        };
        return Medico;
    }());
    Hospital.Medico = Medico;
})(Hospital || (Hospital = {}));
