import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Cart = () => {
	const cartPage = useSelector((state) => state.cartPage);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log(cartPage);
	}, []);

	return (
		<div>
			<h2>This is cart Page</h2>
		</div>
	);
};
