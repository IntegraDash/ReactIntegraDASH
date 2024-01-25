import Grafico from "../../assets/img/grafico.png"
import TCross from "../../assets/img/t-cross.png"
import Dashb from "../../assets/img/dashb.png"
import Nivus from "../../assets/img/nivus.png"
import Polo from "../../assets/img/polo.png"


import "../Analises/styleanalises.css"
import axios from "axios"
import Header from "../../components/Header"
import MenuLateral from "../../components/MenuLateral"
import Status from "../../components/Dashboards/graficoStatus/Status"
import Erros from "../../components/Dashboards/graficoErro/Erros"
import { useEffect, useState } from "react"
import Criticidades from "../../components/Dashboards/graficoCriticidade/Criticidades"



export function Analises() {
    // const [user, setUser] = useState({});

    // const getErros = async () => {
    //     try {
    //         const response = await axios.get(
    //             "http://localhost:8080/usuarios" 
    //         );
    //         const data = response.data;

    //         setUser(data);
    //         // console.log(data);
    //         // console.log(response);
    //     } catch (error) {
    //       console.log(error)  
    //     }
    // };

    //     useEffect(() => {
    //         getUser();
    //     }, []);
    // useEffect(()  => {
    //     axios
    //         .get("http://localhost:8080/usuarios")
    //         .then((response) => console.log(response.data))
    //         .catch((error) => console.log(error))
    //         .finally(console.log("Olá"));
    // }, []);

    const [users, setUsers] = useState([])

    useEffect(() => {
        //função 
        axios.get("http://localhost:8080/usuarios")
            .then((response) => {
                setUsers(response.data)
            })

            .catch(() => {
                console.log("Deu erroado")
            })
    }, [])

    return (
        <>
            <MenuLateral />

            <main className="main_analises">
                <section className="posicionamento_main_analises">
                    <Header />
                    <section className="posicionamento_opcao">
                        <div className="options">
                            <div className="posicionamento_1">
                                <div className="posicionamento_options">
                                    <a href="">Listagem</a>
                                    <a href="">Relátorio</a>
                                    <a href="">Mais</a>
                                </div>
                                <div className="linha-horizontal1" />
                                <div className="position">
                                    <h1>Performance</h1>
                                </div>
                                <div className="posicionamento_producao">
                                    <div className="producao">
                                        <div className="esquerdo">
                                            <div className="bola">
                                                <div id="circulo" />
                                            </div>
                                            <div className="posicionamento_legenda">
                                                <p>Produção</p>
                                            </div>
                                        </div>
                                        <div className="meio">
                                            <div id="linha-vertical" />
                                        </div>
                                        <div className="direito_analises">
                                            <p>000</p>
                                        </div>
                                    </div>
                                    <div className="custo">
                                        <div className="esquerdo">
                                            <div className="bola">
                                                <div id="circulo" />
                                            </div>
                                            <div className="posicionamento_legenda">
                                                <p>Custo</p>
                                            </div>
                                        </div>
                                        <div className="meio">
                                            <div id="linha-vertical" />
                                        </div>
                                        <div className="direito_analises">
                                            <p>000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="posicionamento_producao2">
                                    <div className="producao2">
                                        <div className="esquerdo2">
                                            <div className="bola2">
                                                <div id="circulo" />
                                            </div>
                                            <div className="posicionamento_legenda2">
                                                <p>Produção</p>
                                            </div>
                                        </div>
                                        <div className="meio2">
                                            <div id="linha-vertical2" />
                                        </div>
                                        <div className="direito2">
                                            <p>000</p>
                                        </div>
                                    </div>
                                    <div className="custo2">
                                        <div className="esquerdo2">
                                            <div className="bola2">
                                                <div id="circulo" />
                                            </div>
                                            <div className="posicionamento_legenda2">
                                                <p>Custo</p>
                                            </div>
                                        </div>
                                        <div className="meio2">
                                            <div id="linha-vertical2" />
                                        </div>
                                        <div className="direito2">
                                            {users.map((user: any, key: string) => {
                                                return (
                                                    <p>{user.telefone}</p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="posicionamento_informacoes">
                        <div className="posicionamento">
                            {/* <div className="posicionamento_grafico">
                                <div className="graf_img">
                                    <img src={Grafico} alt="" />
                                </div>
                            </div> */}
                            <Erros />
                            <Status />
                            <Criticidades />
                            <div className="posicionamento_carros">
                                <div className="posicionamento_demonstrativo">
                                    <div className="demonstrativo_planta">
                                        <p>Planta Curitiba</p>
                                    </div>
                                    <div className="demonstrativo">
                                        <div className="dem_img">
                                            <img src={TCross} alt="" />
                                        </div>
                                        <div className="dem_img">
                                            <img src={Dashb} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="posicionamento_demonstrativo">
                                    <div className="demonstrativo_planta">
                                        <p>Planta Curitiba</p>
                                    </div>
                                    <div className="demonstrativo">
                                        <div className="dem_img">
                                            <img src={Nivus} alt="" />
                                        </div>
                                        <div className="dem_img">
                                            <img src={Dashb} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="posicionamento_demonstrativo">
                                    <div className="demonstrativo_planta">
                                        <p>Planta Curitiba</p>
                                    </div>
                                    <div className="demonstrativo">
                                        <div className="dem_img">
                                            <img src={Polo} alt="" />
                                        </div>
                                        <div className="dem_img">
                                            <img src={Dashb} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="responsividade">
                        <div className="posicionamentoesquerda_respon">
                            <div className="respon_esquerdo">
                                <div className="logo_respon">
                                    <img src="./img/logo_preto.png" alt="" />
                                </div>
                                <div className="posicionamentooptions_respon">
                                    <div className="posicionamentoopcao_respon">
                                        <a href="">Listagem</a>
                                        <a href="">Relátorio</a>
                                        <a href="">Mais</a>
                                    </div>
                                    <div className="linha-horizontal1" />
                                </div>
                                <div className="position_respon">
                                    <h1>Performance</h1>
                                </div>
                                <div className="posicionamentoproducao_respon">
                                    <div className="producao_respon">
                                        <div className="esquerdo_respon">
                                            <p>Produção</p>
                                        </div>
                                        <div className="meio_respon">
                                            <div id="linha-vertical" />
                                        </div>
                                        <div className="direito_respon">
                                            <p>000</p>
                                        </div>
                                    </div>
                                    <div className="custo_respon">
                                        <div className="esquerdo_respon">
                                            <p>Custo</p>
                                        </div>
                                        <div className="meio_respon">
                                            <div id="linha-vertical" />
                                        </div>
                                        <div className="direito_respon">
                                            <p>000</p>
                                        </div>
                                    </div>
                                </div>
                                <section className="posicionamentoinformacoes_respon">
                                    <div className="posicionamento_respon">
                                        <div className="posicionamentografico_respon">
                                            <div className="grafimg_respon">
                                                <img src={Grafico} alt="" />
                                            </div>
                                        </div>
                                        <div className="posicionamentocarros_respon">
                                            <div className="demonstrativo_respon">
                                                <div className="demimg_respon">
                                                    <img src={TCross} alt="" />
                                                </div>
                                                <div className="demimg_respon">
                                                    <img src={Dashb} alt="" />
                                                </div>
                                            </div>
                                            <div className="demonstrativo_respon">
                                                <div className="demimg_respon">
                                                    <img src={Nivus} alt="" />
                                                </div>
                                                <div className="demimg_respon">
                                                    <img src={Dashb} alt="" />
                                                </div>
                                            </div>
                                            <div className="demonstrativo_respon">
                                                <div className="demimg_respon">
                                                    <img src={Polo} alt="" />
                                                </div>
                                                <div className="demimg_respon">
                                                    <img src={Dashb} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                    </section>

                </section>
            </main>
        </>
    )
}
