import React from "react";
import image1 from "../assets/images/Photos/nick-russill-mX8Xe7UV41k-unsplash.jpg";
import image2 from "../assets/images/Photos/ulf-meyer-ycxOJpTj1qQ-unsplash(1)-3.jpg";

const db5 = () => {
	return (
		<div className="*:md:text-lg lg:grid lg:grid-cols-6 *:pt-20 pb-20">
			<div id="db5" className="col-span-3 *:pl-20">
				<p className="w-4/5">
					<span className="font-bold text-2xl"> Aston Martin DB5 </span>is the
					car for British classic cars. Made known by the James Bond films, Its
					small size but quick nature along with its smooth curves, makes it the
					dream car for many.
				</p>
				<br />
				<p className="w-4/5">
					The successor to the Aston Martin DB4, the DB5 was originally built
					for the British Grand Touring race series. Its 4.0 Litre inline-six
					engine kept its speed and agility close, achieving 0-60mph (100km/h)
					in around 8 seconds with a top speed of 145mph (233km/h).
				</p>
				<br />
				<p className="w-4/5 pb-20">
					The DB5 has such a history for Aston Martin and British enginering
					that 25 models were made in 2020, containing many of the gadgets
					featured in the James Bond film Golfinger.
				</p>
				<img className="pt-20 lg:pr-10 pr-20" src={image1} />
			</div>
			<div className="col-span-3 pr-20 lg:pr-12 pl-20 lg:pl-0">
				<img src={image2} />
			</div>
		</div>
	);
};

export default db5;
