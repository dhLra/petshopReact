const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "petshop"
});

/*
app.get("/", (req,res) =>{
  let SQL = "INSERT INTO pets (nome_pet, raca_pet, idade_pet ,tipo_pet, nome_dono, telefone_dono, endereco_dono) VALUES ('bob', 'pinxer', '120', 'cachorro', 'vera', '8181', 'testeend')";

  db.query(SQL, (err, result) =>{
    console.log(err);
  })
});
*/

app.use(cors());
app.use(express.json());

app.post("/sucesso", (req, res) => {
  const { nome_pet } = req.body;
  const { raca_pet } = req.body;
  const { idade_pet } = req.body;
  const { tipo_pet } = req.body
  const { nome_dono } = req.body;
  const { telefone_dono } = req.body;
  const { endereco_dono } = req.body;

  let SQL = "INSERT INTO pets (nome_pet, raca_pet, idade_pet ,tipo_pet, nome_dono, telefone_dono, endereco_dono) VALUES (?,?,?,?,?,?,?)";

  db.query(SQL, [nome_pet, raca_pet, idade_pet, tipo_pet, nome_dono, telefone_dono, endereco_dono], (err, result) => {
    if (err)
      console.log(err)
  });
});

app.get("/consultar", (req, res) => {

  let SQL = "SELECT * FROM pets";

  db.query(SQL, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result);
    }
  })
})

app.get("/editar/:id", (req, res) => {

  const { id } = req.params;

  let SQL = "SELECT * FROM pets WHERE id = ?";

  db.query(SQL, [id],  (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result);
    }
  })
})

app.put("/editado", (req, res) => {

  const { id } = req.body;
  const { nome_pet } = req.body;
  const { raca_pet } = req.body;
  const { idade_pet } = req.body;
  const { tipo_pet } = req.body;
  const { nome_dono } = req.body;
  const { telefone_dono } = req.body;
  const { endereco_dono } = req.body;

  let SQL = 'UPDATE `pets` SET `nome_pet` = ?, `raca_pet` = ?, `idade_pet` = ?, `tipo_pet` = ?, `nome_dono` = ?, `telefone_dono` = ?, `endereco_dono` = ? WHERE `id` = ?';


  db.query(SQL, [nome_pet, raca_pet, idade_pet, tipo_pet, nome_dono, telefone_dono, endereco_dono, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(id)
      console.log(nome_dono)
      console.log(raca_pet)
      console.log(idade_pet)
      console.log(tipo_pet)
      console.log(nome_dono)
      console.log(telefone_dono)
      console.log(endereco_dono)
    }
  })
})

app.delete("/excluido/:id", (req, res) => {
  const { id } = req.params

  let SQL = "DELETE FROM pets WHERE id = ?"

  db.query(SQL, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})

app.listen(3001, () => {
  console.log("Rodando server");
});