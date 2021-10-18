import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectProduct } from "../actions/actions";
import { useParams } from "react-router-dom";
import { removeProduct } from "../actions/actions";

export const ProductDetails = () => {
	const productDetail = useSelector((state) => state.productDetail);
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

	console.log(productDetail);

	return (
		<div className="card mb-3">
			<img src={productDetail.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{productDetail.title}</h5>
				<p className="card-text">{productDetail.description}</p>
				<p className="card-text">
					<small className="text-muted">{productDetail.price}</small>
				</p>
			</div>
		</div>
	);
};
