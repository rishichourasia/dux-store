import {
	DeviceTabletIcon,
	FolderRemoveIcon,
	TrashIcon,
	UserRemoveIcon,
} from "@heroicons/react/outline";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/actions";

export const Cart = () => {
	const cartPage = useSelector((state) => state.cartPage);
	const dispatch = useDispatch();

	const remove = (id) => {
		dispatch(removeFromCart(id));
		console.log(cartPage);
	};
	useEffect(() => {
		console.log(cartPage);
	}, [cartPage]);

	return (
		<>
			<h2 className="title">Shopping Cart</h2>
			<div className="container mx-auto full-width">
				<div className="left-cart">
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
								<TrashIcon className="trashicon"></TrashIcon>
							</div>
						</div>
					))}
				</div>
				<div className="right-cart">
					<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
						<div className="md:flex">
							<div className="p-8">
								<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
									Case study
								</div>
								<p className="block mt-1 text-lg leading-tight font-medium text-black">
									Finding customers for your new business
								</p>
								<p className="mt-2 text-gray-500">
									Getting a new business off the ground is a lot of hard work.
									Here are five ideas you can use to find your first customers.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
