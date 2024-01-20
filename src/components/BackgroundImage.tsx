import bg from '../assets/KarmaBackground.webp';
import bgface from '../assets/KarmaFace.webp';

export function BackgroundImage() {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="fixed top-0 left-0 h-screen w-screen bg-cover bg-center z-[-1] animate-fadeIn"
    >
      <div
        style={{
          backgroundImage: `url(${bgface})`,
          width: '25vw',
          height: '25vh',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'fixed',
          top: '15%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0, // Set initial opacity to 0
          animationFillMode: 'forwards', // Retain the final state
        }}
        className="animate-fadeInSecond"
      >
      </div>
    </div>
  );
};