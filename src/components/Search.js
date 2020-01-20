// import React, { Component } from 'react';

// class SearchBar extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              term:''
//         }
//     }
    
//     onInputChange = (e) => {
//      //console.log(e.target.value)
//      this.setState({ term:e.target.value})
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(this.state.term)
//         this.props.onSubmit(this.state.term)
//     }
//     render() {
//         return (
//            <React.Fragment>
//                  <form onSubmit={this.handleSubmit}>
//                      <label>Search Bar</label>
//                      <input type="text" 
//                      onChange={this.onInputChange}
                
//                      />
//                  </form>
//            </React.Fragment>
//         );
//     }
// }

// export default SearchBar;