import React, { useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './Mouse.scss';
function Mouse() {
  const trans = y => `translateY(${y}%`;
  const props = useSpring({
    from: {
      transform: trans(0),
      opacity: 1,
    },

    to: async next => {
      while (1) {
        await next({
          transform: trans(40),
          opacity: 0.4,
        });

        await next({
          transform: trans(5),
          opacity: 1,
        });
      }
    },
    config: config.wobbly,
  });
  return (
    <div className='mouse-component'>
      <svg
        className='mouse-svg'
        width='49'
        height='91'
        viewBox='0 0 49 91'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <animated.g id='Mouse'>
          <animated.path
            id='mouse-body'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M48 67.8979V38.4504C48 26.3932 38.2257 16.619 26.1686 16.619C14.1114 16.619 4.33713 26.3932 4.33713 38.4504V67.8978C4.33713 79.955 14.1114 89.7293 26.1686 89.7293C38.2257 89.7293 48 79.955 48 67.8979ZM26.1686 15.619C13.5591 15.619 3.33713 25.8409 3.33713 38.4504V67.8978C3.33713 80.5073 13.5591 90.7293 26.1686 90.7293C38.778 90.7293 49 80.5073 49 67.8979V38.4504C49 25.8409 38.778 15.619 26.1686 15.619Z'
            stroke='white'
          />

          <animated.path
            style={props}
            id='mouse-wheel'
            d='M32 30.5C32 34.6421 29.5376 38 26.5 38C23.4624 38 21 34.6421 21 30.5C21 26.3579 23.4624 23 26.5 23C29.5376 23 32 26.3579 32 30.5Z'
            fill='white'
          />
          <animated.path
            style={props}
            id='mouse-wheel'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M29.5827 35.2119C30.4396 34.0435 31 32.3808 31 30.5C31 28.6192 30.4396 26.9565 29.5827 25.7881C28.7254 24.619 27.6237 24 26.5 24C25.3763 24 24.2746 24.619 23.4173 25.7881C22.5604 26.9565 22 28.6192 22 30.5C22 32.3808 22.5604 34.0435 23.4173 35.2119C24.2746 36.381 25.3763 37 26.5 37C27.6237 37 28.7254 36.381 29.5827 35.2119ZM26.5 38C29.5376 38 32 34.6421 32 30.5C32 26.3579 29.5376 23 26.5 23C23.4624 23 21 26.3579 21 30.5C21 34.6421 23.4624 38 26.5 38Z'
            fill='black'
          />
        </animated.g>
      </svg>
      <animated.h2>Scroll</animated.h2>
    </div>
  );
}
export default Mouse;
