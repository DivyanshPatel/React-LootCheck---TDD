import React , {Component } from 'react';
import {connect } from 'react-redux';

export class Wallet extends Component {
  constructor(){
    super();

    this.state = {balance: undefined};
  }

  updateBalance = event => {
    this.setState({ balance: parseInt(event.target.value,10)})
  }

  render(){
    return(
      <div>
        <h3 className='balance'>
          Wallet Balance: {this.props.balance}
        </h3>
        <br />
        <input className='input_wallet' onChange={this.updateBalance} />
      </div>
    )
  }
}

export default connect(state => {return { balance: state}} ,null)(Wallet);
