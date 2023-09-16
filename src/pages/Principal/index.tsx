import '../Principal/style.css'
import Logo from "../../assets/img/logointegradash_fundoclaro.png"



function Principal() {
    function redirectTime(): void { // Função que define o tempo
        setTimeout('window.location.href = "/possplash"', 4000); // Define o link de redirecionamento
      }
    return (
        <>
            
            <main onLoad={redirectTime} id="principal">


                <div className="paginaprincipal">
                    <img src={Logo}
                        className="Logo_Integradash_fundo_claro"
                        alt=""
                    />
                </div>
            </main>


        </>

    )
}



export default Principal



