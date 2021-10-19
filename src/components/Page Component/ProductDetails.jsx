import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addtoCart, selectProduct } from "../actions/actions";
import { Link, useParams } from "react-router-dom";
import { removeProduct } from "../actions/actions";
// import { Button } from "bootstrap";

export const ProductDetails = () => {
	const productDetail = useSelector((state) => state.productDetail);
	// const addToCart = useSelector((state) => state.addToCart);
	const dispatch = useDispatch();
	const { productId } = useParams();

	const apiProduct = () => {
		axios
			.get(`https://fakestoreapi.com/products/${productId}`)
			.then((res) => {
				const data = res.data;
				dispatch(selectProduct(data));
			})
			.catch((err) => {
				console.error(err);
			});
	};

	useEffect(() => {
		if (productId && productId !== "") apiProduct();
		return () => {
			dispatch(removeProduct());
		};
	}, [productId]); // eslint-disable-line react-hooks/exhaustive-deps

	// console.log(productDetail);

	const addingCart = () => {
		axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
			const data = res.data;
			dispatch(addtoCart(data));
			console.log("added to cart");
		});
	};

	return (
		<div className="card mb-3">
			<img src={productDetail.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{productDetail.title}</h5>
				<p className="card-text">{productDetail.description}</p>
				<p className="card-text">
					<h3 className="text-muted">{productDetail.price}</h3>
				</p>
			</div>
			<button onClick={addingCart} className="btn btn-primary">
				Add To Cart
			</button>
			<Link to="/cart">
				<button className="btn btn-primary">View Cart</button>
			</Link>
		</div>
	);
};
