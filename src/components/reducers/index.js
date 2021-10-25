import { combineReducers } from "redux";
import { CartPage, PriceSum, ProductDetail, ProductList } from "./ProductList";

export const rootReducer = combineReducers({
	fetchProduct: ProductList,
	productDetail: ProductDetail,
	cartPage: CartPage,
	priceSum: PriceSum,
});
