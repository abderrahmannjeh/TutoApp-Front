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
import { CommandeDTO } from './commandeDTO';
import { ProductDTO } from './productDTO';


export interface LigneCommandeDTO { 
    error?: string | null;
    hasError?: boolean | null;
    id?: number;
    qte?: number;
    price?: number;
    product?: ProductDTO;
    commande?: CommandeDTO;
}

