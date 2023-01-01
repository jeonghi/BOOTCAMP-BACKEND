// coupon.controller.js
import {CashService} from "./services/cash.service.js";

export class CouponController {
    constructor(cashService) {
        this.cashService = cashService
    }

    buyCoupon = (req, res) => {
        // 1. 가진 돈 검증하는 코드 (10줄 => 2줄)
        const hasMoney = cashService.checkValue(); // true 또는 false 리턴

        // 2. 쿠폰 구매하는 코드
        if (hasMoney) {
            res.send("쿠폰 구매 완료!!");
        }
    };
}