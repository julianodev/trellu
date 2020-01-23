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
     
    }

    getUserAsync(username: string) {
        const resource: string = `users/${username}`;
        const apiUrl: string = `${this.baseResource}${resource}`;
        return new Promise<IUser>((resolve, reject) => {
            httpClient.get<IUser>(apiUrl)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(error => reject(error));
        });
    }
}

export default new UserService();