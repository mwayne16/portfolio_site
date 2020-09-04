import React from 'react';
import './ProjectSlider.scss';
// Just position absolute and transform XY -50% -75%
function ProjectSlider() {
  return (
    <section className='projects-slider'>
      <div className='project-container'>
        <div className='project-item-box'></div>
        <button>View Code</button>
        <button>View Demo</button>
      </div>
    </section>
  );
}
export default ProjectSlider;
