import React from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import s from './Playlist.css';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import moment from 'moment';
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../../constants';

class Playlist extends React.Component {
  getSpotify(token){
    const spotifyApi = new SpotifyWebApi({
      clientId : CLIENT_ID,
      clientSecret : CLIENT_SECRET,
      redirect_uri: REDIRECT_URI
    });

    spotifyApi.setAccessToken(token);
    spotifyApi.getPlaylist('stephaniecurran','7lj1gdwwwccyjEVXiEyIbQ')
     .then((res)=> {
       const items = res.body.tracks.items;
       const tracks = items.map(x=> Object.assign(x.track, { addedBy: x.added_by.id }));
       this.setState({
         playlist: res.body,
         tracks
       });
     }, (err) =>{
       localStorage.removeItem('authToken');
     });
  }

  componentDidMount(){
    if(!localStorage || !localStorage.authToken) {
      return;
    }

    if(moment().diff(moment(localStorage.authTime), 'minutes') > 2) {
      localStorage.removeItem('authToken');
      return;
    }

    this.getSpotify(JSON.parse(localStorage.authToken).access_token);
  }

  track(track, idx) {
    const artists = track.artists.map(x=>x.name).join(', ');
    const rowStyle = idx % 2 ? s.even : s.odd;
    return (
      <div className={cx(s.row, rowStyle)}>
        <div className={cx(s.cell, s.track)}>
          {track.name}
        </div>
        <div className={cx(s.cell, s.artist)}>
          {artists}
        </div>
        <div className={cx(s.cell, s.addedBy)}>
          {track.addedBy}
        </div>
        <div className={s.cell}>
          Votes: 10
        </div>
      </div>
    );
  }

  render(){
    const { playlist, tracks } = this.state || {};
    if(!tracks) return <div>Login to access playlist</div>;

    return (
      <div>
        <h2>{playlist.name}</h2>
        <div className={s.col}>
          {tracks.map(this.track)}
        </div>
      </div>
    );

  }

}

export default withStyles(s)(Playlist);
