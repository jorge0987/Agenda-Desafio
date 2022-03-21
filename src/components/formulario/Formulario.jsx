import React from "react";
import shortid from "shortid";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  border-radius: 5px;
`;
const ButtonSalvar = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 8px 0;
  display: flex;
  width: 10rem;
  justify-content: center;
  align-items: center;
`;
const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const Formulario = () => {
  const [id, setId] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [modoEdicion, setModoEdicion] = React.useState(false);

  const [datos, setDatos] = React.useState([]);

  const guardarDatos = (e) => {
    e.preventDefault();
console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
    console.log( datos );
     
    if (!nome.trim()) {
      console.log("Digite um nome valido");
      return;
    }
    if (!email.trim()) {
      console.log("digite um email valido");
      return;
    }
    if (!telefone.trim()) {
      console.log("digite um numero valido");
      return;
    }
    if (!idade.trim()) {
      console.log("digite uma idade valida");
      return;
    }
    //Envia datos ala base de datos
    if (modoEdicion) {
      datos.filter((e) => {
        if (e.id === id) {
          e.Nome = nome;
          e.Email = email;
          e.Telefone = telefone;
          e.Idade = idade;
        }
      });
    } else {
      setDatos([
        ...datos,
        {
          id: shortid.generate(),
          Nome: nome,
          Email: email,
          Telefone: telefone,
          Idade: idade,
        },
      ]);
    }

    let items = datos;

      items.sort(function (a, b) {
       return parseFloat(a.Nome) - parseFloat(b.Nome);
       
      });
        console.log(items);

    setModoEdicion(false);

    e.target.reset();
    setNome("");
    setEmail("");
    setIdade("");
    setTelefone("");
    setId("");
  };
    

  //Elimina os tal contato salvo
  const eliminarContacto = (id) => {
    //console.log(id);
    const arrayFiltrado = datos.filter((item) => item.id !== id);
    setDatos(arrayFiltrado);
  };

  //Editar os contatos

  const editar = (item) => {
    setModoEdicion(true);
    setNome(item.Nome);
    setEmail(item.Email);
    setTelefone(item.Telefone);
    setIdade(item.Idade);
    setId(item.id);
    setModoEdicion(true);
  };

  return (
    <>
      <Form onSubmit={guardarDatos}>
        <Input
          type="text"
          placeholder="digite um email valido."
          className="form-control mb-2 "
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
        <Input
          type="email"
          placeholder="digite um email valido."
          className="form-control mb-2 "
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="text"
          placeholder="digite um numero valido."
          className="form-control mb-2 "
          onChange={(e) => setTelefone(e.target.value)}
          value={telefone}
        />
        <Input
          type="number"
          placeholder="digite uma idade valida."
          className="form-control mb-2 "
          onChange={(e) => setIdade(e.target.value)}
          value={idade}
          
        />
        <ButtonSalvar   type="submit" className="btn btn-primary btn-block">
          Guardar
        </ButtonSalvar>
      </Form>
      <br />

      <Lista>
        {datos.map((item) => (
          <li className="card-block card " key={item.id}>
            <h1 className="lead  card-header" id="tituloCard">
              {item.Nome} {item.Apellido}
            </h1>
            <div className="card-body">
              <p>
                <strong>Email:</strong> {item.Email}
              </p>
              <p>
                <strong>Telefone:</strong> {item.Telefone}
              </p>
              <p>
                <strong>Numero:</strong> {item.Idade}
              </p>

              <button
                className="btn btn-danger text-center m-1"
                onClick={() => eliminarContacto(item.id)}
              >
                Eliminar
              </button>
              <button
                className="btn btn-danger text-center m-1"
                onClick={() => editar(item)}
              >
                Editar
              </button>
            </div>
            <br />
          </li>
        ))}
      </Lista>
    </>
  );
};

export default Formulario;
