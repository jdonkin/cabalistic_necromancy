import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError} from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()

export class ErrorInterceptor implements HttpInterceptor{

    constructor(private _router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err:any)=>{
                if (err instanceof HttpErrorResponse){
                    this._router.navigate(['error']);
                }
                return of(err);
            })
        );
    }

}