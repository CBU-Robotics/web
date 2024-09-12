import "../css/sponsors.css";

import * as React from "react";

class Sponsors extends React.Component {
	constructor(props: {} | Readonly<{}>) {
		super(props);
	}

	render(): React.JSX.Element {
		return <div className="sponsors">
				<div className="yr2023">
				<ul>
					<li>
						<img src="https://mma.prnewswire.com/media/378146/bourns_logo_new_Logo.jpg?p=facebook"></img>
						<div>Bourns</div>
					</li> 
					<li>
						<img src="https://images.squarespace-cdn.com/content/v1/5b6229722714e53c99e6ca8a/81f7ff10-cb69-4b57-aeb1-89826f7a919e/2022-12-28+Logo+Blue+Transparent.png?format=1500w"></img>
						<div>VE Signs</div></li>
					<li>
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJdunXj1JLjp43JI1rFvkyd1IbAJ8JJLooA&s"></img>
						<div>Applied Medical</div>
					</li>
					<li>
						<img src="https://img.pr.com/o1200/release/2210/515270/pressrelease_515270_1664905901.jpeg"></img>
						<div>Professional Plastic</div>
					</li>
					<li>
						<img src="https://systemgoit.com/wp-content/uploads/2017/09/logo.png"></img>
						<div>SystemGo IT</div>
					</li> 
					<li>
						<img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_3a7b992f091003220d0e405c6eb6095c/onshape.png"></img>
						<div>onshape</div>
					</li>
					<li>
						<img src="https://yt3.googleusercontent.com/qD622vWHZaM_-TuHMayew6SqHwKpgcMopLoCgTLHnwC14lzIMHVmYiPk-sxa-Mg20A6FwnpC5n0=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"></img>
						<div>ePlastics</div>
					</li>
				</ul>
				</div>
				<div className="yr2024">
					<ul>
					<li>
						<img src="https://yt3.googleusercontent.com/qD622vWHZaM_-TuHMayew6SqHwKpgcMopLoCgTLHnwC14lzIMHVmYiPk-sxa-Mg20A6FwnpC5n0=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"></img>
						<div>ePlastics</div>
					</li>
					<li>
						<img src="https://cdn.shopify.com/s/files/1/0259/1948/8059/files/MatterHackers_Logo_Blue_480x480.png?v=1628696004"></img>
						<div>Matter Hackers</div>
					</li>
					<li>
						<img src="https://support.network/wp-content/uploads/om-location-logo-1024x151.png"></img>
						<div>OfficeMax Riverside</div>
					</li>
					<li>
						<img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_3a7b992f091003220d0e405c6eb6095c/onshape.png"></img>
						<div>onshape</div>
					</li>
					</ul>
				</div>
			</div>
	}
}

export default Sponsors;