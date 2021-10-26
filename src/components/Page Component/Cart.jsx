import { TrashIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/actions";
import Empty from "./Empty";
import Success from "./Success";

export const Cart = () => {
	const cartPage = useSelector((state) => state.cartPage);
	const dispatch = useDispatch();
	const priceSum = useSelector((state) => state.priceSum);
	const [success, setSuccess] = useState(false);

	const isCartPage = cartPage.length > 0;

	const remove = (id) => {
		dispatch(removeFromCart(id));
	};

	const checkoutMessage = () => {
		setSuccess(true);
	};

	return (
		<div>
			{isCartPage ? (
				success ? (
					<Success />
				) : (
					<>
						<h2 className="title">Shopping Cart</h2>
						<div className="container mx-auto full-width">
							<div className="left-cart">
								<h1>Shopping Cart -</h1>
								{cartPage.map((item, index) => (
									<div
										key={index}
										className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mar"
									>
										<div className="md:flex mf">
											<div className="leftside">
												<div className="md:flex-shrink-0">
													<img
														className="h-48 w-full object-cover md:h-full md:w-48"
														src={item.image}
														alt="Man looking at item at a store"
													/>
												</div>
												<div className="p-8 chota">
													<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
														{item.category}
													</div>
													<p className="block mt-1 text-lg leading-tight font-medium text-black">
														{item.title}
													</p>
													<p className="mt-2 text-black-800 font-medium bold">
														₹{item.price}
													</p>
												</div>
											</div>
											<TrashIcon
												onClick={() => remove(item.id)}
												className="trashicon"
											></TrashIcon>
										</div>
									</div>
								))}
							</div>
							<div className="right-cart">
								<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
									<div className="md:flex">
										<div className="p-8">
											<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
												Billing Info
											</div>
											<div className="bill-head">
												<div className="margin">
													<p className="block mt-1 text-lg leading-tight font-medium text-gray">
														Shipping Charges
													</p>
													<p className="block mt-1 text-lg leading-tight font-medium text-black">
														Grand Total
													</p>
												</div>
												<div>
													<p className="block mt-1 text-lg leading-tight font-medium text-gray">
														₹100
													</p>
													<p className="block mt-1 text-lg leading-tight font-medium text-black">
														₹{priceSum}
													</p>
												</div>
											</div>
											<p className="mt-2 text-gray-500">
												Inclusive of all Taxes
											</p>
										</div>
									</div>
									<button onClick={checkoutMessage} className="cart-btn full">
										Checkout
									</button>
								</div>
							</div>
						</div>
					</>
				)
			) : (
				<Empty />
			)}
		</div>
	);
};
