// product.controller.js
import {CashService} from "./services/cash.service.js";
import {ProductService} from "./services/product.service.js";

export class ProductController {

    buyProduct = (req, res) => {
        // 1. 가진 돈 검증하는 코드(10줄 => 2줄)
        const moneyService = new CashService()
        const hasMoney = moneyService.checkValue() // true 또는 false

        // 2. 판매여부 검증하는 코드(10줄 => 2줄)
        const productService = new ProductService()
        const isSoldout = productService.checkSoldout() // true 또는 false

        // 3. 상품 구매하는 코드
        if(hasMoney && !isSoldout) {
            res.send('상품을 구매합니다.')
        }
    }

    refundProduct = (req, res) => {
        // 1. 판매여부 검증하는 코드(10줄 => 2줄)
        const productService = new ProductService()
        const isSoldout = productService.checkSoldout() // true 또는 false

        // 2. 상품 환불하는 코드
        if(isSoldout){
            res.send('상품을 환불합니다.')
        }
    }
}