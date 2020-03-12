"use strict";
var Hospital;
(function (Hospital) {
    /*PACIENTE p*/
    var p = new Hospital.Paciente("Clebinho DEV", "399.399.399-21");
    p.setCodPaciente(1);
    var p1 = new Hospital.Paciente("bielzinho DEV", "200.311.710-01");
    p.setCodPaciente(2);
    var p2 = new Hospital.Paciente("david ev", "154.349.378-30");
    p.setCodPaciente(3);
    /*FUNCIONARIO f*/
    var f = new Hospital.funcionario("joao nascimento", "001.101.001-24");
    f.setCodFuncionario(11);
    var f1 = new Hospital.funcionario("Joseph augusto", "420.478.279-11");
    f.setCodFuncionario(12);
    var f2 = new Hospital.funcionario("Carlinhos albert", "478.341.309-99");
    f.setCodFuncionario(13);
    /*MÉDICO m*/
    var m = new Hospital.Medico("kaue nascimento", "001.101.001-24");
    f.setCodFuncionario(21);
    var m1 = new Hospital.Medico("marcos nascimento", "001.101.001-24");
    f.setCodFuncionario(22);
    var m2 = new Hospital.Medico("Julieta nascimento", "001.101.001-24");
    f.setCodFuncionario(23);
    /*ENFERMEIRO e*/
    var e = new Hospital.Enfermeiro("kimberly", "001.101.001-24");
    f.setCodFuncionario(31);
    var e1 = new Hospital.Enfermeiro("josefino", "001.101.001-24");
    f.setCodFuncionario(31);
    var e2 = new Hospital.Enfermeiro("carlos augusto", "001.101.001-24");
    f.setCodFuncionario(31);
})(Hospital || (Hospital = {}));
