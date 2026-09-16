import { CircularProgress, Grid } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import PublicWrapper from '../../components/public-wrapper';
import { useStores } from '../../store';

const GithubCallback: React.FC = () => {
  const { authStore, routerStore } = useStores();
  const handled = useRef(false);

  useEffect(() => {
    if (handled.current) {
      return;
    }
    handled.current = true;

    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');

    if (!code || !state) {
      routerStore.redirect('/login');
      return;
    }

    authStore.handleGithubCallback(code, state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PublicWrapper>
      <Grid item>
        <CircularProgress />
      </Grid>
    </PublicWrapper>
  );
};

export default GithubCallback;
