import React from 'react';
import pageNotFound from '../../assets/404 Page.json'
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router';
const ErrorElement = () => {
    return (
        
        <div className='flex flex-col justify-center items-center min-h-screen space-y-10'>
          <Player
            autoplay
            loop
            src={pageNotFound}
            style={{ height: '600px', width: '600px' }}
        >
        </Player>
           <Link to={'/'} className='btn btn-primary my-3'>Back To Home</Link>
        </div>
        
    );
};


export default ErrorElement;