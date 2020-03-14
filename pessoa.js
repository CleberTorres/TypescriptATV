"use strict";
var Hospital;
(function (Hospital) {
    var pessoa = /** @class */ (function () {
        function pessoa(NomePessoa, CpfPessoa) {
            this.CpfPessoa = CpfPessoa;
            this.NomePessoa = NomePessoa;
        }
        pessoa.prototype.getCpf = function () {
            return this.CpfPessoa;
        };
        pessoa.prototype.getNome = function () {
            return this.NomePessoa;
        };
        pessoa.prototype.setNome = function (NomePessoa) {
            this.NomePessoa = NomePessoa;
        };
        return pessoa;
    }());
    Hospital.pessoa = pessoa;
})(Hospital || (Hospital = {}));
