import { inject, Injectable, Signal } from "@angular/core";
import { Router } from "@angular/router";
import { StorageEntity } from "@seller-backoffice-core/entities/storage.entity";
import { User } from "@seller-backoffice-core/entities/user.entity";
import { Observable, tap } from "rxjs";
import { AuthService } from "./auth.service";
import { HttpStatusCode } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UserService extends StorageEntity {
    private auth = inject(AuthService);
    private router = inject(Router);

    public setUser(user: User): this {
        this.auth.setUser(user);
        return this;
    }

    public get user(): Signal<User | null>{
        return this.auth.user;
    }

    public authenticate(): void{
        this.storeName();
        this.storeEmail();
        this.storeToken();
        this.router.navigate(['/my-account']);
    }

    public unAuthenticate(): void{
        this.cleanAll();
        this.router.navigate([ '/auth/login' ]);
    }

    public storeName() {
        if(!this.user()) return;
        StorageEntity.setItem('_user_name', this.user()!.name);
    }
    public storeEmail() {
        if(!this.user()) return;
        StorageEntity.setItem('_user_email', this.user()!.email);
    }
    public storeToken() {
        if(!this.user()) return;
        StorageEntity.setItem('_user_token', this.user()!.token);
    }

    public get storedName(): string | null{
        return StorageEntity.getItem('_user_name');
    }
    public get storedEmail(): string | null{
        return StorageEntity.getItem('_user_email');
    }
    public get storedToken(): string | null{
        return StorageEntity.getItem('_user_token');
    }

    public clean(prefix: string){
        StorageEntity.removeItem(prefix);
    }

    public cleanAll(){
        const userPrefixes = [
            '_user_name',
            '_user_email',
            '_user_token'
        ];

        userPrefixes.forEach(prefix => {
            StorageEntity.removeItem(prefix);
        });
    }
}