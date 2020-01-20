import React, { Component } from 'react';

class Book extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              email:'',
              name:'',
              address:'',
              contact:''
         }
     }
     handleInput = (e) => {
         this.setState({[e.target.name]:e.target.value})
     }
     
     handleSubmit = (e) => {
         e.preventDefault();
         console.log(this.state);
         
     }
    render() {
        return (
            <React.Fragment>
                 <div className="container">
                        <div className="row">
                             <div className="col-6">
                             <form onSubmit={this.handleSubmit}>
                                    <div class="form-group">
                                        <label>Email address</label>
                                        <input type="email" class="form-control" placeholder="Enter email" name='email' value={this.state.email} onChange={this.handleInput}/>
                                    
                                    </div>
                                    <div class="form-group">
                                        <label>Full Nmae</label>
                                        <input type="text" class="form-control"  placeholder="Name" name='name' value={this.state.name} onChange={this.handleInput}/>
                                    </div>

                                    <div class="form-group">
                                        <label>Address</label>
                                        <input type="text" class="form-control"  placeholder="address" name='address' value={this.state.address} onChange={this.handleInput}/>
                                    </div>

                                    <div class="form-group">
                                        <label>Contact No</label>
                                        <input type="text" class="form-control"  placeholder="contact no" name='contact' value={this.state.contact} onChange={this.handleInput}/>
                                    </div>
                                    
                                    <button type="submit" class="btn btn-primary"> Proceed</button>
                            </form>
                             </div>
                        </div>
                 </div>
            </React.Fragment>
        );
    }
}

export default Book;