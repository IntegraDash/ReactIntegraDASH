import './style.css'
import LogoMobile from "../../assets/img/logo_mobile.png"
import LogoEscuro from "../../assets/img/logo_escuro.png"
import Zoio from "../../assets/img/zoio.png"
import Rodape from "../../assets/img/rodape_desenv.png"
import FundoDestok from "../../assets/img/fundo_destok.png"
import { Link} from 'react-router-dom'






function Restauracao() {


  return (
    <>
      <section className="restauracao_paginatotal">
        <div className="restauracao_quadrado_branco">
          {/* <div class="alinhamento_login"> */}
          <img
            className="restauracao_Logo_Integradash"
            src={LogoEscuro}
            alt="Logo da Instegradash Fundo Claro"
          />
          <img
            className="Logo_Claro"
            src={LogoMobile}
            alt="Logo da Instegradash Fundo Escuro"
          />
          <div className="restauracao_teste1">
            <h1>Recuperacao de conta</h1>
            <form className="restauracao_alinhamento_input" action="login">
              <label className="restauracao_negrito" htmlFor="email">
                Insira o seu email
              </label>
              <div className="restauracao_zoinho">
                <input
                  className="restauracao_senha"
                  id="email"
                  type="email"
                  name="Senha"
                  placeholder="nome@gmail.com"
                />
                <img
                  className="restauracao_zoio"
                  src={Zoio}
                  alt="mostrar - ocultar password"
                />
              </div>
              <Link to={"/recuperacao"} className="restauracao_botao_entrar">Enviar</Link>
            </form>
          </div>
          <div>
            <img
              className="restauracao_desenvolvido_por"
              src={Rodape}
              alt="Desenvolvido por Integradash"
            />
          </div>
        </div>
        <section className="restauracao_pagina_metade1">
          <div>
            <img
              className="restauracao_rapaz_dashboard"
              src={FundoDestok}
              alt="Rapaz em frente a um Dashboard apontando pra ele"
            />
          </div>
        </section>
      </section>
      <section className="restauracao_responsivo">
        <div className="restauracao_quadrado_branco_responsivo">
          {/* <div class="alinhamento_login"> */}
          <img
            className="restauracao_Logo_Integradash"
            src={LogoEscuro}
            alt="Logo da Instegradash Fundo Claro"
          />
          <img
            className="restauracao_Logo_Claro"
            src={LogoMobile}
            alt="Logo da Instegradash Fundo Escuro"
          />
          <div className="restauracao_teste1">
            <h1>Recuperacao de conta</h1>
            <form className="restauracao_alinhamento_input" action="login">
              <label className="restauracao_negrito" htmlFor="email">
                Insira o seu email
              </label>
              <div className="restauracao_zoinho">
                <input
                  className="restauracao_senha"
                  id="senha"
                  type="password"
                  name="Senha"
                  placeholder="nome@gmail.com"
                />
                <img
                  className="restauracao_zoio"
                  src={Zoio}
                  alt="mostrar - ocultar password"
                />
              </div>
              <button className="restauracao_botao_entrar">Enviar</button>
            </form>
          </div>
          <div>
            <img
              className="restauracao_desenvolvido_por"
              src={Rodape}
              alt="Desenvolvido por Integradash"
            />
          </div>
        </div>
        <section className="restauracao_pagina_metade1">
          <div className="restauracao_rapaz_dashboard">
            <img
              src={FundoDestok}
              alt="Rapaz em frente a um Dashboard apontando pra ele"
            />
          </div>
        </section>
      </section>


    </>



  )

}
export default Restauracao