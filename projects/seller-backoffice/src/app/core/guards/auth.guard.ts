import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { User } from '@seller-backoffice-core/entities/user.entity';
import { UserService } from '@seller-backoffice-core/services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if(userService.storedToken){
    if(!userService.user()){
      const user: User = new User();
      user.create(userService.storedName!, userService.storedEmail!, userService.storedToken);
      userService.setUser(user);
    }
    return true;
  }

  router.navigate(['/auth/login']);
  return false;
};
