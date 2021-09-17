import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

//Inject from 
@Injectable()
export class ProductsService {
    //aray of products
    products: Product[] = []

    insertProduct(title: string, description: string, price: number) {
        const newProduct = new Product(new Date().toString(), title, description, price)
        this.products.push(newProduct)
    }
}