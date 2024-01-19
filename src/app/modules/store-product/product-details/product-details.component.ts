import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    BrandDTO,
    BrandService,
    CategoryDTO,
    CategoryService,
    ProductDTO, ProductService,
    TagDTO,
    TagService
} from "../../../../../swagger-api";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{

    @Input()productId:number =0;
    product: ProductDTO;
    @Input() isEdit:boolean = false;
    selectedProductForm: UntypedFormGroup;
    brands: BrandDTO[]=[];
    categories: CategoryDTO[]=[];
    tags: TagDTO[] =[];
    filteredTags : TagDTO[] =[];
    tagsEditMode: boolean = false;
    flashMessage: any;

    constructor( private _formBuilder: UntypedFormBuilder,  private _changeDetectorRef: ChangeDetectorRef,
                 private  brandService: BrandService
                ,private  categoryService: CategoryService,
                 private tagService: TagService,
                 private productService: ProductService
                ) {}

    ngOnInit(): void {
        this.builForm();
        this.getAllTags();
        this.getAllCategory();
        this.getAllBrand();
        if(this.isEdit){
            this.getProductWithDetails();
        }
    }

    builForm(){
        this.selectedProductForm = this._formBuilder.group({
            id               : [''],
            category         : [''],
            name             : ['', [Validators.required]],
            description      : [''],
            tags             : [[]],
            sku              : [''],
            barcode          : [''],
            brand            : [''],
            vendor           : [''],
            stock            : [''],
            reserved         : [''],
            cost             : [''],
            basePrice        : [''],
            taxPercent       : [''],
            price            : [''],
            weight           : [''],
            thumbnail        : [''],
            images           : [[]],
            currentImageIndex: [0], // Image index that is currently being viewed
            active           : [false],
        });
    }
    getProductWithDetails(){
        this.productService.apiProductGetProductWithDetailsGet(this.productId).subscribe(result=>{
            this.product = result;
            this.patchForm();
        })
    }
    patchForm(){
        this.selectedProductForm.patchValue(this.product);
    }
    getAllTags(){
        this.tagService.apiTagGet().subscribe(resullt=>{
            this.tags = resullt;
        })
    }
    getAllBrand(){
        this.brandService.apiBrandGet().subscribe(result=>{
            this.brands = result;
        })
    }
    getAllCategory(){
        this.categoryService.apiCategoryGet().subscribe(result=>{
            this.categories = result;
        })
    }
    filterTags($event: Event) {

    }

    filterTagsInputKeyDown($event: KeyboardEvent) {

    }

    toggleTagsEditMode() {

    }

    shouldShowCreateTagButton(value: string) {

    }

    createTag(value: string) {

    }

    deleteTag(tag: any) {

    }

    updateTagTitle(tag: any, $event: Event) {

    }

    toggleProductTag(tag: any, $event: MatCheckboxChange) {

    }

    cycleImages(b: boolean) {

    }

    deleteSelectedProduct() {

    }

    updateSelectedProduct() {

    }
}
