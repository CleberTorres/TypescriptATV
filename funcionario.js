"use strict";
var Hospital;
(function (Hospital) {
    var funcionario = /** @class */ (function () {
        function funcionario() {
        }
        funcionario.prototype.getCodFuncionario = function () {
            return this.codFuncionario;
        };
        funcionario.prototype.setCodFuncionario = function (cod) {
            this.codFuncionario = cod;
        };
        return funcionario;
    }());
    Hospital.funcionario = funcionario;
})(Hospital || (Hospital = {}));
