import {APP_INITIALIZER, inject, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {
    PreloadAllModules,
    provideRouter,
    RouterModule,
    RouterOutlet,
    withInMemoryScrolling,
    withPreloading
} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {provideAnimations} from "@angular/platform-browser/animations";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {appRoutes} from "./app.routes";
import {DateAdapter, MAT_DATE_FORMATS} from "@angular/material/core";
import {LuxonDateAdapter} from "@angular/material-luxon-adapter";
import {provideTransloco, TranslocoService} from "@ngneat/transloco";
import {TranslocoHttpLoader} from "./core/transloco/transloco.http-loader";
import {firstValueFrom} from "rxjs";
import {provideAuth} from "./core/auth/auth.provider";
import {provideIcons} from "./core/icons/icons.provider";
import {provideFuse} from "../@fuse";
import {mockApiServices} from "./mock-api";
import {ApiModule, Configuration} from "../../swagger-api";
import {environment} from "../environments/envirment";
import {CommonModule} from "@angular/common";
import {IconsService} from "./core/icons/icons.service";


export function AuthenticationAPIConfigurationFactory(): Configuration {
    return new Configuration({ basePath: environment.roleManagementApiUrl });
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
      ApiModule.forRoot(AuthenticationAPIConfigurationFactory),
      BrowserModule,
      HttpClientModule,
      RouterOutlet,
      RouterModule.forRoot(appRoutes)
  ],
    providers: [
        IconsService,
        provideAnimations(),
        provideHttpClient(),
        provideRouter(appRoutes,
            withPreloading(PreloadAllModules),
            withInMemoryScrolling({scrollPositionRestoration: 'enabled'}),
        ),

        // Material Date Adapter
        {
            provide: DateAdapter,
            useClass: LuxonDateAdapter,
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
                parse: {
                    dateInput: 'D',
                },
                display: {
                    dateInput: 'DDD',
                    monthYearLabel: 'LLL yyyy',
                    dateA11yLabel: 'DD',
                    monthYearA11yLabel: 'LLLL yyyy',
                },
            },
        },

        // Transloco Config
        provideTransloco({
            config: {
                availableLangs: [
                    {
                        id: 'en',
                        label: 'English',
                    },
                    {
                        id: 'tr',
                        label: 'Turkish',
                    },
                ],
                defaultLang: 'en',
                fallbackLang: 'en',
                reRenderOnLangChange: true,
                prodMode: true,
            },
            loader: TranslocoHttpLoader,
        }),
        {
            // Preload the default language before the app starts to prevent empty/jumping content
            provide: APP_INITIALIZER,
            useFactory: () => {
                const translocoService = inject(TranslocoService);
                const defaultLang = translocoService.getDefaultLang();
                translocoService.setActiveLang(defaultLang);

                return () => firstValueFrom(translocoService.load(defaultLang));
            },
            multi: true,
        },

        // Fuse
        provideAuth(),
        provideIcons(),
        provideFuse({
            mockApi: {
                delay: 0,
                services: mockApiServices,
            },
            fuse: {
                layout: 'classy',
                scheme: 'light',
                screens: {
                    sm: '600px',
                    md: '960px',
                    lg: '1280px',
                    xl: '1440px',
                },
                theme: 'theme-rose',
                themes: [
                    {
                        id: 'theme-default',
                        name: 'Default',
                    },
                    {
                        id: 'theme-brand',
                        name: 'Brand',
                    },
                    {
                        id: 'theme-teal',
                        name: 'Teal',
                    },
                    {
                        id: 'theme-rose',
                        name: 'Rose',
                    },
                    {
                        id: 'theme-purple',
                        name: 'Purple',
                    },
                    {
                        id: 'theme-amber',
                        name: 'Amber',
                    },
                ],
            },
        }),
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
