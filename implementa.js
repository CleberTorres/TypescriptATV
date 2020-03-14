"use strict";
var Hospital;
(function (Hospital) {
    /*PACIENTE p*/
    var p = new Hospital.Paciente("Clebinho DEV", "399.399.399-21");
    p.setCodPaciente(1);
    var p1 = new Hospital.Paciente("Bielzinho DEV", "200.311.710-01");
    p1.setCodPaciente(2);
    var p2 = new Hospital.Paciente("David ev", "154.349.378-30");
    p2.setCodPaciente(3);
    /*FUNCIONARIO f*/
    var f = new Hospital.Funcionario("João nascimento", "001.101.001-24");
    f.setCodFuncionario(11);
    var f1 = new Hospital.Funcionario("Joseph augusto", "420.478.279-11");
    f.setCodFuncionario(12);
    var f2 = new Hospital.Funcionario("Carlinhos albert", "478.341.309-99");
    f.setCodFuncionario(13);
    /*MÉDICO m*/
    var m = new Hospital.Medico("Kaue Nascimento", "001.101.001-24");
    m.setCodFuncionario(21);
    m.setcrm(147);
    m.setespecialidade("Pediatra");
    var m1 = new Hospital.Medico("Marcos Nascimento", "001.101.001-24");
    m1.setCodFuncionario(22);
    m1.setcrm(107);
    m1.setespecialidade("Clinico Geral");
    var m2 = new Hospital.Medico("Julieta nascimento", "001.101.001-24");
    m2.setCodFuncionario(23);
    m2.setcrm(17);
    m2.setespecialidade("Ajudante Geral");
    /*ENFERMEIRO e*/
    var e = new Hospital.Enfermeiro("kimberly", "001.101.001-24");
    e.setCodFuncionario(31);
    e.setCoren(121);
    var e1 = new Hospital.Enfermeiro("Josefino", "001.101.001-24");
    e1.setCodFuncionario(31);
    e1.setCoren(113);
    var e2 = new Hospital.Enfermeiro("Carlos Augusto", "001.101.001-24");
    e2.setCodFuncionario(31);
    e2.setCoren(122);
    /*HOSPITAL*/
    var h = new Hospital.Hospital();
    h.setNome("Hospital George Castor");
    h.addEnfermeiro(e);
    h.addEnfermeiro(e1);
    h.addEnfermeiro(e2);
    h.addMedicos(m);
    h.addMedicos(m1);
    h.addMedicos(m2);
    h.addPacientes(p);
    h.addPacientes(p1);
    h.addPacientes(p2);
    document.getElementById("hospital").textContent = h.getNome();
    var tbMedico = document.getElementById("Medico");
    h.getMedicos().forEach(function (h) {
        var Nome = h.getNome();
        var id = h.getCodFuncionario();
        var cpf = h.getCpf();
        var crm = h.getcrm();
        var especialidade = h.getespecialidade();
        var html = "<tr><td>" + id + "</td><td>" + Nome + "</td><td>" + cpf + "</td><td>" + especialidade + "</td><td>" + crm + "</td></tr>";
        tbMedico.innerHTML += html;
    });
    var tbEnfermeiro = document.getElementById("Enfermeiro");
    h.getEnfermeiro().forEach(function (h) {
        var id = h.getCodFuncionario();
        var Nome = h.getNome();
        var Cpf = h.getCpf();
        var coren = h.getCoren();
        var html = "<tr><td>" + id + "</td><td>" + Nome + "</td><td>" + Cpf + "</td><td>" + coren + "</td></tr>";
        tbEnfermeiro.innerHTML += html;
    });
    var tbPacientes = document.getElementById("Pacientes");
    h.getPacientes().forEach(function (h) {
        var id = h.getCodPaciente();
        var Nome = h.getNome();
        var cpf = h.getCpf();
        var html = "<tr><td>" + id + "</td><td>" + Nome + "</td><td>" + cpf + "</td></tr>";
        tbPacientes.innerHTML += html;
    });
})(Hospital || (Hospital = {}));
