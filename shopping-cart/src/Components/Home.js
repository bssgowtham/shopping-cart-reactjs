import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './Actions/cartActions';




class Home extends React.Component{
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick = (id) => {
        this.props.addToCart(id);
    }
    

    render(){
        // Maps over 'items'
        let itemList = this.props.items.map((item) => {
            return (
                <div className="card" key={item.id}>
                    <img className="card-img-top" src={item.img} alt={item.title} />
                    <div className="card-body">
                        <span className="card-title">{item.title}</span>
                        <span to="/" onClick={() => {this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>Price: {item.price}</p>
                    </div>
                        
                </div>
            )
        })
        return(
            <div className="container">
                <h3 className="text-center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)