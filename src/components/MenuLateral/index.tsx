import Logo from "../../assets/img/fundo_escuro_logo_integradash.png"
import HomeAzul from "../../assets/img/iconHomeBlue.svg"
import HomeBranco from "../../assets/img/branco_home_icone.png"
import AnalisesAzul from "../../assets/img/iconAnalisesBlue.svg"
import AnalisesBranco from "../../assets/img/branco_ analise_icone.png"
import EstrategiaAzul from "../../assets/img/iconEstratégiaBlue.svg"
import EstrategiaBranco from "../../assets/img/branco_estrategia_icone.png"
import FavoritosAzul from "../../assets/img/iconFavoritosBlue.svg"
import FavoritosBranco from "../../assets/img/branco_favoritos_icone.png"
import AlertasAzul from "../../assets/img/iconAlertasBlue.svg"
import AlertasBranco from "../../assets/img/branco_alerta_icone.png"
import ConfiguracoesAzul from "../../assets/img/iconConfiguracoesBlue.svg"
import ConfiguracoesBranco from "../../assets/img/branco_configuracao_icone.png"
import SairAzul from "../../assets/img/iconSairBlue.svg"
import SairBranco from "../../assets/img/branco_sair_icone.png"

import "./style.css"

import { Link } from "react-router-dom"
// import { Link } from "react-router-dom"

export default function MenuLateral() {

    return (
        <aside className="navigation">
            <img src={Logo} className="logo_menu" alt="" />
            <ul className="barra_navegacao">
                <section className="navegacao_peginas">
                    <li className="list active">
                        <Link to="/home">
                            <span className="icon">
                                <img src={HomeAzul} alt="" />
                            </span>
                            <span className="icon1">
                                <img src={HomeBranco} alt="" />
                            </span>
                            <span className="title ">Home</span>
                        </Link>
                    </li>
                    <li className="list ">
                        <Link to="/analises">
                            <span className="icon">
                                <img src={AnalisesAzul} alt="" />
                            </span>
                            <span className="icon1">
                                <img src={AnalisesBranco} alt="" />
                            </span>
                            <span className="title">Analises</span>
                        </Link>
                    </li>
                    <li className="list">
                        <Link to="/estrategias">
                            <span className="icon">
                                <img src={EstrategiaAzul} alt="" />
                            </span>
                            <span className="icon1">
                                <img src={EstrategiaBranco} alt="" />
                            </span>
                            <span className="title">Estratégias</span>
                        </Link>
                    </li>
                    <li className="list">
                        <Link to="/favoritos">
                            <span className="icon">
                                <img src={FavoritosAzul} alt="" />
                            </span>
                            <span className="icon1">
                                <img src={FavoritosBranco} alt="" />
                            </span>
                            <span className="title">Favoritos</span>
                        </Link>
                    </li>
                    <li className="list">
                        <Link to="/alertas">
                            <span className="icon">
                                <img src={AlertasAzul} alt="" />
                            </span>
                            <span className="icon1">
                                <img src={AlertasBranco} alt="" />
                            </span>
                            <span className="title">Alertas</span>
                        </Link>
                    </li>
                </section>
                <section className="configuracoes_sair">
                    <li className="list">
                        <Link to="/configuracoes">
                            <span className="icon">
                                <img src={ConfiguracoesAzul} alt="" />
                            </span>
                            <span className="icon1">
                                <img src={ConfiguracoesBranco} alt="" />
                            </span>
                            <span className="title">Configurações</span>
                        </Link>
                    </li>
                    <li className="list">
                        <Link to="/login">
                            <span className="icon">
                                <img src={SairAzul} alt="" />
                            </span>
                            <span className="icon1">
                                <img src={SairBranco} alt="" />
                            </span>
                            <span className="title">Sair</span>
                        </Link>
                    </li>
                </section>
            </ul>
        </aside>

    )
}
