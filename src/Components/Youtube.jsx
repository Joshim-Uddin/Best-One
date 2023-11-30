import React from 'react';
import { Parallax } from 'react-parallax';
import parallax from './../assets/parallax.png'
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Youtube = () => {
    return (
        
            <Parallax blur={{ min: -15, max: 15 }} bgImage={parallax} bgImageAlt="the cat" strength={-200}>
        <div className='md:h-[700px] h-[400px] flex flex-col items-center justify-center'>
            <div className='bg-slate-600 py-8 px-12 flex flex-col justify-center items-center gap-5'>
            <h3 className='text-3xl text-white '>Visit our channel</h3>
            <Link to='https://www.youtube.com/channel/UC1IyU1dogkGQfH5SMyhgsuQ'><FaYoutube  className='text-5xl text-red-600'/></Link>
            </div>
        </div>
    </Parallax>
            
        
    );
};

export default Youtube;