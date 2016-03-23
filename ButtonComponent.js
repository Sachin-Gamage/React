import React from 'react'
import ReactDOM from 'react-dom'


class ButtonComponent extends React.Component {

	render () {
		return (


			<div className="launcher-item">
					<div className="button pricechecker animated bounceInDown">
							<div className="icon"></div>
							<p>{this.props.title}</p>
					</div>
					<div>
					<ul className="description animated fadeInUpBig">
							<li>{this.props.listItem1}</li>
							<li>{this.props.listItem2}</li>
							<li>{this.props.listItem3}</li>
					</ul>
					</div>
			</div>


		);
	}
}

export default ButtonComponent;
