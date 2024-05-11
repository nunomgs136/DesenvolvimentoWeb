require('colors');
var http  = require('http');
var express = require('express');
var bodyParser = require('body-parser');
const { render } = require('ejs');
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://nunomgs:patrizialauanda123@slayana.dcuuxz5.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

var app = express()
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'))
var server =http.createServer(app)




server.listen(80)

console.log("Servidor rodando ...".rainbow)

app.post("/cadastrar_usuario", function(req, resp) {

    // realiza conexão com banco de dados
    client.connect((err) => {
        // salva dados no banco
        client.db("exemplo_bd").collection("usuarios").insertOne(
            { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha }, function (err) {
                if (err) {
                    resp.render('resposta', {resposta: "Erro ao cadastrar usuário!"})
                }else {
                    resp.render('resposta', {resposta: "Usuário cadastrado com sucesso!"})
                };
            });
    });

});


app.post("/logar_usuario", function(req, resp) {

    // realiza conexão com banco de dados
    client.connect((err) => {
        // busca um usuário no banco de dados
        client.db("exemplo_bd").collection("usuarios").find(
            {db_login: req.body.login, db_senha: req.body.senha }).toArray(function(err, items) {
            console.log(items);
            if (items.length == 0) {
                resp.render('resposta', {resposta: "Usuário/senha não encontrado!"})
            }else if (err) {
                resp.render('resposta', {resposta: "Erro ao logar usuário!"})
            }else {
                resp.render('resposta', {resposta: "Usuário logado com sucesso!"})
            };
        });
    });

});


app.get("/listar_usuarios", function(req, resp) {

    client.connect((err) => {
        // busca todos os usuarios no banco de dados
        client
            .db("exemplo_bd")
            .collection("usuarios")
            .find().toArray(function(err, items) {
            // renderiza a resposta para o navegador
            resp.render("lista_usuarios", { usuarios: items });
        });
    });

});


app.post("/atualizar_usuario", function(req, resp) {

    // realiza conexão com banco de dados
    client.connect((err) => {
        // atualiza senha do usuário
        client.db("exemplo_bd").collection("usuarios").updateOne(
            { db_login: req.body.login, db_senha: req.body.senha },
            { $set: {db_senha: req.body.novasenha} }, function (err, result) {
                console.log(result);
                if (result.modifiedCount == 0) {
                    resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
                }else if (err) {
                    resp.render('resposta_usuario', {resposta: "Erro ao atualizar usuário!"})
                }else {
                    resp.render('resposta_usuario', {resposta: "Usuário atualizado com sucesso!"})
                };
            });
    });

});


app.post("/remover_usuario", function(req, resp) {

    // realiza conexão com banco de dados
    client.connect((err) => {

        // remove do usuário
        client.db("exemplo_bd").collection("usuarios").deleteOne(
            { db_login: req.body.login, db_senha: req.body.senha } , function (err, result) {
                console.log(result);
                if (result.deletedCount == 0) {
                    resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
                }else if (err) {
                    resp.render('resposta_usuario', {resposta: "Erro ao remover usuário!"})
                }else {
                    resp.render('resposta_usuario', {resposta: "Usuário removido com sucesso!"})
                };
            });
    });
});

app.get('/', function(req, resp){
    resp.redirect('Projects.html')
})
app.get('/cadastra',function(req,resp){
    resp.redirect('Get-Post-Template/Cadastro.html');
})
app.get('/login',function(req,resp){
    resp.redirect('Get-Post-Template/Login.html')
})

app.post('/logado',function(req,resp){
    // let login = req.body.login_cadastro;
    // let senha = req.body.senha_cadastro;
    var login_senha = req.body.login_usuario;
    var senha_login = req.body.senha_entrar;
    if( login === login_senha && senha === senha_login){
        resp.render('resultadopositivo',{login_senha,senha_login})
    }
    else{
        console.log(login_senha,senha_login);
        resp.render('resultadonegativo',{login_senha,senha_login})
    }
})
app.get('/criar',function(req,resp){
    resp.redirect('Create_e_Read/criarpost.html')
})
app.post('/salvar_post',function(req,resp){
    client.connect((err) => {

        client.db("exemplo_bd").collection("posts").insertOne(
            { db_titulo: req.body.titulo, db_descricao: req.body.descricao, db_conteudo: req.body.conteudo }, function (err) {
                if (err) {
                    resp.render('resposta', {resposta: "Erro ao criar post :("})
                }else {
                    resp.render('resposta', {resposta: "Post criado com sucesso!"})
                };
            });
    });

}
)
app.get('/posts',function(req,resp){
    client.connect((err) => {

        client
            .db("exemplo_bd")
            .collection("posts")
            .find().toArray(function(err, items) {

            resp.render("posts", { posts: items });
        });
    });
});
app.post('/logar',function(req,resp){

})
app.post('/cadastrar_vendedores',function(req,resp){
    client.connect((err) => {
        // salva dados no banco
        client.db('site_de_carros').collection("vendedores").insertOne(
            { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha }, function (err) {
                if (err) {
                    resp.render('resposta_cadastro', {resposta: "Erro ao cadastrar usuário!"})
                }else {
                    resp.render('resposta_cadastro', {resposta: "Usuário cadastrado com sucesso!"})
                };
            });
    });
})
app.post('/logar_vendedores',function(req,resp){
    client.connect((err) => {
        // busca um usuário no banco de dados
        client.db("site_de_carros").collection("vendedores").find(
            {db_login: req.body.login_usuario, db_senha: req.body.senha_entrar }).toArray(function(err, items) {
            console.log(items);
            if (items.length == 0) {
                resp.render('resposta_login', {resposta: "Usuário/senha não encontrado!"})
            }else if (err) {
                resp.render('resposta_login', {resposta: "Erro ao logar usuário!"})
            }else {
                resp.redirect('/carros')
            };
        });
    });
});
app.post('/cadastrar_carros',function(req,resp){
    client.connect((err) => {
        // salva dados no banco
        client.db('site_de_carros').collection("carros").insertOne(
            { db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano, db_qtde: req.body.qtde }, function (err) {
                if (err) {
                    resp.render('resposta_cadastro', {resposta: "Erro ao cadastrar carro!"})
                }else {
                    resp.render('resposta_cadastro', {resposta: "Carro cadastrado com sucesso!"})
                };
            });
    });
})
app.get('/carros',function(req,resp){
    client.connect((err) => {

        client
            .db("exemplo_bd")
            .collection("carros")
            .find().toArray(function(err, items) {

            resp.render("carros", { carros: items });
        });
    });
})