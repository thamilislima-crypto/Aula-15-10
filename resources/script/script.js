let users = ["Pedro", "Ana", "Diego","Joana", "Davi", "Messias", "Cristiano"]

let searchUser = prompt("Digite um nome:")

if (searchUser === "") {
    console.log("Não pode enviar em branco");
}
else {
    let user = users.find(user => user.toLowerCase().includes(searchUser.
        toLowerCase().trim()))
      console.log(user)
    if (!user) {
        console.log("User not found");
        users.push(searchUser.trim());
        console.log(users)
    }
    else {
        console.log("usúario encontrado: ".concat(user));
        let index = users.indexOf(user);
       console.log(index)
        // users.splice(index,3)
         console.log(users)
         users[index] = "Novo valor"
         console.log(users)
    
         users.forEach(element => {
             console.log(element)
         })

    };


}
