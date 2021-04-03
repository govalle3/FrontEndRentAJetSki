import { by, element } from "protractor";
export class AlquilerPage {
    private linkCrearAlquiler = element(by.id('linkCrearAlquiler'));
    private linkCrearUsuarioAlquiler = element(by.id('linkCrearUsuarioAlquiler'));
    private linkListarAlquiler = element(by.id('linkListarAlquiler'));
    private linkPagarAlquiler = element(by.id('linkPagarAlquiler'));
    private linkBotonCrearUsuarioAlquiler = element(by.id('linkBotonCrearUsuarioAlquiler'));
    private linkBotonCrearAlquiler = element(by.id('linkBotonCrearAlquiler'));
    private linkBotonPagarAlquiler = element(by.id('linkBotonPagarAlquiler'));
    private inputCedula = element(by.id('cedula'));
    private inputNombre = element(by.id('nombre'));
    private inputFechaNacimiento = element(by.id('fechaNacido'));
    private inputTiempoRenta = element(by.id('tiempoRenta'));
    private inputIdJetSki = element(by.id('idJetSki'));
    private linkAccionCalcularMontoAlquiler = element(by.id('AccionMontoBoton'));
    private listaAlquileres = element(by.id('alquileres'));
    private montaAPagar = element(by.id('total'));
    async clickBotonCrearUsuarioAlquiler(){
        await this.linkBotonCrearUsuarioAlquiler.click();
    }
    async clickBotonCrearAlquiler(){
        await this.linkBotonCrearAlquiler.click();
    }
    async clickBotonPagarAlquiler(){
        await this.linkBotonPagarAlquiler.click();
    }
    async clickAccionCalcularMontoAlquiler(){
        await this.linkAccionCalcularMontoAlquiler.click();
    }
    async clickLinkCrearAlquiler(){
        await this.linkCrearAlquiler.click();
    }
    async clickLinkCrearUsuarioAlquiler(){
        await this.linkCrearUsuarioAlquiler.click();
    }
    async clickLinkListarAlquiler(){
        await this.linkListarAlquiler.click();
    }
    async clickLinkPagarAlquiler(){
        await this.linkPagarAlquiler.click();
    }
    async ingresarCedula(Cedula) {
        await this.inputCedula.sendKeys(Cedula);
    }
    async ingresarNombre(Nombre) {
        await this.inputNombre.sendKeys(Nombre);
    }
    async ingresarFechaNacimiento(FechaNacimiento) {
        await this.inputFechaNacimiento.sendKeys(FechaNacimiento);
    }
    async ingresarTiempoRenta(TiempoRenta) {
        await this.inputTiempoRenta.sendKeys(TiempoRenta);
    }
    async ingresarIdJetSki(IdJetSki) {
        await this.inputIdJetSki.sendKeys(IdJetSki);
    }
    async contarAlquileres() {
        return this.listaAlquileres.count();
    }
    async calcularMonto() {
        return this.montaAPagar.getText();
    }
}