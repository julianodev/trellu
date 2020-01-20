import httpClient from '@/core/http/http-common.service';

interface IUser {
    login?: string,
    id?: number,
    avatar_url: string,
    name: string,
    company?: string,
    blog?: string,
    location?: string,
    email?: string,
    bio?: string
}

class UserService {

    user: IUser = {
        avatar_url: '',
        name: ''
    };

    private baseResource: string = `https://api.github.com/`;

    constructor() {
       if(this.hasUser){
           this.user = JSON.parse(localStorage.getItem("user") as string);
       }
    }

    getUserAsync(username: string) {
        const resource: string = `users/${username}`;
        const apiUrl: string = `${this.baseResource}${resource}`;
        return new Promise<IUser>((resolve, reject) => {
            httpClient.get<IUser>(apiUrl)
                .then(({ data }) => {
                    this.saveUser(data);
                    resolve(data);
                })
                .catch(error => reject(error));
        });
    }



    private saveUser(user: IUser) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    get avatar(): string {
        return this.user.avatar_url;
    }

    get name(): string {
        return this.user.name;
    }

    get hasUser() {
        return localStorage.getItem('user') !== null;
    }
}

export default new UserService();