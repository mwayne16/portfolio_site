import React from 'react';
import Goo from '../Goo/Goo';
import './ClientIntro.scss';
import Mouse from './../Mouse/Mouse';
export default function ClientIntro() {
  return (
    <section className='client-intro-wrapper'>
      <div className='goo-wrapper'>
        <Goo />
      </div>
      <div className='mouse-wrapper'>
        <Mouse />
      </div>
    </section>
  );
}
