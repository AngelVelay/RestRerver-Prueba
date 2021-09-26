const usuariosGet = (req, res) => {

    const {q,nombre='No name',apikey} = req.query;

    res.json({
        msg: 'Peticion GET - Contolador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res) => {

    const {id} = req.params;

    res.json({
        msg: 'Peticion PUT - Contolador',
        id
    });
}

const usuariosPost = (req, res) => {

    const {nombre,edad,id} = req.body;
    res.json({
        msg: 'Peticion POST - Contolador',
        nombre,
        edad,
        id
    });
    
}

const usuariosDelete = (req, res) => {

    res.json({
        msg: 'Peticion DELETE - Contolador'
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}