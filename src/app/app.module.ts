import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiModule, Configuration} from "../../swagger-api";
import {environment} from "../environments/envirment";


export function AuthenticationAPIConfigurationFactory(): Configuration {
    return new Configuration({ basePath: environment.roleManagementApiUrl });
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      ApiModule.forRoot(AuthenticationAPIConfigurationFactory),
  ]
})
export class AppModule { }
