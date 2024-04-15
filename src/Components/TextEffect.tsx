import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'WordPress ',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Next.js ',
        1500,
        'Fron-End',
        1500,
        'Back-End ',
        1500
      ]}
    
      speed={50}
      className='text-[2rem] md:text-[2rem] text-[#55e6a5] font-bold uppercas'
      repeat={Infinity}
    />
  );
};

export default TextEffect;
