import React from "react";
import image1 from "../assets/images/Photos/mclarenF1_image1-3 copy.png";
import image2 from "../assets/images/Photos/mclarenF1_image3.jpg";
import image3 from "../assets/images/Photos/mclarenf1_Image_1.jpg";

const mclarenf1 = () => {
	return (
		<div className="bg-colordark text-colorlight md:text-lg lg:grid lg:grid-cols-7 pt-20 pb-20">
			<div className="col-span-4 grid grid-cols-2 lg:pl-10 pl-20  lg:pr-0 pr-20">
				<img
					className="col-span-1 lg:pt-10"
					src={image1}
					alt="McLaren F1 Image 1"
				/>
				<img
					className="col-span-1 lg:pt-10"
					src={image2}
					alt="McLaren F1 Image 3"
				/>
				<img className="col-span-2" src={image3} alt="McLaren F1 Image 2" />
			</div>
			<div id="mclarenf1" className="col-span-3 pl-20 w-3/4">
				<p>
					The <span className="font-bold text-2xl">McLaren F1</span> was
					McLaren's first ever solo production car, and it is a car to be
					remembered. Its price of US$815,000 made it one of the most expensive
					cars of its era, but it had a good reason.
				</p>
				<br />
				<p>
					The McLaren F1 was the fastest car in the world when it was released
					in 1992. It held that record for 13 years until it was beaten by the
					Bugatti Veyron in 2005. However, it still remains the fastest car with
					a naturally aspirated engine. Its 6.1 Litre V12 engine produced 618
					hp, making the car capable of reaching up to 240.1 mph (386.4 km/h),
					surpassing the previous record by 23 mph (37 km/h).
				</p>
				<br />
				<p>
					The F1 had a unique interior setup, providing 3 seats, with the driver
					in the middle and 2 passengers on either side and further back. The
					car was also the first production car to have a carbon fibre
					monocoque, making it much lighter than its rivals.
				</p>
				<br />
				<p>
					This car is a record-breaker, incorporating next-generation technology
					and pushing the limits. It was perfected with the help of Formula 1
					legend Ayrton Senna. With the record of being the fastest car and the
					genes of F1, it is no wonder it has become one of the most expensive
					cars ever sold at auction, fetching upwards of US$20 million.
				</p>
			</div>
		</div>
	);
};

export default mclarenf1;
