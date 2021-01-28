import { User, userRepository } from './users';
import {Song} from './song'

class Playlists{
    songs=[
        new Song=(1,'titulo1','artista1','album1','año1'),
        new Song=(2,'titulo2','artista2','album2','año2')
    ]
    constructor(id,nombre, descripcion, user_id, songs){
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.user_id=user_id;
        this.songs=songs
    }
}

const indexOfPorId = (id) => {
    let posicionEncontrado = -1;
    for (let i = 0; i < songs.length && posicionEncontrado == -1; i++) {
        if (songs[i].id == id)
            posicionEncontrado = i;
    }
    return posicionEncontrado;
}

const playlistRepository = {

    findAll : () => songs.map(song => {
        post.author = userRepository.findById(post.user_id).toDto()
        return post;
    }),
    findById : (id) => {
        const index = indexOfPorId(id);
        if (index != -1) {
            const post = posts[index];
            post.author = userRepository.findById(post.user_id).toDto();
        } else
            return undefined;
    },
    create : (newPost) => {
        const lastId = posts.length == 0 ? 0 : posts[posts.length-1].id;
        const newId = lastId + 1;
        const result = new Post(newPost.user_id, newPost.title, newPost.text, newId);
        posts.push(result);
        result.author = userRepository.findById(result.user_id).toDto();
        return result;
    }

}

export{
    Playlists
}