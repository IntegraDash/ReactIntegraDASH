import './style.css'

import Planta_Curitiba_Escolha from '../../assets/img/Planta_Curitiba_Escolha.png'
import Planta_Taubate_Escolha from '../../assets/img/Planta_Taubate_Escolha.png'
import Planta_Anchieta_Escolha from '../../assets/img/Planta_Anchieta_Escolha.png'
import MenuLateral from '../../components/MenuLateral'
import Header from '../../components/Header'

function Favoritos() {

  return (

    <>
      <MenuLateral/>
      <section className="pagina_desktop">
        <Header/>

        <div className="corpo_do_site_meio">

          <p className="edicao_fav_meio_pag">Favoritos</p>
          <p className="edicao_itens_salvos_meio_pag">Itens salvos</p>

          <div className="fundo_tela_arquivos">

            <div className="parte_esquerda_seletor">

              <div className="primeira_coluna">
                <p className="selecione_sua_planta">Selecione sua planta:</p>

                <form>

                  <div className="menu_veiculos">

                    <div className="seletor_curitiba">
                      <input type="radio" id="seletor_curitiba" name="seletor_curitiba" />
                      <img className="carro_curitiba_seletor" src={Planta_Curitiba_Escolha} alt="" />
                    </div>

                    <div className="seletor_taubate">
                      <input type="radio" id="seletor_taubate" name="seletor_taubate" />
                      <img className="carro_taubate_seletor" src={Planta_Taubate_Escolha} alt="" />
                    </div>

                    <div className="seletor_anchieta">
                      <input type="radio" id="seletor_anchieta" name="seletor_anchieta" />
                      <img className="carro_anchieta_seletor" src={Planta_Anchieta_Escolha} alt="" />
                    </div>

                  </div>

                </form>

              </div>

            </div>

            <div className="parte_direita_botao_seletor_visualizacao">

              <div>

                <div className="testebotao">
                  <select className="botao_seletor_visualizacao" name="seletor_fav" id="seletor_fav">
                    <option className="container_setor" value="">Assunto</option>
                    <option value="">Recentes</option>
                    <option className="testetamanho" value="">Ordem Alafabética</option>
                  </select>
                </div>
                <div className="local_dos_arquivos"></div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
    
  )

}

export default Favoritos