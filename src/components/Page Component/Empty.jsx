import React from "react";

export default function Empty() {
	return (
		<div className="rt-container">
			<div className="col-rt-12">
				<div className="Scriptcontent">
					<div id="card" className="animated fadeIn empty-box">
						<div id="upper-side" className="emp">
							<h2 id="status">Cart is Empty !</h2>
						</div>
						<div id="lower-side">
							<p id="message">Add Something to the cart first.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
