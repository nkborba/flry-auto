class HomepageElements {

    btn_title_header = "#button-title-desktop-header"

    //Mantendo em dicionario facilita a reutilizacao do step do BDD,
    //onde sera apenas necessario informar a pagina desejada
    menuLinks = {
        "Resultados de exames": this.btn_title_header+".resultado-de-exames",
        "Exames oferecidos": this.btn_title_header+".exames-oferecidos",
        "Convênios": this.btn_title_header+".convenios",
        "Unidades": this.btn_title_header+".unidades",
        "Fale Conosco": this.btn_title_header+".fale-conosco",
        "Mais opções": ".mais-opcoes"
    }
}

export default HomepageElements