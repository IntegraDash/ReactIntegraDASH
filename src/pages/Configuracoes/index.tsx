import "./style.css"

import Perfil from "../../assets/img/perfil.png"
import MenuLateral from "../../components/MenuLateral"
import Header from "../../components/Header"

function Configuracoes() {

    return (
        <>
        <MenuLateral/>
        <section className="main_Config">
            <Header/>
            <h1>Configurações</h1>
            <div className="config-geral">
                <div className="perfil">
                    <img src={Perfil} alt="Foto de perfil usuário" />
                    <div className="infos-perfil">
                        {/* <!-- <div className="txt-perfil">
                        <label for="nome">Nome:</label>
                        <label for="email">Email:</label>
                        <label for="tel">Telefone:</label>
                    </div> --> */}
                        <div className="txt-perfil">
                            <input type="text" name="nome" id="nome" placeholder="Nome:" />
                            <input type="text" name="email" id="email" placeholder="Email:" />
                            <input type="text" name="tel" id="tel" placeholder="Telefone:" />
                        </div>
                    </div>
                    <span className="sub-barra">meu perfil</span>
                </div>
                <div className="box-config">
                    <div className="aparencia">
                        <div className="op-radio">
                            <div className="tf">
                                <span>tema</span>
                                <span>fonte</span>
                            </div>
                            <div className="tf">
                                <div>
                                    <input type="radio" name="tema" id="tema" />
                                    <span>claro</span>
                                </div>
                                <div>
                                    <input type="radio" name="tema" id="tema" />
                                    <span>escuro</span>
                                </div>
                            </div>
                            <div className="tf">
                                <div>
                                    <input type="radio" name="tema" id="tema" />
                                    <span>lato</span>
                                </div>
                                <div>
                                    <input type="radio" name="tema" id="tema" />
                                    <span>verdana</span>
                                </div>
                            </div>
                        </div>
                        <span className="sub-barra">aparência</span>
                    </div>
                    <div className="notificacoes">
                        <div className="op-radio">
                            <div className="tf">
                                <span>alerta de erros</span>
                                <span>atualizações</span>
                                <span>alerta de riscos</span>
                            </div>
                            <div className="tf">
                                <div>
                                    <input type="radio" name="tema" id="tema" />
                                    <span>sim</span>
                                </div>
                                <div>
                                    <input type="radio" name="tema" id="tema" />
                                    <span>sim</span>
                                </div>
                                <div>
                                    <input type="radio" name="tema" id="tema" />
                                    <span>sim</span>
                                </div>
                            </div>
                            <div className="tf">
                                <div>
                                    <input type="radio" name="tema" id="tema" />
                                    <span>não</span>
                                </div>
                                <div>
                                    <input type="radio" name="tema" id="tema" />
                                    <span>não</span>
                                </div>
                                <div>
                                    <input type="radio" name="tema" id="tema" />
                                    <span>não</span>
                                </div>
                            </div>
                        </div>
                        <span className="sub-barra">notificações</span>
                    </div>
                </div>
            </div>
            <button className="config_button">salvar</button>
        </section>
        </>
    )
}
 export default Configuracoes