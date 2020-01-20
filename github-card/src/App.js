import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from '../src/components/UserCard';
import UserFollowers from './components/UserFollowers'

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
              this.setState({ 
                image: res.data.avatar_url,
                name: res.data.name,
                login: res.data.login,
                followers: res.data.followers,
                location: res.data.location
               });
               console.log(this.state);
          })
          .catch(err => {
            console.error('Error', err);
          });
          
          //data for my github followers
          axios
            .get("https://api.github.com/users/Conary36/followers")
            .then(follower => {
                console.log(follower.data);
                this.setState({ userFollowers: follower.data, githubUser: follower.data});
            })
            .catch(err => {
                console.error('Something is wrong', err);
            });
          
    };

  

  render(){
  return (
    <div className="App">

      <UserCard url={this.state.image} name={this.state.name} login={this.state.login} followers={this.state.followers} location={this.state.location}/>
      
      {this.state.userFollowers.map(e => {

        return (
          <UserFollowers
            image={e.avatar_url}
            name={e.login}
            followers_url={e.followers_url}
            organizations_url={e.organizations_url}
          />
        );
      })

      }
    </div>
    );
}
}
export default App;
