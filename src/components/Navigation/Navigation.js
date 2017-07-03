/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import SpotifyWebApi from 'spotify-web-api-node';
import s from './Navigation.css';
import Link from '../Link';
const CLIENT_ID = 'b8ae36286f1c4db28a8a2ba380a4d8cc';
const CLIENT_SECRET = '18cfc75e9f4b4785ac325eaa38a095c9';
const REDIRECT_URI = 'http://localhost:3000/callback';
const loginUrl = 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
    '&response_type=token' +
    '&scope=playlist-read-private%20playlist-modify%20playlist-modify-private' +
    '&redirect_uri=' + encodeURIComponent(REDIRECT_URI);

class Navigation extends React.Component {
  componentDidMount(){
    this.getSpotify();
  }

  getSpotify(){
    const spotifyApi = new SpotifyWebApi({
      clientId : CLIENT_ID,
      clientSecret : CLIENT_SECRET,
      redirect_uri: REDIRECT_URI
    });

    if(!localStorage.authToken) return null;
    const auth = JSON.parse(localStorage.authToken);

    spotifyApi.setAccessToken(auth.access_token);
    spotifyApi.getMe()
    .then((res)=>{
      this.setState({
        user: res.body
      });
    });
  }

  renderLogin() {
    const { user } = this.state || {};
    if(user){
      const name = user.display_name.split(" ");
      return (
        <span>Welcome {name[0]}!</span>
      );
    }

    return (
      <a className={s.link} href={loginUrl}>Log in</a>
    );
  }

  render() {
    return (
      <div className={s.root} role="navigation">
        {this.renderLogin()}
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
