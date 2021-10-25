const fetchProducts = (product) => {
	return {
		type: "FETCH_PRODUCTS",
		payload: product,
	};
};

const selectProduct = (product) => {
	return {
		type: "SELECT_PRODUCT",
		payload: product,
	};
};
const removeProduct = () => {
	return {
		type: "REMOVE_PRODUCT",
	};
};

const addtoCart = (product) => {
	return {
		type: "ADD_TO_CART",
		payload: product,
	};
};

const removeFromCart = (id) => {
	return {
		type: "REMOVE_CART",
		payload: id,
	};
};
const priceArray = (price) => {
	return {
		type: "ADD_PRICE",
		payload: price,
	};
};

export {
	fetchProducts,
	selectProduct,
	removeProduct,
	addtoCart,
	removeFromCart,
	priceArray,
};
