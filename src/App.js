import './App.css';
// import LoginForm from './components/auth/login';
import React, { Component } from 'react'

// const App = () =>{
// <div>
//   <LoginForm/>
// </div>
// }


class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      items : [],
      isLoad: false
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoad: true,
            items:json
          });
        });
  }
  render(){
    var {items, isLoad } = this.state;
    if(!isLoad){
      return <div>Data has not been loaded</div>
    } else {
      return(
        <div className="container">
          <div className='row justify-content-center mt-3'>
            <h2 className='text-center'>Fetched Data From API</h2> 
                {items.map((item) => (
                <div className='col-md-6 p-3' key={item.id}>
                 <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.body}</p>
                    <a href='#' className='btn btn-outline-primary'>Visit us</a>
                   </div>
                   </div>
                  </div>
                ))}
            </div>
          </div>
      );
      }
    }
  }
export default App;
