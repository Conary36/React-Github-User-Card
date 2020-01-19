import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
    constructor(){
      super();
      console.log('cb: App.js: App: Constructor:');
      this.state = {
        githubUser: [],
        userFollowers: []
      };
    }

    componentDidMount(){
      
        axios
          .get("https://api.github.com/users/")
          .then(res => {
              console.log(res.data);
              const newUserRequest = res.data;
              this.setState({ ...this.state, githubUser: newUserRequest });

              
          })
          .catch(err => {
            console.error('Error', err);
          })
          
    };

  render(){
  return (
    <div className="App">


      
    </div>
    );
}
}
export default App;
