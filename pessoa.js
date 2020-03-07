"use strict";
var Hospital;
(function (Hospital) {
    var pessoa = /** @class */ (function () {
        function pessoa(NomePessoa, Cpfpessoa) {
            this.CpfPessoa;
            this.NomePessoa;
        }
        pessoa.prototype.getNomePessoa = function () {
            return this.NomePessoa;
        };
        pessoa.prototype.setNomePessoa = function (nome) {
            this.NomePessoa;
        };
        pessoa.prototype.getCpfPessoa = function () {
            return this.CpfPessoa;
        };
        pessoa.prototype.setCpfPessoa = function (Cpf) {
            this.CpfPessoa = Cpf;
        };
        return pessoa;
    }());
    Hospital.pessoa = pessoa;
})(Hospital || (Hospital = {}));
