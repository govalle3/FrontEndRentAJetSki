export class Producto {
    nationalId: string;
    name: string;
    dob: Date;
    idJetSki: string;
    rentTime: Int8Array;
    dateAndTimeRent: Date;

    constructor(nationalId: string, name: string, dob: Date,
        idJetSki: string, rentTime: Int8Array, dateAndTimeRent: Date) {
        this.nationalId = nationalId;
        this.name = name;
        this.dob = dob;
        this.idJetSki = idJetSki;
        this.rentTime = rentTime;
        this.dateAndTimeRent = dateAndTimeRent;
    }
}
