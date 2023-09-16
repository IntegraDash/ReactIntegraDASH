import Planta from "../../assets/img/plantaIndiblue.svg"
import alertHome from "../../assets/img/alertheader.svg"
import Perfil from "../../assets/img/perfil.png"
// import Foto from "../../assets/img/img-user.png"
// import Perfil from "../../assets/img/icone-btn-user-info.png"
// import Down from "../../assets/img/down.svg"
// import LogoVolks from "../../assets/img/icons8-volkswagen-100.png"
import Favorite from "../../assets/img/heartheader.svg"
import "./style.css"

function Header() {
    return (
        <>
            <div className="inicio-lateral">

                <div className="dropdown" tabIndex={1}>
                    <i className="db2" tabIndex={1} />
                    <a className="dropbtn">
                        <img src={Planta} alt="" />
                        <span>Planta</span>
                    </a>
                    <div className="dropdown-content">
                        <a href="#">Anchieta</a>
                        <a href="#">Curitiba</a>
                        <a href="#">Taubaté</a>
                    </div>
                </div>

                <section className="dropdown1">
                    <button className="alert">
                        <img
                            src={Favorite}
                            alt="Icone de Alerta da Tela Principal"
                        />
                    </button>
                    <button className="alert">
                        <img
                            src={alertHome}
                            alt="Icone de Alerta da Tela Principal"
                        />
                    </button>
                </section >

                <section className="dropdown">

                </section>



                <div className="dropdown" tabIndex={1}>
                    <i className="db2" tabIndex={1} />
                    <a className="dropbtn">
                        <img
                            src={Perfil}
                            alt=""
                        />
                        <span>Perfil</span>
                    </a>
                    <div className="dropdown-content">
                        <a href="#">Configurações</a>
                        <a href="#">Sair</a>
                    </div>
                </div>


            </div>
        </>
    )
}
export default Header