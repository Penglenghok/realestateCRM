import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

export const APP_AUTH =[
  AuthGuard,
  AuthService

]
