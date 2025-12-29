import { AuthService } from "@seller-backoffice-core/services/auth.service";
import { AuthApiService } from "./auth.api.service";
import { AuthFacade } from "./auth.facade";
import { UserService } from "@seller-backoffice-core/services/user.service";

export function authProviders(): any[]{
    return [
        AuthApiService,
        UserService,
        AuthFacade,
    ];
}