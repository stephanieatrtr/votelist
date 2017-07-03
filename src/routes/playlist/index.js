import React from 'react';
import Layout from '../../components/Layout';
import Playlist from './Playlist';

async function action() {


  return {
    chunks: ['playlist'],
    title: 'Spotify',
    component: <Layout><Playlist></Playlist></Layout>,
  };
}

export default action;
