import React from "react";
import image1 from "../assets/images/Photos/wes-tindel-wBIOHTpy6gg-unsplash.jpg";
import image2 from "../assets/images/Photos/martin-zdrazil-zlHLVpNEuWA-unsplash.jpg";

const Turbo911 = () => {
	return (
		<div className="bg-colordark text-colorlight md:text-lg lg:grid lg:grid-cols-7 pt-20 pb-20">
			<div className="col-span-4 grid grid-cols-2 lg:pl-10 pl-20  lg:pr-0 pr-20">
				<img className="col-span-1" src={image1} />
				<img className="col-span-1" src={image2} />
			</div>
			<div id="911" className="col-span-3 pl-20 w-3/4">
				<p>
					The <span className="font-bold text-2xl">Porsche 911</span> is
					Porsches most famous car. It has been in continual production for over
					60 year, making it one of the longest running production cars ever.
				</p>
				<b />
				<p>
					The nature of the 911 is very special, it is a rear engine, rear wheel
					(or all wheel) sports car with a flat six. Having so much weight and
					power coming from the back can be dangerous, but thats what makes the
					911 so special, because it manages it so perfectly.
				</p>
				<b />
				<p>
					911 derived Porsches are among the most successful cars in motorsport
					competition across different classes. Winning 24 Hours of Le Mans,
					Daytona. In a pole in 1999 to determine the Car of the Century, the
					911 came 5th.
				</p>
				<b />
				<p>
					Countless version of the 911 have come out across the years. The
					Turbo, Turbo s, GT1, GT2, GT3 and their subsequent RS models. Over one
					million 911's have been produced across its time, which for a high
					performance sports car, is quite a lot.
				</p>
			</div>
		</div>
	);
};

export default Turbo911;
