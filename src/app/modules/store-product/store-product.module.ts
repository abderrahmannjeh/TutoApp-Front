import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule, CurrencyPipe, NgClass, NgFor, NgIf, NgTemplateOutlet} from '@angular/common';
import {ProductListComponent} from "./product-list/product-list.component";
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {provideRouter} from "@angular/router";
import {prodRoutes} from "./Store-product.routes";
import {ProductDetailsComponent} from "./product-details/product-details.component";
;


@NgModule({
  declarations: [ProductListComponent,ProductDetailsComponent],
  imports: [
    CommonModule,
      NgIf
      , MatProgressBarModule
      , MatFormFieldModule
      , MatIconModule
      , MatInputModule
      , FormsModule
      , ReactiveFormsModule
      , MatButtonModule
      , MatSortModule
      , NgFor
      , NgTemplateOutlet, MatPaginatorModule, NgClass, MatSlideToggleModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatRippleModule, AsyncPipe, CurrencyPipe
  ],
    providers: [provideRouter(prodRoutes)]

})
export class StoreProductModule { }
