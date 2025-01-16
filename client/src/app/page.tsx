'use client';

import Details from './components/Account';
import Login from './login_route/page';
import VideoPage from './components/Videopage';
import Link from 'next/link';
import MoreInfo from './components/MoreInfo';
import Blog from './components/Blog';
import Account from './components/Account';


export default function Page() {
  return (
    
   <div>
    <Account/>
    <MoreInfo/>
   </div>
  );
}
