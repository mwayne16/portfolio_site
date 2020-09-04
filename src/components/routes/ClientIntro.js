import React from 'react';
import Goo from '../Goo/Goo';
import ProjectSlider from '../ProjectSlider/ProjectSlider';
import Mouse from './../Mouse/Mouse';
import './ClientIntro.scss';
export default function ClientIntro() {
  return (
    <section className='client-intro-wrapper'>
      <div className='intro-flex-container'>
        <div className='flex-group'>
          <h1 className='intro-title'>
            Marcus <br /> Davis
          </h1>
          <div className='content-will-fade'>
            <div className='goo-wrapper'>
              <Goo />
            </div>
            <div className='mouse-wrapper'>
              <Mouse />
            </div>
          </div>
        </div>
        <ProjectSlider />
      </div>
    </section>
  );
}
