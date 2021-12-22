import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './favoritos.css';
import {toast} from 'react-toastify';

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("filmes");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []); //adiciona o colchete vazio para o useEffect renderizar a pagina 1 vez


function handleDelete(id){
    let filtroFilmes = filmes.filter((item)=>{
        return (item.id !== id)
    })

    setFilmes(filtroFilmes);
    localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
    toast.success('Filme excluido com sucesso!');
}

  return (
    <div id="menu-filmes">
      <h2>Filmes Favoritos</h2>
{filmes.length === 0 && <span>Voce nao possui filme salvo!</span>}
      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.nome}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={()=> handleDelete(item.id) }>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
