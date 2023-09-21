
import './style.css'

import logoIntegraDash from "../../assets/img/logointegradash_fundoclaro.png"
import logoCompleto from "../../assets/img/Integrdash logo completo D logo f escuro.png"
import desenvolvido from "../../assets/img/DESENVOLVIDO POR CERTO.png"
import group36 from "../../assets/img/Group 36-1.png"

function Recuperacao() {

  return (


<>
  <section className="paginatotal">
    <div className="quadrado_branco">
      {/* <div class="alinhamento_login"> */}
      <img
        className="recuperacao_Logo_Integradash"
        src={logoIntegraDash}
        alt="Logo da Instegradash Fundo Claro"
      />
      <img
        className="Logo_Claro"
        src={logoCompleto}
        alt="Logo da Instegradash Fundo Escuro"
      />
      <div className="recuperacao_teste1">
        <h1>Recuperação de conta</h1>
        <form className="alinhamento_input" action="login">
          {/* <label class="negrito" for="email">Insira o seu email</label> */}
          <h2>Pronto. Verifique o seu email e faça a redefinição de senha.</h2>
          <div className="zoinho">
            {/* <input class="senha" id="senha" type="password" name="Senha" id="Senha" placeholder="nome@gmail.com">
                      <img class="zoio" src="img/zoio.png" alt="mostrar - ocultar password">
                       */}
          </div>
          <button className="botao_entrar">Voltar</button>
        </form>
      </div>
      <div>
        <img
          className="recuperacao_desenvolvido_por"
          src={desenvolvido}
          alt="Desenvolvido por Integradash"
        />
      </div>
    </div>
    <section className="recuperação_pagina_metade1">
      <div className="recuperacao_rapaz_dashboard">
        <img
          
          src={group36}
          alt="Rapaz em frente a um Dashboard apontando pra ele"
        />
      </div>
    </section>
  </section>
</>

  )
}
export default Recuperacao
