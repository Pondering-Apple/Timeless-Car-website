import React from "react";
import image from "../assets/images/Photos/baptiste-merel-lOUlhSKontk-unsplash(1)-2.jpg";

const sl300 = () => {
	return (
		<div className="*:md:text-lg lg:grid lg:grid-cols-6 *:pt-20 pb-20">
			<div id="300sl" className="col-span-3 *:pl-20 *:w-4/5">
				<p>
					The
					<span className="font-bold text-2xl"> Mercedes-Benz 300 SL</span> is
					seen by many as the first super car. Its light weight long body
					combined with its water-cooled 3.0 Litre straight six engine makes it
					the fastest production car at its time. The coupé version was also the
					first production car to ever have the famous top hinged, gullwing
					doors. With it first being used in the SL's race car version the W194
				</p>
				<br />
				<p>
					The SL stands for "super-leicht" in german, or super light in english,
					weighing 1.5t. Its straigh six engie is capable of producing 240 hp
					which made it one if the most powerful cars of its time. This also
					gave it a top speed of 163 mph (263 km/h)
				</p>
				<br />
				<p>
					The 300 SL's defining and unique style as well as its title of being
					the fastest car at a point in history, has made it one of the most
					saught after classic cars of all time
				</p>
				<br />
				<p>
					Many different versions of the 300 SL have been made, often cheaper
					with a smaller engine size. Mercedes in 2009 released the SLS AMG as a
					spiritual successor to the 300 SL, although, not with the same
					records.
				</p>
			</div>
			<div className="col-span-3 lg:pr-10 pr-20 lg:pl-0 pl-20">
				<img src={image} />
			</div>
		</div>
	);
};

export default sl300;
