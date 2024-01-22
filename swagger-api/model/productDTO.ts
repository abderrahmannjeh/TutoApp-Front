/**
 * TutoApp
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CategoryDTO } from './categoryDTO';
import { UserDTO } from './userDTO';
import { TagDTO } from './tagDTO';
import { BrandDTO } from './brandDTO';


export interface ProductDTO { 
    error?: string | null;
    hasError?: boolean | null;
    id?: number;
    name?: string | null;
    description?: string | null;
    picture?: string | null;
    price?: number;
    categoryID?: number | null;
    brandID?: number | null;
    userID?: string | null;
    weight?: number | null;
    cost?: number | null;
    sku?: string | null;
    basePrice?: number | null;
    tax?: number | null;
    stock?: number;
    reserved?: number;
    isActive?: boolean | null;
    brand?: BrandDTO;
    tags?: Array<TagDTO> | null;
    user?: UserDTO;
    category?: CategoryDTO;
}

