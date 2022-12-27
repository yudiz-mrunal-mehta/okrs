import { useQuery } from '@apollo/client';
import React from 'react';
import { HEADER_MENU } from '../../query/header/index';
import LogoHeader from '../LogoHeader';
import Navbar from '../Navbar';

function Layout() {
  const { data } = useQuery(HEADER_MENU);
  return (
    <>
      {console.log('HEADER_MENU', data?.getMenuTree?.aResults)}
      <LogoHeader></LogoHeader>
      <Navbar result={data?.getMenuTree?.aResults} />
      <main></main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
