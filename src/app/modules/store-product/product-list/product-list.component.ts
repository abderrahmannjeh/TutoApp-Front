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
     selectedProduct:ProductDTO;
    isLoading:boolean = true;
    constructor(private  productService: ProductService

                )
    {
    }

    ngOnInit(): void {
        this.loadProducts();
    }


    loadProducts(){
        this.productService.apiProductGet().subscribe(result=>{
            this.products = result;
            this.isLoading =false;
            this.closeDetails();
        });
    }
    toggleDetails(product: ProductDTO): void
    {

        // If the product is already selected...
        if ( this.selectedProduct && this.selectedProduct.id === product?.id )
        {
            // Close the details
            this.closeDetails();
            return;
        }
        this.selectedProduct = product;
        console.log(this.selectedProduct);

    }
    closeDetails(): void
    {
        this.selectedProduct = null;
    }
}
