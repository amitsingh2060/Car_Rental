import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import SearchBar from './Search';
class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:''
        }
    }

    handleSearch=(e)=>{
        this.setState({
            search:e.target.value
        })
    }
    
    render() {
        console.log(this.props.items);
        let itemList = this.props.items.map(item => {
            return(
                <div className="card col-6" key={item.id}>
                        <div className="card-image">
                            <img src={item.img}/>
                               <span className="card-title">{item.carName}</span>
                             <Link to={`/detail/${item.id}`} className="btn btn-primary ml-5" >Book</Link>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}</b></p>
                        </div>
                 </div>
            )
        })
        return (
            <React.Fragment>
        
               <div className="container" >
                  <div style={{marginTop:'10px'}}/>
                       <div className="container">     
                            <div className="row"><div className="col-6">
                              <input class="form-control" name="serach" value={this.state.search} type="text" placeholder="Search" onChange={this.handleSearch} />
                           </div>
                     </div>
               </div>   
                        <div className="box ">
                                {itemList}
                        </div>
               </div>
         </React.Fragment>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
    items: state.items
    }
}

export default connect(mapStateToProps) (Home);