class user{

     constructor(users){
        this.users = [...users]
    }

    //metodo para registar um utilizador
    register(name, email, password){
        this.users.push({
            name: name, 
            email: email, 
            password: password
        });
    }

    getusers(){ 
        return this.users;
    }

    //metodo para listar todos os utilizadores
    listUsers(){
        console.log(this.users);
    }

    
}