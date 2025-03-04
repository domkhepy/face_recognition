class user{

     constructor(users){
        this.users = [...users]
    }

    //metodo para registar um utilizador
    register(name, email, password, image){
        this.users.push({
            name: name, 
            email: email, 
            password: password,
            image: image
        });
    }

    getusers(){ 
        return this.users;
    }

    
}