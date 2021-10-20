export const ProductList = (state = [], action) => {
	if (action.type === "FETCH_PRODUCTS") {
		return action.payload;
	}
	return state;
};

export const ProductDetail = (state = [], action) => {
	if (action.type === "SELECT_PRODUCT") {
		return action.payload;
	} else if (action.type === "REMOVE_PRODUCT") {
		return [];
	}
	return state;
};

export const CartPage = (state = [], action) => {
	if (action.type === "ADD_TO_CART") {
		return [...state, action.payload];
	} else if (action.type === "REMOVE_CART") {
		return state.filter((item, index) => index !== action.payload);
	}
	return state;
};
