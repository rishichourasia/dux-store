import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/actions";

export const Cart = () => {
	const cartPage = useSelector((state) => state.cartPage);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log(cartPage);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const remove = (id) => {
		// dispatch(removeFromCart(id));
	};

	return (
		<div>
			<h2>This is cart Page</h2>
			{cartPage.map((item, index) => (
				<div className="card" key={index}>
					<div className="image">
						<img src={item.image} className="img" alt="img" />
					</div>
					<div className="details">
						<h3>{item.title}</h3>
						<p>{item.description}</p>
						<h4>{item.price}</h4>
					</div>
					<button className="btn danger" onClick={remove(item.id)}>
						Remove item
					</button>
				</div>
			))}
		</div>
	);
};
