import "./style.css"

import LogoMobile from "../../assets/img/Logo Preto D - IntegraDash.png";
import HomemAcenando from "../../assets/img/homem-acenando.png";
import CarroVermelho from "../../assets/img/carro-vermelho.png";
import CarroPreto from "../../assets/img/carro-preto.png";
import CarroAzul from "../../assets/img/carro-azul.png";
import IconePlus from "../../assets/img/icone-plus.png";
import IconePlusAdd from "../../assets/img/icone-plus-add.png";
import IconePorcentagem from "../../assets/img/icone-porcentagem.png";
import IconeQPorcentagem from "../../assets/img/icone-q-porcentagem.png";
import IconeRelogio from "../../assets/img/reloginho.png";
import IconeMemoria from "../../assets/img/icone-memoria.png";
import IconeAlerta from "../../assets/img/icone-alerta.png";
import PainelCarro from "../../assets/img/img-painel-carro.png";
import IconeMem10 from "../../assets/img/mem-10.png";
import IconeMem55 from "../../assets/img/mem-55.png";
import IconeMem35 from "../../assets/img/mem-35.png";
import IconeMem60 from "../../assets/img/mem-60.png";
import GraficoLinha from "../../assets/img/grafico-linha.png";
import GraficoBarras from "../../assets/img/grafico-barras.png";
import GraficoSetores from "../../assets/img/grafico-setores.png";
import GraficoCentral from "../../assets/img/grafico-central.png";
import MenuLateral from "../../components/MenuLateral";
import Header from "../../components/Header";

