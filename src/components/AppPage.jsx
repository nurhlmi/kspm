import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// @mui
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { ArrowBackRounded } from '@mui/icons-material';

// ----------------------------------------------------------------------

const AppPage = forwardRef(({ children, title = '', meta, ...other }, ref) => {
  const { pathname } = window.location;
  return (
    <>
      <Helmet>
        <title>{`${title} - KSPM`}</title>
        {meta}
      </Helmet>
      <Box ref={ref} {...other} mt={pathname !== '/app/home' ? 10 : 0}>
        {pathname !== '/app/home' && (
          <AppBar position="fixed" color="inherit">
            <Toolbar>
              <IconButton size="large" edge="start" color="inherit" onClick={() => window.history.back()}>
                <ArrowBackRounded />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} ml={1}>
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
        )}
        {children}
      </Box>
    </>
  );
});

AppPage.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default AppPage;
