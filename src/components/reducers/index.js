import { combineReducers } from "redux";
import { CartPage, ProductDetail, ProductList } from "./ProductList";

export const rootReducer = combineReducers({
	fetchProduct: ProductList,
	productDetail: ProductDetail,
	cartPage: CartPage,
});
