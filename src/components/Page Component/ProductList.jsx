import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchProducts } from "../actions/actions";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";

export const ProductList = () => {
	const fetchProduct = useSelector((state) => state.fetchProduct);
	const dispatch = useDispatch();
	const [isProduct, setProduct] = useState(true);

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
		setProduct(false);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			{isProduct ? (
				<Loading />
			) : (
				<div className="bg-white">
					<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 wid">
						<h2 className="sr-only">Products</h2>

						<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
							{fetchProduct.map((product) => (
								<div key={product.id} href={product.href} className="group">
									<Link to={`/product/${product.id}`}>
										<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 white">
											<img
												src={product.image}
												alt="img"
												className="w-full h-full object-center object-cover group-hover:opacity-75"
											/>
										</div>
										<h3 className="mt-4 text-sm text-gray-700">
											{product.title}
										</h3>
										<p className="mt-1 text-lg font-medium text-gray-900">
											₹{product.price}
										</p>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export const NewArrival = () => {
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
			<div className="bg-white">
				<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 wid">
					<h2 className="sr-only">Products</h2>

					<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{fetchProduct.slice(-6).map((product) => (
							<div key={product.id} href={product.href} className="group">
								<Link to={`/product/${product.id}`}>
									<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 white">
										<img
											src={product.image}
											alt="img"
											className="w-full h-full object-center object-cover group-hover:opacity-75"
										/>
									</div>
									<h3 className="mt-4 text-sm text-gray-700">
										{product.title}
									</h3>
									<p className="mt-1 text-lg font-medium text-gray-900">
										₹{product.price}
									</p>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
