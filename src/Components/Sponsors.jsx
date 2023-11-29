import React from 'react';
import Marquee from 'react-fast-marquee';


const Sponsors = () => {
    const brands = ['https://i.ibb.co/ZhWZwRh/amazon.png','https://i.ibb.co/7jb6ZFw/casio.png','https://i.ibb.co/kybTbjK/dior.png',
    'https://i.ibb.co/xsv9GMH/gold.png',
    'https://i.ibb.co/ZN5ypfc/google.png',
    'https://i.ibb.co/ZX53kKg/himalaya.png',
    'https://i.ibb.co/Vm12WpX/netflix.png',
    'https://i.ibb.co/tq22B77/omega.png',
    'https://i.ibb.co/K0yttLL/organic.png',
    'https://i.ibb.co/qdc9TK8/orient.png',
    'https://i.ibb.co/cbv4n4F/rolex.png',
    'https://i.ibb.co/vcLwWK5/seiko.png',
    'https://i.ibb.co/zFyb1HH/wardah.png']
    return (
        <div className='py-10'>
            <h2 className='md:text-4xl text-2xl font-semibold text-center py-5 uppercase underline'>Our Sponsors</h2>
            <Marquee>
                {brands.map((brand, index)=><img src={brand} alt='' key={index} className='h-16 mr-8 my-8' />)}
                
            </Marquee>
        </div>
    );
};

export default Sponsors;