import { Sites } from "./sites";

export class SitesRepository
{
    private sites : Sites[] = [
        { id: 1, name: "AFAD"},
        { id: 2, name: "AKUT"},
        { id: 3, name: "AHBAP"},
        { id: 4, name: "Kızılay"},
        { id: 5, name: "Jandarma Arama Kurtarma"},
        { id: 6, name: "Emniyet Genel Müdürlüğü"}
    ];

    getSites(): Sites[] {
        return this.sites;
    }
}