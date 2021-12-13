import { useEffect, useState } from "react";
import api from "../../services/api";

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("r-api/?api=filmes");
      console.log(response.data);
    }
    loadFilmes();
  }, []);
  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) =>{
          return(
            <article key={filmes.id}>
            
            </article>
          )
        })}
        
      </div>
    </div>
  );
}

export default Home;
