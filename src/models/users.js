class User {
    constructor(id, nombre, username, email, password) {
        this.id = id;
        this.nombre=nombre
        this.username = username;
        this.email=email
        this.password=password
    }
}

let users=[
    new User(1,'Lara','garcila93','garcia.lafra20@triana.salesianos.edu','1234'),
    new User(2,'Caye', 'caye2000','garcia.macay20@triana.salesianos.edu','5678')
];

const indexOfPorId = (id) => {
    let posicionEncontrado = -1;
    for (let i = 0; i < users.length && posicionEncontrado == -1; i++) {
        if (users[i].id == id)
            posicionEncontrado = i;
    }
    return posicionEncontrado;
}

const emailExists = (email) => {
    let emails = users.map(user => user.email);
    return emails.includes(email);
}

const usernameExists = (username) => {
    let usernames = users.map(user => user.username);
    return usernames.includes(username);
}
const userRepository ={

    findAll(){
        return users;
    },

    findById(id){
        /*let result =users.filter(user => user.id=id);
        return Array.isArray(result) && result.length > 0 ? result[0] : undefined;*/
        const posicion = indexOfPorId(id);
        return posicion == -1 ? undefined : users[posicion];

    },

    create(newUser) {
        const lastId = users.length == 0 ? 0 : users[users.length-1].id;
        const newId = lastId + 1;
        const result = new User(newId, newUser.nombre, newUser.username, newUser.email, newUser.password);
        users.push(result);
        return result;
    },

    updateById(id, modifiedUser) {
        const posicionEncontrado = indexOfPorId(id)
        if (posicionEncontrado != -1) {
            users[posicionEncontrado].username = modifiedUser.username;
        }
        return posicionEncontrado != -1 ? users[posicionEncontrado] : undefined;
    },

    findByUsername(username) {
        let result = users.filter(user => user.username == username);
        return Array.isArray(result) && result.length > 0 ? result[0] : undefined;   
    },

    update(modifiedUser) {
        return this.update(modifiedUser.id, modifiedUser);
    }, 
    
    delete(id) {
        const posicionEncontrado = indexOfPorId(id);
        if (posicionEncontrado != -1)
            users.splice(posicionEncontrado, 1);
    }
}

export {
    User,
    userRepository,
    emailExists
}