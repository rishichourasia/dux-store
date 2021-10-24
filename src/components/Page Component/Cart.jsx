import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/actions";

export const Cart = () => {
	const cartPage = useSelector((state) => state.cartPage);
	const dispatch = useDispatch();

	const remove = (id) => {
		dispatch(removeFromCart(id));
		console.log(cartPage);
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
					<button className="btn" onClick={() => remove(item.id)}>
						Remove Item
					</button>
				</div>
			))}
		</div>
	);
};
