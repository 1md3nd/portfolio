import React from 'react';

import Head from './Head';


import * as css from './Layout.module.css';

const Layout = ({ children, title, description, image }) => {
  return (
    <div className={css.container}>
      <Head title={title} description={description} image={image} />
      <div className={css.content}>
        <Slice alias="TopBar" />
        {children}
        <Slice alias="Footer" />
      </div>
    </div>
  );
};

export default Layout;