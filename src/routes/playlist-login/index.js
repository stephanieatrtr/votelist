import React from 'react';
import Layout from '../../components/Layout';
import PlaylistLogin from './PlaylistLogin';


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
