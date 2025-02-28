# face_recognation

    //this.users = [];
    //atributos

    //adicionar dados no array
    //vector.push({name: 'name', email: 'email', password: 'password'});

    //adicionar dados no inicio do array
    //vector.unshift({name: 'name', email: 'email', password: 'password'});

    //adicionar dados no lugar especifico do array
    //0=add
    //1=substitui
    //vector.splice(0, 1, {name: 'name', email: 'email', password: 'password'});
    //vector.unshift({name: 'name', email: 'email', password: 'password'});

    //modificando dados
    //vector[0].name = 'new name';

    //deletando dados
    //exclui o primeiro
    //vector.shift(); 

    //exclui o ultimo
    //vector.pop();

    //exclui o especifico
    //vector.splice(0, 1);

    //exclui o especifico e adiciona outro
    //vector.splice(0, 1, {name: 'name', email: 'email', password: 'password'});

    //exclui todos
    //vector.splice(0, vector.length);

    //exclui determindado nr apartir de um ponto
    //vector.splice(0, 2);

    //exclui sem reindexar
    //delete vector[0];

    //percorrer um vector de objetos
//foreach
//vector.forEach((vector) => {console.log(vector)});

//map
//adicionar um ponto
//let newVector = vector.map((vector) => {return vector + '.'});

//conversao de sistema de pontos 
/*
let vector = [8,7,2,4,5,6];
NA= nao atendeu (nota <5)
Pa - parcialmente atendeu (nota >=5 e <7)
A - atendeu (nota >=7)

let newVector = vector.map((vector) => {
    if(vector<5){
        return 'NA';
    }else if(vector>7){
        return 'A';
    }else{
        return 'PA';
    }
})
*/
//uso de filtros
    //vector.filter(function(elemento){return elemento.name == "nome"})
    //vector.filter((elemento)=>{return elemento.name === "nome"})

    //order dados pra visualização
    //vector.sort((a,z)=>{return a.name > z.name})
    //vector.sort((a,z)=>{return a.nome.localeCompare(z.nome)})
    //vector.sort((x,y)=>{return (x.idade - y.idade)})

    //map   criar uma copia do array original para exibicao
    //let vector2=[...vector];

    //reduce para acolumar dados
    //let soma =vector.reduce((total,elemento)=>{return total + elemento.idade},0)

    //find para encontrar um elemento
    //let pessoa = vector.find((elemento)=>{return elemento.nome === "nome"})

    //findIndex para encontrar o indice de um elemento
    //let index = vector.findIndex((elemento)=>{return elemento.nome === "nome"})

    //media de idades
    //let media = vector.reduce((total,elemento)=>{return total + elemento.idade},0)/vector.length
   

