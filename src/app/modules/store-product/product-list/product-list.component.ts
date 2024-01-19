import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    BrandDTO,
    BrandService,
    CategoryDTO,
    CategoryService,
    ProductDTO,
    ProductService
} from "../../../../../swagger-api";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{

     products: ProductDTO[]=[];

    isLoading:boolean = true;
    constructor(private  productService: ProductService

                )
    {
    }

    ngOnInit(): void {
        this.productService.apiProductGet().subscribe(result=>{
            this.products = result;
            this.isLoading =false;
        })
    }
}