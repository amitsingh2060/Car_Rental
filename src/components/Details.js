import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from './Book';

class Details extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             carName:'',
             color:'',
             type:'',
             img:'',
             desc:''
        }
    }
    componentDidMount() {
        this.props.items.map(e => {
            if(e.id == this.props.match.params.id){
                this.setState({carName: e.carName, color:e.color,
                     type:e.type,id:e.id, img:e.img, desc:e.desc })
            }
        })
    }


    
    
    render() {
        console.log(this.state);
        
        console.log(this.props);
        console.log(this.props.items);
         
        return (
            <div>
               <div className="container" >
                 
                        <div className="box ">
                        <div className="card col-6">
                        <div className="card-image">
                            <img src={this.state.img}/>
                               <span className="card-title">{this.carName}</span>
                        </div>

                        <div className="card-content">
                            <p> Color: {this.state.color}</p>
                            <p> description: {this.state.desc}</p>
                            
                        </div>

                 </div>
                        </div>
                        <h5>Book Now</h5>
                        <Book/>
               </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
    items: state.items
    }
}

export default connect(mapStateToProps) (Details);