import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from '../src/components/UserCard';

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
      //data for my github account
        axios
          .get("https://api.github.com/users/Conary36")
          .then(res => {
              console.log(res.data);
              this.setState({ ...this.state, githubUser: res.data });
          })
          .catch(err => {
            console.error('Error', err);
          });
          
          //data for my github followers
          axios
            .get("https://api.github.com/users/Conary36/followers")
            .then(follower => {
                console.log(follower.data);
                this.setState({...this.state, userFollowers: follower.data});
            })
            .catch(err => {
                console.error('Something is wrong', err);
            })


          
    };

  

  render(){
  return (
    // <div className="App">


      <UserCard url={this.state.image} name={this.state.name} id={this.state.id} html_url={this.state.html_url} repos_url={this.state.repos_url}/>
  
    // </div>
    );
}
}
export default App;
