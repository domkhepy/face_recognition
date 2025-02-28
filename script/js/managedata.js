class user{

     constructor(name, email, password){
        this.name=name;
        this.email=email;
        this.password=password;
        this.users = [{
            name: "Domingos",
            email: "domkhepy@gmail.com",
            password: "123456"
        },
        {
            name: "Marina",
            email: "marina@gmail.com",
            password: "123456"
        },
          {
            name: "Lissa",
            email: "lissa@gmail.com",
            password: "123456"
          }  ]
    }

    //metodo para registar um utilizador
    register(){
        this.users.push({
            name: this.name, 
            email: this.email, 
            password: this.password
        });
    }

    //metodo para listar todos os utilizadores
    listUsers(){
        console.log(this.users);
    }

    
}