import { AlquilerPage } from './../page/alquiler/alquiler.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';

describe('workspace-project Alquiler', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let alquiler: AlquilerPage;

    beforeEach(()=> {
        page = new AppPage();
        navBar = new NavbarPage();
        alquiler = new AlquilerPage();
    });

    it('Deberia crear un usario y un alquiler', () => {
        const CEDULA = '1098';
        const NOMBRE = 'German ovalle';
        const FECHANACIMIENTO = "1990-02-26";
        const IDJETSKI = 'BC001';
        const TIEMPORENTA = '10';
        page.navigateTo();
        navBar.clickLinkAlquileres();
        alquiler.clickLinkCrearUsuarioAlquiler();
        alquiler.ingresarCedula(CEDULA);
        alquiler.ingresarNombre(NOMBRE);
        alquiler.ingresarFechaNacimiento(FECHANACIMIENTO);
        alquiler.ingresarIdJetSki(IDJETSKI);
        alquiler.ingresarTiempoRenta(TIEMPORENTA);
        alquiler.clickBotonCrearUsuarioAlquiler();
    });

    it('Deberia crear un alquiler',()=>{
        const CEDULA = '1098';
        const IDJETSKI = 'BC002';
        const TIEMPORENTA = '15';
        page.navigateTo();
        navBar.clickLinkAlquileres();
        alquiler.clickLinkCrearAlquiler();
        alquiler.ingresarCedula(CEDULA);
        alquiler.ingresarIdJetSki(IDJETSKI);
        alquiler.ingresarTiempoRenta(TIEMPORENTA);
        alquiler.clickBotonCrearAlquiler();
	});

    it('Deberia listar productos',() => {
        page.navigateTo();
        navBar.clickLinkAlquileres();
        alquiler.contarAlquileres();
        expect(1).toBe(alquiler.contarAlquileres());
    });

    it('Deberia calcular monto de un alquiler',() => {
        page.navigateTo();
        navBar.clickLinkAlquileres();
        alquiler.clickAccionCalcularMontoAlquiler();
        alquiler.clickLinkPagarAlquiler();
        expect(0).toBe(alquiler.calcularMonto());
    });
});
