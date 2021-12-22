import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import api from "../../services/api";

export default function Filme() {
  const { id } = useParams();
  const history = useNavigate();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      if (response.data.length === 0) {
        //tentou acessar com um ID que nao existe, navega ele para outro local
        history.replace("/");
        return;
      }

      console.log(response.data);
      setFilme(response.data);
      setLoading(false);
    }

    loadFilme();

    return () => {
      console.log("desmontado");
    };
  }, [setFilme, history, id]);

  function salvaFilme() {
    const minhaLista = localStorage.getItem("filmes");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    //se tiver filme salvo com esse id precisa ignorar...
    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );

    if (hasFilme) {
      alert("Voce ja salvou esse filme.");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
    alert('Filme salvo com sucesso!');

  }

  if (loading) {
    return (
      <div className="filme-info">
        <h2>Carregando....</h2>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />

      <h3>Sinopse</h3>
      {filme.sinopse}

      <div>
        <button onClick={salvaFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}
          >
            trailer
          </a>
        </button>
      </div>
    </div>
  );
}
