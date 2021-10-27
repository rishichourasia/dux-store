import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addtoCart, priceArray, selectProduct } from "../actions/actions";
import { useParams } from "react-router-dom";
import { removeProduct } from "../actions/actions";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { Loading } from "./Loading";

const highlights = [
	"All Orignal Products",
	"3 Months warrenty",
	"Highest quality manufacturing",
	"Refund available",
];

/////Adding setInterval

export const ProductDetails = () => {
	const productDetail = useSelector((state) => state.productDetail);
	const cartPage = useSelector((state) => state.cartPage);
	const dispatch = useDispatch();
	const [flag, setflag] = useState(false);
	const { productId } = useParams();
	const [isProduct, setProduct] = useState(true);

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
		setTimeout(() => {
			setProduct(false);
		}, 1000);
	};

	useEffect(() => {
		if (productId && productId !== "") apiProduct();

		return () => {
			dispatch(removeProduct());
		};
	}, [productId]); // eslint-disable-line react-hooks/exhaustive-deps

	const addingCart = () => {
		axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
			const data = res.data;
			dispatch(addtoCart(data));
			setflag(true);
			console.log(cartPage);
			dispatch(priceArray(data.price));
		});
	};

	return (
		<>
			{isProduct ? (
				<Loading />
			) : (
				<main className="container">
					<div className="left-column">
						<img
							data-image="red"
							className="active"
							src={productDetail.image}
							alt="img"
						/>
					</div>

					<div className="right-column">
						<div className="product-description">
							<span>{productDetail.category}</span>
							<h1>{productDetail.title}</h1>
							<h2 className="tag">Description</h2>
							<p>{productDetail.description}</p>
						</div>
						<h2 className="tag">Highlights</h2>
						{highlights.map((highlight) => (
							<li key={highlight} className="text-gray-400">
								<span className="text-gray-600">{highlight}</span>
							</li>
						))}

						<div className="product-configuration">
							<div className="cable-config">
								<h3 className="tag">Select Size -</h3>

								<div className="cable-choose">
									<button>Small</button>
									<button>Medium</button>
									<button>Large</button>
								</div>

								<h2 className="tag">Pricing and payment -</h2>
							</div>
						</div>

						<div className="product-price">
							<h2 className="price">₹{productDetail.price}</h2>
							<button onClick={addingCart} className="cart-btn">
								Add to cart
							</button>
						</div>
						<footer className={flag ? "view" : "none"}>
							<CheckCircleIcon className="h-6 w-6 lol" aria-hidden="true" />
							<h2>Successfully added to Cart! Click on cart icon to view.</h2>
						</footer>
					</div>
				</main>
			)}
		</>
	);
};
