export class User{
    private Name!: string;
    private Email!: string;
    private Token!: string;

    public create(name: string, email: string, token: string){
        this.name = name;
        this.email = email;
        this.token = token;
    }

    private set name(name: string) {
        this.Name = name;
    }

    public get name(): string {
        return this.Name;
    }

    private set email(email: string) {
        this.Email = email;
    }

    public get email(): string {
        return this.Email;
    }

    private set token(token: string) {
        this.Token = token;
    }

    public get token(): string {
        return this.Token;
    }
}