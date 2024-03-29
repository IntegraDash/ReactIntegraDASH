import "./style.css"
import Pasta from "../../assets/img/folder-icon.png"
import MenuLateral from "../../components/MenuLateral"
import Header from "../../components/Header"

export default function Estrategia() {

  return (
    <>
      <MenuLateral />
      <main className="main_estrategias">
        <Header />
        <section className="folders">
          <div className="folder">
            <img src={Pasta} alt="Ícone da pasta" />
            <span>Estratégia 1</span>
          </div>
          <div className="folder">
            <img src={Pasta} alt="Ícone da pasta" />
            <span>Estratégia 2</span>
          </div>
          <div className="folder">
            <img src={Pasta} alt="Ícone da pasta" />
            <span>Estratégia 3</span>
          </div>
          <div className="folder">
            <img src={Pasta} alt="Ícone da pasta" />
            <span>Estratégia 4</span>
          </div>
          <div className="folder">
            <img src={Pasta} alt="Ícone da pasta" />
            <span>Estratégia 5</span>
          </div>
        </section>
        <section>
          <nav>
            <div className="menu_mobile">
              <a href="#">
                <img
                  src="img/menu hamburguer mobile.png"
                  className="resp_hamburguer"
                  alt="menu_hamburguer"
                />
              </a>
              <a href="#">
                <img
                  src="img/vitor_pablo.png"
                  className="resp_foto"
                  alt="Foto de perfil usuario"
                />
              </a>
              <div className="mobile-menu-items">
                <a href="#">
                  <img src="img/home_icone.png" className="hover1" alt="botão_home" />
                </a>
                <a href="#">
                  <img
                    src="img/analise_icone.png"
                    className="hover1"
                    alt="botão_análises"
                  />
                </a>
                <a href="#">
                  <img
                    src="img/estrategia_icone.png"
                    className="hover1"
                    alt="botão_estratégia"
                  />
                </a>
                <a href="#">
                  <img
                    src="img/coracao_icone.png"
                    className="hover1"
                    alt="botão_favoritos"
                  />
                </a>
                <a href="#">
                  <img
                    src="img/alerta_icone.png"
                    className="hover1"
                    alt="botão_alerta"
                  />
                </a>
                <a href="#">
                  <img
                    src="img/configuracao_icone.png"
                    className="resp_config"
                    alt="botão_configuração"
                  />
                </a>
                <a href="#">
                  <img
                    src="img/sair_icone.png"
                    className="resp_logout"
                    alt="botão_sair"
                  />
                </a>
              </div>
            </div>
          </nav>
        </section>

        <section>
        <form>

          <h1>Nova Estrátegia</h1>
        <div>
        <label htmlFor="projectName">Nome do Projeto:</label>
        <input type="text" id="projectName" name="projectName" />
        </div>

        <label htmlFor="startDate">Data de Início:</label>
        <input type="date" id="startDate" name="startDate" />

        <label htmlFor="endDate">Data de Término:</label>
        <input type="date" id="endDate" name="endDate" />

        <label htmlFor="projectNotes">Observações do Projeto:</label>
        <textarea id="projectNotes" name="projectNotes" defaultValue={""} />

        
  <label htmlFor="projectStatus">Status do Projeto:</label>

  <select id="projectStatus" name="projectStatus">
    <option value="toStart">A iniciar</option>
    <option value="inProgress">Em andamento</option>
    <option value="finished">Finalizado</option>
  </select>

  <button type="submit">Enviar</button>
</form>

        </section>
        
      </main>
    </>
  )

}

