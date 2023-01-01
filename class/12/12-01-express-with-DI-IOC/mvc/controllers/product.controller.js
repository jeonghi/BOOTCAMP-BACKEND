// product.controller.js
import {ProductService} from "./services/product.service.js";

export class ProductController {

    constructor(cashService, productService) {
        this.cashService = cashService
        this.productService = productService
    }

    buyProduct = (req, res) => {
        // 1. 가진 돈 검증하는 코드(10줄 => 2줄)
        const hasMoney = this.cashService.checkValue() // true 또는 false

        // 2. 판매여부 검증하는 코드(10줄 => 2줄)
        const isSoldout = this.productService.checkSoldout() // true 또는 false

        // 3. 상품 구매하는 코드
        if(hasMoney && !isSoldout) {
            res.send('상품을 구매합니다.')
        }
    }

    refundProduct = (req, res) => {
        // 1. 판매여부 검증하는 코드(10줄 => 2줄)
        const isSoldout = this.productService.checkSoldout() // true 또는 false

        // 2. 상품 환불하는 코드
        if(isSoldout){
            res.send('상품을 환불합니다.')
        }
    }
}