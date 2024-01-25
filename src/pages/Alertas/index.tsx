import "../../pages/Alertas/stylealertas.css"
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuLateral from "../../components/MenuLateral";
import Header from "../../components/Header";
//import { useState } from "react";


function Alertas() {
  const [linhasVisiveis, setLinhasVisiveis] = useState({});
  const [expressao, setExpressao] = useState('');

  useEffect(() => {
    const handleKeyUp = () => {
      const expressaoLowerCase = expressao.toLowerCase();

      if (expressaoLowerCase.length === 1) {
        return;
      }

      // const linhas = document.getElementById('tabela-alertas')?.getElementsByTagName('tr');
      const linhas = document.querySelectorAll('#tabela-alertas tr');

      // if( linhas != undefined ){

        linhas.forEach((linha, posicao) => {
          const conteudoDaLinha = linha.innerHTML.toLowerCase();
  
          if (conteudoDaLinha.includes(expressaoLowerCase)) {
            setLinhasVisiveis((prev) => ({ ...prev, [posicao]: true }));
            linhas[posicao].style.display = ``
            
          } else {
            setLinhasVisiveis((prev) => ({ ...prev, [posicao]: false }));
            linhas[posicao].style.display = `none`
          }
        });
      // }

    };

    const inputBusca = document.getElementById('inputBusca');
    inputBusca.addEventListener('keyup', handleKeyUp);

    // Remover o evento quando o componente for desmontado
    return () => {
      inputBusca.removeEventListener('keyup', handleKeyUp);
    };
  }, [expressao]);

  return (
    <>
    <MenuLateral />
      <section className="mainCards">
      <Header />
        <div className="cards">
          <div className="card critico" >
            <div className="card-conten">
              <div className="number">50</div>
              <div className="card-name">Críticos</div>
            </div>
            <div className="icon-box">
              <i className="fas fa-user-graduate" />
            </div>
          </div>
          <div className="card urgentes">
          
           
              <div className="number">30</div>
              <div className="card-name">Urgentes 
            <div className="card-conten" ></div>
            </div>
            <div className="icon-box">
              <i className="fas fa-chalkboard-teacher" />
            </div>
          </div>
          <div className="card normais">
            <div className="card-conten">
              <div className="number">20</div>
              <div className="card-name">Normais</div>
            </div>
            <div className="icon-box">
              <i className="fas fa-users" />
            </div>
          </div>
          <div className="card concluido">
            <div className="card-conten">
              <div className="number">25</div>
              <div className="card-name">Concluído</div>
            </div>
            <div className="icon-box">
              <i className="fas fa-users" />
            </div>
          </div>
        </div>
       
   <div className="card card-body mt-5">
    <h1>Gerenciamento de Alertas</h1>
  <input
    id="inputBusca"
    type="text"
    className="form-control mt-3 mb-3"
    placeholder="O que você procura?"
    value={expressao}
    onChange={(e) => setExpressao(e.target.value)}
  />
  <table className="table table-hover table-striped">
    <thead className="table-dark">
      <tr>
        <th>Prioridade</th>
        <th>Nível criticidade</th>
        <th>Data</th>
        <th>Status</th>
        <th>Descrição</th>
        <th>ID_ERRO</th>
      </tr>
    </thead>
    <tbody id="tabela-alertas">
      <tr >
        <td>Urgente</td>
        <td>1</td>
        <td>12/05/2023</td>
        <td>Erro na planta taubate</td>
        <td>K8LL-TGB</td>
        <td>K8LL-TGB</td>
      </tr>
      <tr >
        <td>Normais</td>
        <td>2</td>
        <td>12/05/2023</td>
        <td>Erro na planta taubate</td>
        <td>K8LL-TGB</td>
        <td>K8LL-TGB</td>
      </tr>
      <tr>
        <td>Críticos</td>
        <td>3</td>
        <td>12/05/2023</td>
        <td>Erro na planta taubate</td>
        <td>K8LL-TGB</td>
        <td>K8LL-TGB</td>
      </tr>
      <tr>
        <td>Urgente</td>
        <td>4</td>
        <td>12/05/2023</td>
        <td>Erro na planta taubate</td>
        <td>K8LL-TGB</td>
        <td>K8LL-TGB</td>
      </tr>
    </tbody>
  </table>
  </div>
      </section>
</>
  )
}

export default Alertas;