import React from "react";
import image1 from "../assets/images/Photos/hoyoun-lee-3UuEwmmngSo-unsplash.jpg";
import image2 from "../assets/images/Photos/drew-stock-y_3Xvp9XwIE-unsplash(1).jpg";

const Countach = () => {
	return (
		<div className="md:text-lg lg:grid lg:grid-cols-6 pt-20 pb-20 bg-colordark text-colorlight">
			<div className="pl-20  lg:pr-0 pr-20 col-span-3">
				<img className="pb-5" src={image1} />
				<img src={image2} />
			</div>
			<div id="countach" className="col-span-3 pl-20 w-3/4">
				<h1>
					The <span className="font-bold text-2xl">Lamborghini Countach</span>.
					A car many know from the film Wolf of Wall Street, but a car that was
					famous well before the film was made.
				</h1>
				<br />
				<p>
					The 2-door sports car was first introduced to the public in 1970 under
					the name LP500 and then released in 1974, it is the car that pioneered
					the <span className="italic font-light"> "Italian Wedge"</span> design
					which can still be seen in Lamborghini's cars today, as well as their
					competitors. It was also the first production car to contain the
					forward opening doors known as scissor doors, or
					<span className="italic"> "Lamborghini Doors"</span>
				</p>
				<br />
				<p>
					Whilst re-released in 2021 as the Countach LPI 800-4, the original,
					with its retro and square style along with its ownership status, it
					still holds just as much apeal as it did in its release.
				</p>
			</div>
		</div>
	);
};

export default Countach;
