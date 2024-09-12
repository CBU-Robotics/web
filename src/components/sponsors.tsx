import "../css/sponsors.css";

import * as React from "react";

class Sponsors extends React.Component {
	constructor(props: {} | Readonly<{}>) {
		super(props);
	}

	render(): React.JSX.Element {
		return <section id="sponsors" className="sponsors">
        <h2>This Year's Sponsors</h2>
        <ul className="sponsor-grid">
          <li>
            <img src="eplastics.jpg"></img>
            <div>ePlastics</div>
          </li>
          <li>
            <img src="matter-hackers.webp"></img>
            <div>Matter Hackers</div>
          </li>
          <li>
            <img src="officemax.png"></img>
            <div>OfficeMax Riverside</div>
          </li>
          <li>
            <img src="onshape.webp"></img>
            <div>onshape</div>
          </li>
        </ul>
        <h2>Previous Sponsors</h2>
        <ul className="sponsor-grid">
          <li>
            <img src="bourns.jpg"></img>
            <div>Bourns</div>
          </li> 
          <li>
            <img src="ve-signs.png"></img>
            <div>VE Signs</div></li>
          <li>
            <img src="applied-medical.png"></img>
            <div>Applied Medical</div>
          </li>
          <li>
            <img src="professional-plastics.jpeg"></img>
            <div>Professional Plastics</div>
          </li>
          <li>
            <img src="systemgoit.png"></img>
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
			</section>
	}
}

export default Sponsors;
