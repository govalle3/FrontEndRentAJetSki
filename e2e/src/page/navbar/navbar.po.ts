import { by, element } from 'protractor';

export class NavbarPage {
    linkHome     = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkProducto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkAlquiler = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

    async clickBotonProductos() {
        await this.linkProducto.click();
    }

    async clickLinkAlquileres() {
        await this.linkAlquiler.click();
    }
}
