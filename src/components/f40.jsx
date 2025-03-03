import React from "react";
import image1 from "../assets/images/Photos/richard-fullbrook-K5slmsd5HiQ-unsplash(1).jpg";
import image2 from "../assets/images/Photos/kajetan-daroch-evnlVYsKp3E-unsplash.jpg";
import image3 from "../assets/images/Photos/edoardo-giudici-saraval-LGgpqhSUMyc-unsplash.jpg";

const F40 = () => {
	return (
		<div className="*:md:text-lg lg:grid lg:grid-cols-7 *:pt-20 pb-20">
			<div id="f40" className="col-span-3 *:pl-20">
				<p className="w-5/6">
					The <span className="font-bold text-2xl">Ferrari F40</span>. Seen as
					the best Ferrari by many, but certainly one of the most magnificent.
					It is the most well known of them all. The successor to the 288 GTO,
					the F40, with a 5 speed manual transmission and a 2.9L
					twin-turbocharged V8 built by Nicola Materazzi, capable of producing
					471-477 horsepower, it produces a sound that is to be remembered.
				</p>
				<br />
				<p className="w-5/6">
					The F40 was designed by Pietro Camardella alongside Aldo Provarone,
					while not practical, as it had no luggage space, it was immediatley
					saught after its release by collectors, with very few of them being
					used for driving.
				</p>
				<br />
				<p className="w-5/6">
					This was the most expensive Ferrari sold by Ferrari at the time,
					selling for US$400,000 in 1987. Five times that of its predecessor.
					With only 1,311 ever produced. Even though that is around their
					average production numbers, the F40 has become one of the most saught
					after Ferrari's of all time.
				</p>
				<img src={image1} className="lg:pl-20 lg:pr-10 pr-20 pt-10" />
			</div>
			<div className="col-span-4 lg:pr-10 pr-20  lg:pl-0 pl-20 grid grid-cols-2 h-auto">
				<img src={image2} />
				<img src={image3} />
			</div>
		</div>
	);
};

export default F40;
