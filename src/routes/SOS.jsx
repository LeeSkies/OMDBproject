import React from 'react';
import { useNavigate } from 'react-router-dom';

const doWave = (i) => 'wave-child-' + ((i % 5) + 1);

export const SOS = () => {
  const wave = 'this|page|does|not|exist.|this|is|merely|an|illusion.'.split('');

  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/')
  }, 5000);

  return (
    <div className="w-full overflow-hidden h-full absolute -scroll-my-0 flex justify-center items-center">
      <article className="text-9xl font-amatic text-red-900 animate-pulse justify-center flex">
        {wave.map((x, i) => (
          <span key={i} className={doWave(i)}>
            {x}
          </span>
        ))}
      </article>
    </div>
  );
};