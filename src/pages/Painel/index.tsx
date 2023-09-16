import Calendar from "react-calendar";

import "./style.css"
import 'react-calendar/dist/Calendar.css';
// import Login from './pages/Login'
// import Home from './pages/Home'

// import Grafico from "../../assets/img/grafico-painel.png"
import Resultado from "../../assets/img/demonstrativo.png"

import { useState } from "react";
import MenuLateral from "../../components/MenuLateral";
import Header from "../../components/Header";


function Painel() {


  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [value, onChange] = useState<Value>(new Date());
  return (
    <>
    <MenuLateral/>
      <section className="mainCards">
        <Header/>
        <div className="cards">
          <div className="card critico">
            <div className="card-conten">
              <div className="number">50</div>
              <div className="card-name">Alertas criticos</div>
            </div>
            <div className="icon-box">
              <i className="fas fa-user-graduate" />
            </div>
          </div>
          <div className="card urgentes">
            <div className="card-conten">
              <div className="number">30</div>
              <div className="card-name">Urgentes</div>
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
              <div className="number">20</div>
              <div className="card-name">Concluído</div>
            </div>
            <div className="icon-box">
              <i className="fas fa-users" />
            </div>
          </div>
        </div>

        {/* <div className="testecalendario">
<Calendar onChange={onChange} value={value} />
</div> */}
        <div className="alertas_grafico">
          {/* <img src={ Grafico } alt="btn-user-info" /> */}


          <img src={Resultado} alt="btn-user-info" />
        </div>
      </section>
    </>


  )
}

export default Painel
