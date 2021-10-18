import { combineReducers } from "redux";
import { ProductDetail, ProductList } from "./ProductList";

export const rootReducer = combineReducers({
	fetchProduct: ProductList,
	productDetail: ProductDetail,
});