export default function Home() {


    return (
        <>
            <MenuLateral/>
            <main className="mainHome">
            <Header/>
                {/* ASIDE -> MENU LATERAL */}

                {/* <aside>
                    <a href="#">
                        <img className="logo" src="img/Logo Branco D - IntegraDash.png" alt="Logo - IntegraDash"/>
                    </a>
                    <img className="menu-hamb" src="img/btn-menu-hamb.png" alt="Icone de menu de hamburguer"/>
                    <div className="ordem">
                        <div className="p-menu ord1">
                            <div className="lupa">
                                <input type="search"/>
                                <button>
                                    <img className="icone-lupa" src="img/icone-lupa.png" alt="Icone de Lupa"/>
                                </button>
                            </div>
                            <img className="img-user-resp" src="img/img-user.png" alt="Imagem do Usuário"/>
                            <button className="btn-menu home">
                                <img className="i-home" src="img/icone-home.png" alt="Icone de Casinha"/>
                                <span className="btn-texto">Visão Geral</span>
                            </button>
                            <button className="btn-menu analises">
                                <img className="i-analises" src="img/icone-analises.png" alt="Icone de Análises"/>
                                <span className="btn-texto"><a href="../analises/analises.html">Análises</a></span>
                            </button>
                            <button className="btn-menu cavalo">
                                <img className="i-cavalo" src="img/icone-cavalo.png" alt="Icone de Cavalo"/>
                                <span className="btn-texto"><a href="../estrategia/estrategia.html">Estratégia</a></span>
                            </button>
                            <button className="btn-menu coracao">
                                <img className="i-coracao" src="img/icone-favoritos.png" alt="Icone de Coração"/>
                                <span className="btn-texto"><a href="../favoritos/favoritos.html">Favoritos</a></span>
                            </button>
                            <button className="btn-menu alertas">
                                <img className="i-alertas" src="img/icone-alertas.png" alt="Icone de Alertas"/>
                                <span className="btn-texto"><a href="../alerta/index.html">Alertas</a></span>
                            </button>
                        </div>
                        <div className="p-menu s ord3">
                            <button className="btn-menu config">
                                <img className="i-config" src="img/icone-config.png" alt="Icone de Configurações"/>
                                <span className="btn-texto"><a href="../configuracao/configuracao.html">Configurações</a></span>
                            </button>
                            <button className="btn-menu sair">
                                <img className="i-sair" src="img/icone-sair.png" alt="Icone de Sair"/>
                                <span className="btn-texto"><a href="../possplash/possplash.html">Sair</a></span>
                            </button>
                        </div>
                        <div className="p-menu s s2 ord2">
                            <label htmlFor="mudar-estado">White Mode</label>
                            <input className="barra" type="range" min="0" max="1" name="mudar-estado" id="mudar-estado"/>
                        </div>
                    </div>
                </aside> */}
                {/* <div className="inicio-resp">
                    <img className="logo-mobile" src={ LogoMobile } alt="Logo Mobile"/>
                    <div className="boas-vindas">
                        <div className="bv">
                            <h1>Olá Usuário!</h1>
                            <p>Acesse aqui os principais conteúdos do seu sistema.</p>
                        </div>
                        <img src={ HomemAcenando } alt="Imagem de boas-vindas, homem acenando"/>
                    </div>
                    <div className="unidades">
                        <ul>
                            <li className="taubate">
                                <span>Unidade Taubaté</span>
                                <img className="carro" src={ CarroVermelho } alt="carro-vermelho"/>
                                <img src="img/icone-btn-user-info.png" alt=""/>
                            </li>
                        </ul>
                    </div>
                    <div className="centro-p-linha">
                        <div className="plus">
                            <span>Estatística de projetos</span>
                            <img src={ IconePlus } alt="Icone de adicionar mais"/>
                        </div>
                        <ul>
                            <li>30 dias</li>
                            <li>90 dias</li>
                            <li>6 meses</li>
                            <li>12 meses</li>
                        </ul>
                    </div>
                    <div className="container-c slider">
                        {/* <!-- <div className="slider-input"> -->
                            <input className="grid-a" name='slide' type="radio" >
                            <input className="grid-b" name='slide' type="radio" checked>
                            <input className="grid-c" name='slide' type="radio" >
                            <input className="grid-d" name='slide' type="radio" >
                        <!-- </div> --> */}
                        {/*<div className="carrossel slider-content">
                            <div className="info slider-item">
                                <div>
                                    <span>Produção</span>
                                    <img src={ IconePorcentagem } alt="Icone de porcentagem"/>
                                </div>
                                <span className="onibus">Ônibus</span>
                                <p>+ 500 mil uidades produzidas em Taubaté</p>
                            </div>
                            <div className="info icone-porcent slider-item">
                                <div>
                                    <span>Alerta de desempenho:</span>
                                    <img src={ IconeQPorcentagem } alt="Icone de porcentagem"/>
                                </div>
                                <p>Desempenho abaixo do esperado</p>
                            </div>
                            <div className="info slider-item">
                                <div>
                                    <span>Produção</span>
                                    <img src={ IconePorcentagem } alt="Icone de porcentagem"/>
                                </div>
                                <span className="onibus">Ônibus</span>
                                <p>+ 500 mil uidades produzidas em Taubaté</p>
                            </div>
                            <div className="info icone-porcent slider-item">
                                <div>
                                    <span>Alerta de desempenho:</span>
                                    <img src="img/icone-q-porcentagem.png" alt="Icone de porcentagem"/>
                                </div>
                                <p>Desempenho abaixo do esperado</p>
                            </div>
                        </div>
                    </div>
                    <div className="tempo-real">
                        <div className="reloginho">
                            <span className="t-r">Alertas em Tempo Real</span>
                            <img src={ IconeRelogio } alt="Icone de Relógio"/>
                        </div>
                        <div className="plantaMain">
                            <span>Planta Curitiba</span>
                            <div className="imagens-plantaMain">
                                <img src={ CarroVermelho } alt="Imagem de um carro vermelho"/>
                                <img src={ PainelCarro } alt="Imagem de Painel do carro"/>
                            </div>
                        </div>
                        <div className="plantaMain">
                            <span>Planta Taubaté</span>
                            <div className="imagens-plantaMain">
                                <img src={ CarroPreto } alt="Imagem de um carro preto"/>
                                <img src={ PainelCarro } alt="Imagem de Painel do carro"/>
                            </div>
                        </div>
                        <div className="plantaMain">
                            <span>Planta Anchieta</span>
                            <div className="imagens-plantaMain">
                                <img src={ CarroAzul } alt="Imagem de um carro azul"/>
                                <img src={ PainelCarro } alt="Imagem de Painel do carro"/>
                            </div>
                        </div>
                    </div>
                    <div className="memoria">
                        <div className="i-mem">
                            <span>Gerenciamento de Memória</span>
                            <img src={ IconeMemoria } alt="Icone de Memória"/>
                        </div>
                        <div className="mem">
                            <div className="grp-mem">
                                <div className="card-mem">
                                    <img src={ IconeMem10 } alt="Porcentagem de memória"/>
                                    <span className="pc">10%</span>
                                    <span>HD</span>
                                </div>
                                <div className="card-mem">
                                    <img src={ IconeMem55 } alt="Porcentagem de memória"/>
                                    <span className="pc">55%</span>
                                    <span className="hw">Hardware</span>
                                </div>
                            </div>
                            <div className="grp-mem">
                                <div className="card-mem">
                                    <img src={ IconeMem35 } alt="Porcentagem de memória"/>
                                    <span className="pc">35%</span>
                                    <span>ROM</span>
                                </div>
                                <div className="card-mem">
                                    <img src={ IconeMem60 } alt="Porcentagem de memória"/>
                                    <span className="pc">60%</span>
                                    <span>CPU</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <section className="principal-home">

                    {/* DIV INICIO LATERAL -> PARTE DE CIMA DA PÁGINA HOME 
                    COM INFORMAÇÕES DO USUÁRIO, FOTO E BARRA DE PESQUISA */}

                    {/* <div className="inicio-lateral">
                        <div className="lupa-alert">
                            <div className="lupa">
                                <input className="lupa-input-centro" type="search"/>
                                <button className="btn-lupa-principal">
                                    <img className="icone-lupa-principal" src="img/icone-lupa-principal.png"
                                        alt="Icone de Lupa na Seção Principal"/>
                                </button>
                            </div>
                            <button className="alert">
                                <img src="img/icone-alert-home.png" alt="Icone de Alerta da Tela Principal"/>
                            </button>
                        </div>
                        <div className="usuario">
                            <img className="foto-user" src="img/img-user.png" alt="Foto do Usuário"/>
                            <span>Nome do Usuário</span>
                            <a href="#"><img src="img/icone-btn-user-info.png" alt="btn-user-info"/></a>
                        </div>
                    </div> */}
                    <div className="centro">
                        <div className="centro-p-linha">
                            <div className="plus">
                                <span>Estatística de projetos</span>
                                <img src={ IconePlus } alt="Icone de adicionar mais"/>
                            </div>
                            <ul className="ul_home">
                                <li>30 dias</li>
                                <li>90 dias</li>
                                <li>6 meses</li>
                                <li>12 meses</li>
                            </ul>
                        </div>
                    </div>
                    <div className="centro-lados">
                        <div className="lado-um">
                            <div className="plantaMain">
                                <span>Planta Curitiba</span>
                                <div className="imagens-plantaMain">
                                    <img src={ CarroVermelho } alt="Imagem de um carro vermelho"/>
                                    <img src={ PainelCarro } alt="Imagem de Painel do carro"/>
                                </div>
                            </div>
                            <div className="plantaMain">
                                <span>Planta Taubaté</span>
                                <div className="imagens-plantaMain">
                                    <img src={ CarroPreto } alt="Imagem de um carro preto"/>
                                    <img src={ PainelCarro } alt="Imagem de Painel do carro"/>
                                </div>
                            </div>
                            <div className="plantaMain">
                                <span>Planta Anchieta</span>
                                <div className="imagens-plantaMain">
                                    <img src={ CarroAzul } alt="Imagem de um carro azul"/>
                                    <img src={ PainelCarro } alt="Imagem de Painel do carro"/>
                                </div>
                            </div>
                            <div className="graficos">
                                <div>
                                    <div className="grafico">
                                        <span>Parada Total da Linha de Produção</span>
                                        <img className="grafico-img" src={ GraficoLinha } alt="Imagem de Gráfico Linha"/>
                                    </div>
                                    <div className="grafico">
                                        <span>Principais erros - Anual</span>
                                        <img className="grafico-img" src={ GraficoBarras } alt="Imagem de Gráfico de Setores"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="grafico">
                                        <span>Principais erros - Mensal</span>
                                        <img className="grafico-img" src={ GraficoSetores } alt="Imagem de Gráfico de Setores"/>
                                    </div>
                                    <div className="grafico">
                                        <img className="plus-add" src={ IconePlusAdd } alt="Icone para adicionar arquivos"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lado-dois">
                            <div className="infos">
                                <div className="infos-cards">
                                    <div className="info">
                                        <div>
                                            <span>Produção</span>
                                            <img src={ IconePorcentagem } alt="Icone de porcentagem"/>
                                        </div>
                                        <span className="onibus">Ônibus</span>
                                        <p>+ 500 mil uidades produzidas em Taubaté</p>
                                    </div>
                                    <div className="info icone-porcent">
                                        <div>
                                            <span>Alerta de desempenho:</span>
                                            <img src={ IconeQPorcentagem } alt="Icone de porcentagem"/>
                                        </div>
                                        <p>Desempenho abaixo do esperado</p>
                                    </div>
                                </div>
                                <div className="infos-cards">
                                    <div className="info icone-alerta">
                                        <div>
                                            <span>Alerta de segurança:</span>
                                            <img src={ IconeAlerta } alt="Icone Alerta"/>
                                        </div>
                                        <p>Sistema comprometido por uma ameaça de segurança</p>
                                    </div>
                                    <div className="info">
                                        <div>
                                            <span>Produção</span>
                                            <img src={ IconePorcentagem } alt="Icone de porcentagem"/>
                                        </div>
                                        <span className="onibus">Ônibus</span>
                                        <p>+ 500 mil uidades produzidas em Taubaté</p>
                                    </div>
                                </div>
                                <img className="grafico-central" src={ GraficoCentral } alt="Imagem de Gráfico"/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}