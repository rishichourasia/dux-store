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

export { fetchProducts, selectProduct, removeProduct };
