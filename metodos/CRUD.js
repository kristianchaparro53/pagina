
var db = require("../conexion/conexion")

exports.guardar = (req,res)=>{

  
const titu = req.body.Titu;
const image = req.body.Image;
const pres = req.body.Pres;

db.query('INSERT INTO contenido (Titulo,Imagen,Descrip) VALUES (?,?,?)',
[titu,image,pres],
(error, resultado)=>{
    if(error){
        console.log(error);
    }
    else{
        res.redirect('/')
    }
});

};

exports.editar = (req,res)=>{
    const ID = req.body.ID;  
    const titu = req.body.Titu;
    const image = req.body.Image;
    const pres = req.body.Pres;
    db.query('UPDATE contenido SET ? WHERE ID=?',
    [{Titulo:titu,Imagen:image,Descrip:pres},ID],
    (error, resultado)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/')
        }
    });
};

exports.auth = (req, res)=>{
    const correo = req.body.correo;
    const pass = req.body.pass;
    if(correo && pass){
        db.query('SELECT * FROM login WHERE correo = ?',[correo],
        function(error,resultado){
            if(resultado.length == 0 || (pass != resultado[0].pass))
            {
                console.log("Usuario Y/O contraseña INCORRECTOS!");
                res.redirect('login')
            }
            else
            {
                console.log("Inicio de Sesión Correcto!");
                res.redirect('agregar')
            }
        });
    }
    else
    {
        console.log("Llena los campos faltantes!!");
        res.redirect('')
        
    }
}