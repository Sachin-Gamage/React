import React from 'react'
import ReactDOM from 'react-dom'
import ButtonComponent from "./ButtonComponent.js";

class mainComponent extends React.Component {

	render () {
		return (


			<div className="launcher">

				<ButtonComponent title="Price Checker" listItem1="• Check prices, add offers, make a summary." listItem2="• Read customer reviews and see ratings." listItem3="• Get suggestions based on scanned items."/>
			</div>


		);
	}
}

export default mainComponent;
