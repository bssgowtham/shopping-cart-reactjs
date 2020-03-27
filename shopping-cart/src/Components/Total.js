import React from 'react';
import { connect } from 'react-redux';
import { addShipping, subtractShipping } from './Actions/cartActions.js';

class Total extends React.Component{
    constructor(props){
        super(props);
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked = (event) => {
        if(event.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.subtractShipping();
        }
    }

    render(){
        // let checked = false; ref="shipping"
        let styles = {
            fontStyle: "none"
        }
        return(
            <div className="container">
                <ul className="colletion">
                    <li className="collection-item">
                        <label htmlFor="">
                            <input type="checkbox" defaultChecked={false} onChange={this.handleChecked}/>
                            <span style={styles}>Shipping: $10</span>
                        </label>
                    </li>
                    <li className="collection-item">
                        <b style={styles}>Total: {this.props.total}</b>
                    </li>
                </ul>
                <div className="checkout">
                    <button className="btn btn-primary w3-center">Checkout</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // items: state.items,
        total: state.total,
        // addedItems: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => {dispatch(addShipping())},
        subtractShipping: () => {dispatch(subtractShipping())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Total);