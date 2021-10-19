import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchProducts } from "../actions/actions";
import { Link } from "react-router-dom";

export const ProductList = () => {
	const fetchProduct = useSelector((state) => state.fetchProduct);
	const dispatch = useDispatch();

	useEffect(() => {
		function apiProduct() {
			axios
				.get("https://fakestoreapi.com/products")
				.then((res) => {
					const data = res.data;
					dispatch(fetchProducts(data));
				})
				.catch((err) => {
					console.error(err);
				});
		}
		apiProduct();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			{fetchProduct.map((product) => {
				return (
					<div className="row" key={product.id}>
						<div className="col s12 m6">
							<Link to={`/product/${product.id}`}>
								<div className="card">
									<div className="card-image">
										<img
											className="list-image"
											src={product.image}
											alt="iamage"
										/>
										<span className="btn-floating halfway-fab waves-effect waves-light red">
											<i className="material-icons">View</i>
										</span>
									</div>
									<div className="card-content">
										<span className="card-title">{product.title}</span>
										<p>{product.description}</p>
									</div>
								</div>
							</Link>
						</div>
					</div>
				);
			})}
		</>
	);
};
