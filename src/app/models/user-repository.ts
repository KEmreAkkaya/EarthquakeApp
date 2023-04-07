import { User } from "./user";

export class UserRepository
{
    private users:User[] =[];
       
    

    getUsers()
    {
        return this.users;
    }

    getUserById(id: string) {
        return this.users.find(p=>p.id == id);
    }

  
}