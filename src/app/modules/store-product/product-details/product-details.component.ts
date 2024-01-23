import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    BrandDTO,
    BrandService,
    CategoryDTO,
    CategoryService, FileUploadService,
    ProductDTO, ProductService,
    TagDTO,
    TagService
} from "../../../../../swagger-api";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {HttpClient, HttpEventType, HttpRequest} from "@angular/common/http";
import {environment} from "../../../../environments/envirment";

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
    selectedFile: File;
    working = false;
    uploadFile: File | null;
    uploadFileLabel: string | undefined = 'Choose an image to upload';
    uploadProgress: number;
    uploadUrl: string;
    constructor( private _formBuilder: UntypedFormBuilder,  private _changeDetectorRef: ChangeDetectorRef,
                 private  brandService: BrandService
                ,private  categoryService: CategoryService,
                 private tagService: TagService,
                 private productService: ProductService,
                 private fileService:FileUploadService,
                 private http: HttpClient
                ) {}

    ngOnInit(): void {
        this.builForm();
        this.getAllTags();
        this.getAllCategory();
        this.getAllBrand();
        if(this.isEdit){
            this.getProductWithDetails();
            this.patchForm()
        }
    }

    builForm(){
        this.selectedProductForm = this._formBuilder.group({
            id               : [''],
            categoryID         : [''],
            name             : ['', [Validators.required]],
            description      : [''],
            tags             : [[]],
            sku              : [''],
            barcode          : [''],
            brandID          : [''],
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
        this.productService.apiProductGetProductWithDetailsIdGet(this.productId).subscribe(result=>{
            this.product = result;
            this.patchForm();
        })
    }
    patchForm(){
        console.log(this.product);

        this.selectedProductForm.patchValue(this.product);
    }
    getAllTags(){
        this.tagService.apiTagGet().subscribe(resullt=>{
            this.tags = resullt;
            this.filteredTags = resullt;
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
    filterTags(event): void
    {
        // Get the value
        const value = event.target.value.toLowerCase();

        // Filter the tags
        this.filteredTags = this.tags.filter(tag => tag.name.toLowerCase().includes(value));
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
    triggerFileInput(): void {
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
          fileInput.click();
        }
      }
    handleFileInput(files: FileList) {
        if (files.length > 0) {
            this.uploadFile = files.item(0);
            this.uploadFileLabel = this.uploadFile?.name;
            this.upload();
        }
    }

    upload() {
        if (!this.uploadFile) {
            alert('Choose a file to upload first');
            return;
        }

        const formData = new FormData();
        formData.append(this.uploadFile.name, this.uploadFile);

        const url = `${environment.roleManagementApiUrl}/api/FileUpload`;
        const uploadReq = new HttpRequest('POST', url, formData, {
            reportProgress: true,
        });

        this.uploadUrl = '';
        this.uploadProgress = 0;
        this.working = true;

        this.http.request(uploadReq).subscribe((event: any) => {
            this.product.picture = event?.body?.url;

        }, (error: any) => {
            console.error(error);
        }).add(() => {
            this.working = false;
        });
    }


}


