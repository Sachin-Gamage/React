import React from 'react'
import ReactDOM from 'react-dom'
import ButtonComponent from './ButtonComponent.js';
import ORComponent from './animatedOR.js';
import exitbutton from './exitButton.js';

class mainMenu extends React.Component
{
  render()
  {
    return
    (
      <div className="launcher" >
        {/*<ButtonComponent title="Price Checker" listItem1="• Check prices, add offers, make a summary." listItem2="• Read customer reviews and see ratings." listItem3="• Get suggestions based on scanned items."/>*/}
        <ORComponent/>
        {/*<ButtonComponent title="Balance Checker" listItem1="• Check the balance on your gift cards." listItem2="• See how much Kohl’s Cash you have." listItem3="• Kohl’s Cash availability & expiration."/>*/}
        {/*<exitbutton/>*/}
      </div>

      // <div classNameName="launcher" >
      //     <LaucnherItem title="Price Checker" l1="• Check prices, add offers, make a summary." l2="• Read customer reviews and see ratings." l3="• Get suggestions based on scanned items."/>
      //     <div classNameName="or-tag animated flipInX">- OR -</div>
      //     <LaucnherItem title="Balance Checker" l1="• Check the balance on your gift cards." l2="• See how much Kohl’s Cash you have." l3="• Kohl’s Cash availability & expiration."/>
      //     <div classNameName="exitbutton"></div>
      // </div>

    );
  }
}
export default mainMenu;
