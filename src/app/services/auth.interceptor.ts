import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private auth:AuthService){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
        const token = this.auth.getToken();
    
       if (token) {
         // If we have a token, we set it to the header
         request = request.clone({
            setHeaders: {Authorization: `Bearer ${token}`}
         });
      }
      return next.handle(request).pipe(
        catchError((err: { status: number; }) => {
          if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
              // redirect user to the logout page
           }
        }
        return throwError(err);
      })
     )
    }    
    
}