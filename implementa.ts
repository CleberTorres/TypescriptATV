namespace Hospital{

    /*PACIENTE p*/
    
    let p = new Paciente("Clebinho DEV","399.399.399-21");
    p.setCodPaciente(1);
    
    let p1 = new Paciente("Bielzinho DEV","200.311.710-01");
    p1.setCodPaciente(2);
    
    let p2 = new Paciente("David ev","154.349.378-30");
    p2.setCodPaciente(3);

    /*FUNCIONARIO f*/
    
      let f = new Funcionario("João nascimento","001.101.001-24");
             f.setCodFuncionario(11);
   
      let f1 = new Funcionario("Joseph augusto","420.478.279-11");
            f.setCodFuncionario(12);
   
      let f2 = new Funcionario("Carlinhos albert","478.341.309-99");
            f.setCodFuncionario(13);

    /*MÉDICO m*/
   
       let m = new Medico("Kaue Nascimento","001.101.001-24");
            m.setCodFuncionario(21);
            m.setcrm(147);
            m.setespecialidade("Pediatra");
        
       let m1 = new Medico("Marcos Nascimento","001.101.001-24");
            m1.setCodFuncionario(22);
            m1.setcrm(107);
            m1.setespecialidade("Clinico Geral");
        
       let m2 = new Medico("Julieta nascimento","001.101.001-24");
            m2.setCodFuncionario(23);
            m2.setcrm(17);
            m2.setespecialidade("Ajudante Geral");
    
    /*ENFERMEIRO e*/
    
        let e = new Enfermeiro("kimberly","001.101.001-24");
            e.setCodFuncionario(31);
            e.setCoren(121);
        
        let e1 = new Enfermeiro("Josefino","001.101.001-24");
            e1.setCodFuncionario(31);
            e1.setCoren(113);
        
       let e2 = new Enfermeiro("Carlos Augusto","001.101.001-24");
            e2.setCodFuncionario(31);
            e2.setCoren(122);

        /*HOSPITAL*/ 

        let h = new Hospital();
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

        document.getElementById("hospital").textContent=h.getNome();
            
        let tbMedico = document.getElementById("Medico");

        h.getMedicos().forEach(h=>{
            let Nome = h.getNome();
            let id = h.getCodFuncionario();
            let cpf = h.getCpf();
            let crm = h.getcrm();
            let especialidade = h.getespecialidade();
            let html = "<tr><td>"+id+"</td><td>"+Nome+"</td><td>"+cpf+"</td><td>"+especialidade+"</td><td>"+crm+"</td></tr>";
             tbMedico.innerHTML += html;
        }) 
         let tbEnfermeiro = document.getElementById("Enfermeiro");
        h.getEnfermeiro().forEach(h=>{
            let id = h.getCodFuncionario();
            let Nome = h.getNome();  
            let Cpf = h.getCpf();
            let coren = h.getCoren();
            let html = "<tr><td>"+id+"</td><td>"+Nome+"</td><td>"+Cpf+"</td><td>"+coren+"</td></tr>";
            tbEnfermeiro.innerHTML += html;
        })
   let tbPacientes = document.getElementById("Pacientes");
         h.getPacientes().forEach(h=>{
            let id = h.getCodPaciente();
            let Nome = h.getNome();  
            let cpf = h.getCpf();
            let html = "<tr><td>"+id+"</td><td>"+Nome+"</td><td>"+cpf+"</td></tr>";
            tbPacientes.innerHTML += html;
        }) 
}