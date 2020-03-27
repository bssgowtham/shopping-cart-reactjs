import React from "react";
import { Link } from "react-router-dom";
import {
    addQuantity,
    subtractQuantity,
    removeItem
} from "./Actions/cartActions";
import { connect } from "react-redux";
import Total from "./Total.js";

class Cart extends React.Component {
    handleRemoveItem = id => {
        this.props.removeItem(id);
    };
    handleAddQuantity = id => {
        this.props.addQuantity(id);
    };
    handleSubtractQuantity = id => {
        this.props.subtractQuantity(id);
    };
    render() {
        let styles = {
            listStyle: "none"
        };
        let itemsInCart = this.props.addedItems.length ? (
            // If there are any items in the addedItems, then output {itemsInCart} or nothing
            this.props.addedItems.map(item => {
                return (
                    <li className="card" key={item.id}>
                        <div className="item-img">
                            <img
                                className="card-img-top"
                                src={item.img}
                                alt={item.title}
                            />
                        </div>
                        <div className="card-body">
                            <span className="card-title">{item.title}</span>
                        </div>

                        <div className="card-content">
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                        <div className="addOrRemove">
                            <Link
                                to="/cart"
                                onClick={() => {
                                    this.handleAddQuantity(item.id);
                                }}
                            >
                                <i className="material-icons">arrow_drop_up</i>
                            </Link>
                            <Link
                                to="/cart"
                                onClick={() => {
                                    this.handleSubtractQuantity(item.id);
                                }}
                            >
                                <i className="material-icons">
                                    arrow_drop_down
                                </i>
                            </Link>
                        </div>
                        <div>
                            <button
                                className="removeItem btn btn-danger w3-center"
                                onClick={() => {
                                    this.handleRemoveItem(item.id);
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                );
            })
        ) : (
            <p>There is nothing in your cart.</p>
        );

        return (
            <div className="container">
                <div className="cart">
                    <h4>You have ordered:</h4>
                    <ul className="w3-row">{itemsInCart}</ul>
                </div>
                <Total />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // items: state.items,  // (mistake - we do not need 'items' here)
        addedItems: state.addedItems,
        quantity: state.quantity
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeItem: id => {
            dispatch(removeItem(id));
        },
        addQuantity: id => {
            dispatch(addQuantity(id));
        },
        subtractQuantity: id => {
            dispatch(subtractQuantity(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
