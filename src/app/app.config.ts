import { ApplicationConfig, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '../routes/app.routes';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { RequestInterceptorFn } from 'src/core/interceptor/request.interceptor';
import { ResponseInterceptorFn } from 'src/core/interceptor/response.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LANGUAGES } from 'src/core/constants/languages.const';
import { environment } from 'src/environments/environment';

const HttpLoaderFactory = (httpClient: HttpClient): TranslateHttpLoader => {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        RequestInterceptorFn, 
        ResponseInterceptorFn
      ])
    ),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: environment.language,
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    )
  ]
};
