export class UserModel {

    usernamne: string = '';
    name: string = '';
    age: string = '';
    sex: string = '';
    points: number = 0;
    level: number = 0;

    constructor(values = {}) {
        Object.keys(this).forEach(key => {
            if (values && values.hasOwnProperty(key))
                this[key] = values[key];
        });
    }

}