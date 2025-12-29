import { Injectable, signal, Signal, WritableSignal } from "@angular/core";
import { User } from "@seller-backoffice-core/entities/user.entity";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly User: WritableSignal<User | null> = signal(null);

    public setUser(user: User) {
        this.User.set(user);
    }

    public get user(): Signal<User | null>{
        return this.User;
    }
}