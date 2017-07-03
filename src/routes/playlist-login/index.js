import React from 'react';
import Layout from '../../components/Layout';
import PlaylistLogin from './PlaylistLogin';
import a from 'axios';


async function action() {

  return {
    chunks: ['playlist-login'],
    title: 'Spotify',
    component: <Layout>
      <PlaylistLogin></PlaylistLogin>
    </Layout>
  };
}

export default action;
