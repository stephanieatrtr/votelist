import React from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import s from './PlaylistLogin.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import moment from 'moment';

const CLIENT_ID = 'b8ae36286f1c4db28a8a2ba380a4d8cc';
const CLIENT_SECRET = '18cfc75e9f4b4785ac325eaa38a095c9';
const REDIRECT_URI = 'http://localhost:3000/callback';

class PlaylistLogin extends React.Component {
  getKeys(hash) {
    const keyValPairs = hash.split('&');
    const auth = {};

    for(let i = 0; i < keyValPairs.length; i++){
      const keyVal = keyValPairs[i].split('=');
      auth[keyVal[0]] = keyVal[1];
    }

    return auth;
  }

  getSpotify(token){
    const spotifyApi = new SpotifyWebApi({
      clientId : CLIENT_ID,
      clientSecret : CLIENT_SECRET,
      redirect_uri: REDIRECT_URI
    });

    spotifyApi.setAccessToken(token);
    spotifyApi.getMe()
    .then((res)=>{
      this.setState({
        user: res.body
      });
    });
  }

  componentDidMount(){
    const authHash = window.location.hash.substring(1);
    const auth = this.getKeys(authHash);
    this.setState({ auth });
    if(!localStorage.authToken) {
      localStorage.setItem('authToken', JSON.stringify(auth));
      localStorage.setItem('authTime', moment().format());
    }
    this.getSpotify(auth.access_token);

  }

  render(){
    const {auth, user} = this.state || {};
    if(!user) return null;

    return (
      <div>
        <div className={s.children}>
          <img src={user.images[0].url}/>
          <div>Welcome {user.display_name}!</div>
        </div>
      </div>
    );

  }

}

export default withStyles(s)(PlaylistLogin);
