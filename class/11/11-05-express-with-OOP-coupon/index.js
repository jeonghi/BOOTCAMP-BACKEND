import express from "express";
import {CouponController} from "./mvc/controllers/coupon.controller.js";
import {ProductController} from "./mvc/controllers/product.controller.js";

const app = express();


const productController = new ProductController()
// 상품 구매하기
app.post("/products/buy",productController.buyProduct);

// 상품 환불하기
app.post("/products/refund",productController.refundProduct);

// 쿠폰 구매하기
const couponController = new CouponController()
app.post("/coupons/buy", couponController.buyCoupon);

app.listen(3000);