import React from 'react';
import FloatingNavbar from '../components/Navbar';
import { FaArrowRight } from 'react-icons/fa';
import CoolAsslaptopImage from '../assets/coolasslaptopimage.png'; 



const AboutPage = () => {


  return (

    <div className="relative min-h-screen bg-gradient-to-br from-black to-purple-900 p-8 sm:p-16 overflow-hidden">

      
      <div className="absolute top-24 sm:top-32 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          ABOUT ME
        </h1>
        <FaArrowRight size={30} className="text-purple-300" />
      </div>
      <div className="absolute top-3/5 left-8 sm:left-16 transform -translate-y-1/2">
        <img
            src={CoolAsslaptopImage}
            alt="CoolAss Laptop Image"
            width="400"
            height="400"
            className="rounded-xl shadow-lg object-cover"
         />
      </div>

      
      <div className="absolute top-1/2 right-8 sm:right-16 transform -translate-y-1/2 max-w-lg text-left">
        <p className="text-purple-200 text-base sm:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
        </p>
      </div>


      <FloatingNavbar />

    </div>
  );
};


export default AboutPage;
