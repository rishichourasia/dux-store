import React from "react";

export default function Navbar() {
	return (
		<div>
			<nav>
				<div className="nav-wrapper">
					<span className="brand-logo">Dux Store</span>
				</div>
				<a className="btn btn-icon-primary">
					<span class="btn-icon">
						<i class="fas fa-shopping-cart"></i>
					</span>
				</a>
			</nav>
		</div>
	);
}
