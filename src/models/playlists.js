class Playlists{
    songs=[]
    constructor(id,nombre, descripcion, user_id, songs){
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.user_id=user_id;
        this.songs=songs
    }
}

export{
    Playlists
}