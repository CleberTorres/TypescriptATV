"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hospital;
(function (Hospital) {
    var funcionario = /** @class */ (function (_super) {
        __extends(funcionario, _super);
        function funcionario() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        funcionario.prototype.getCodFuncionario = function () {
            return this.codFuncionario;
        };
        funcionario.prototype.setCodFuncionario = function (cod) {
            this.codFuncionario = cod;
        };
        return funcionario;
    }(Hospital.pessoa));
    Hospital.funcionario = funcionario;
})(Hospital || (Hospital = {}));
