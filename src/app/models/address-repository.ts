import { Address } from "./address";

export class AddressRepository
{
    addresses:Address[]=[];
    getAdresses()
    {
        return this.addresses;
    }

    getAddressById(id: string) {
        return this.addresses.find(p=>p.address_id == id);
    }
}