import api from "../../utils/api";


import secureLocalStorage from "react-secure-storage";
import ImagemFundo from "../../assets/img/imagemfundo.png"
import DesenvolvidoPor from "../../assets/img/desenvolvidopor.png"
import IntegraDashDark from "../../assets/img/integradashdark.png"
import IntegrdashlogoDescuro from "../../assets/img/integrdashwhite.png"
import Olho from "../../assets/img/olho.png"

import { useState, } from "react";

// import { Link, useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import {useNavigate, Link} from "react-router-dom"

import "./style.css";

function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")

    function fazerlogin(event: any) {
        event.preventDefault()

        const usuario: object = {
            email: email,
            password: senha
        }

        api.post("login", usuario).then((response) => {
            console.log(response)

            secureLocalStorage.setItem("user", response.data)
            // localStorage.setItem("user", response.data)

            navigate("/home/")

            // Recarrega a pagina
            navigate(0)

        })
    }

    return (
        <>
            <main className="main_login">
                <section className="login_paginatotal">
                    <div className="login_quadrado_branco">
                        {/* <div class="alinhamento_login"> */}
                        <img
                            className="Logo_Login"
                            src={IntegraDashDark}
                            alt="Logo da Instegradash Fundo Claro"
                        />
                        <img
                            className="Logo_Claro"
                            src={IntegrdashlogoDescuro}
                            alt="Logo da Instegradash Fundo Escuro"
                        />
                        <div className="teste1">
                            <form onSubmit={fazerlogin} className="alinhamento_input" action="login">
                                <label className="negrito" htmlFor="email">
                                    Endereco de email
                                </label>
                                <input
                                    className="login_email"
                                    type="email"
                                    id="email"
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="Digite aqui seu e-mail:"
                                    required
                                />
                                <label className="negrito" htmlFor="senha">
                                    Senha
                                </label>
                                <div className="zoinho">
                                    <input
                                        className="login_senha"
                                        type="password"
                                        id="senha"
                                        onChange={(event) => setSenha(event.target.value)}
                                        placeholder="Digite aqui sua senha:"
                                        required
                                    />
                                    <img
                                        className="login_zoio"
                                        src={Olho}
                                        alt="mostrar - ocultar password"
                                    />
                                </div>
                                <div className="mantenha-me">
                                    <input className="checkbox" type="checkbox" name="checkbox" />
                                    <label htmlFor="">Mantenha-me conectado</label>
                                </div>
                                <button className="login_botao_entrar">Entrar</button>
                                <div className="clique_aqui">
                                    <p className="testefonte">Esqueceu a senha?</p>
                                    <p className="testefonte2"> teste </p>
                                    <Link to={'/restauracao'}>Clique aqui</Link>
                                </div>
                            </form>
                        </div>
                        <div className="desenvolvido">
                            <img
                                className="logindesenvolvido_por"
                                src={DesenvolvidoPor}
                                alt="Desenvolvido por Integradash"
                            />
                        </div>
                    </div>
                    <section className="login_pagina_metade1">
                        <div className="login_rapaz_dashboard">
                            <img src={ImagemFundo} alt="Rapaz em frente a um Dashboard apontando pra ele"/>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}

export default Login;