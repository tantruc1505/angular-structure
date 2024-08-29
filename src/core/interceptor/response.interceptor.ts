import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";

export const ResponseInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  return next(req).pipe(
    map((event: HttpEvent<any>) => event),
    catchError((error: HttpErrorResponse) => {
      console.log('===== ERROR =====: ', error);
      return throwError(() => new Error('test'));
    })
  );
};