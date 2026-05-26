import React from 'react';
import loadingAn from '../../assets/loading circle.json'
import Lottie from 'lottie-react';
import { Player } from '@lottiefiles/react-lottie-player';
const LoadingAm = () => {
   return (
      <div className='flex justify-center items-center min-h-screen space-y-10'>
         <Player
            autoplay
            loop
            src={loadingAn}
            style={{ height: '800px', width: '800px' }}
         />


      </div>
   );
};

export default LoadingAm;