import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addtoCart, selectProduct } from "../actions/actions";
import { Link, useParams } from "react-router-dom";
import { removeProduct } from "../actions/actions";
// import { Button } from "bootstrap";
// import { StarIcon } from '@heroicons/react/solid'
// import { RadioGroup } from '@headlessui/react'

const highlights = [
	"All Orignal Products",
	"3 Months warrenty",
	"Highest quality manufacturing",
	"Refund available",
];

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

	const successMessage = () => {
		return (
			<div class="alert success-alert">
				<h3>Success Alert Message</h3>
				<a class="close">&times;</a>
			</div>
		);
	};

	const addingCart = () => {
		axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
			const data = res.data;
			dispatch(addtoCart(data));
			console.log("added to cart");
			successMessage();
		});
	};

	return (
		<>
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
				</div>
			</main>
		</>
	);
};
