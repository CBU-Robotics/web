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
            <img src="onshape.webp"></img>
            <div>onshape</div>
          </li>
          <li>
            <img src="eplastics.jpg"></img>
            <div>ePlastics</div>
          </li>
          <li>
            <img src="gene-haas-foundation.jpeg"></img>
            <div>Gene Haas Foundation</div>
          </li>
        </ul>
			</section>
	}
}

export default Sponsors;
