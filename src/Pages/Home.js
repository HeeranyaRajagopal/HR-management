import '../Assests/Css/Home.css'
import { useState } from 'react';
import React, { createContext, useContext } from 'react';

const Home = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleTouchStart = (index) => {
      setHoveredIndex(index === hoveredIndex ? null : index);
    };
  
    const cardsData = [
      {
        frontImage: 'https://www.mydock365.com/hs-fs/hubfs/social-suggested-images/hr-tab-1.png?width=600&height=335&name=hr-tab-1.png',
        title: 'HR: Where people and potential meet for success.',
        description: 'HR Management portal',
      },
      {
        frontImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxWW_bpbcZxRMHsA6CX26Uv6P0PBPvK_jnw&usqp=CAU',
        title: 'Building careers, one connection at a time. Thats HR.',
        description: 'HR Management portal',
      },
      {
        frontImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o3SU7mLheaOPANV6dxtIZD-VKrbcN_FPdw&usqp=CAU',
        title: 'Employees are the backbone of the company.',
        description: 'HR Management portal',
      },
      {
        frontImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu68EZ16sos1Bc5wOTGB-0Anq5iheoMImWlQ&usqp=CAU',
        title: 'Employees united, success ignited.',
        description: 'HR Management portal',
      },
      {
        frontImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2DiPA03bYVuYPgfxAxNRFt6sVnSHYN4shA&usqp=CAU',
        title: 'In this company, our diversity is our strength',
        description: 'HR Management portal',
      },
      {
        frontImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zsMgfRee38vylZg0EiBmIlDj6JasVDhjLg&usqp=CAU',
        title: 'Employees shaping the future, one project at a time.',
        description: 'HR Management portal',
      },
      {
        frontImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0dTGqttEDyv3tJtf2CmtqB4p3v3NcewzOg&usqp=CAU',
        title: 'HR: Bringing out the best in every employee.',
        description: 'HR Management portal',
      },
      {
        frontImage: 'http://thewowstyle.com/wp-content/uploads/2015/01/InteriorWallpapers-38.jpg',
        title: 'In HR, we believe in the power of every individuals journey',
        description: 'HR Management portal',
      },
    ];
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        
            <div className='contain'>
                <div className='text-home'>
                    <h2>WELCOME TO COGNI!</h2>
                    <p className='inner-text'>At the heart of Cogni, we don't just build products; we build futures. Our commitment to excellence resonates in every corner, creating an environment where ideas flourish and aspirations take flight.</p>
                </div>
                <div className='img'>
                    <img
                        src="https://www.qhrm.io/wp-content/uploads/2023/03/qhrm-hr-software-training-features.gif"
                        alt="GIF Alt Text"
                    />
                </div>
            </div>
            <div className="wrapper">
      <h1>COGNI-Transforming Ideas into Intelligent Solutions!</h1>
      <div className="cols">
        {cardsData.map((card, index) => (
          <div key={index} className={`col ${hoveredIndex === index ? 'hover' : ''}`} onTouchStart={() => handleTouchStart(index)}>
            <div className="a-container">
              <div className="front" style={{ backgroundImage:` url(${card.frontImage})` }}>
                <div className="inner">
                <p>{card.title}</p>
                  <span></span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

        </>
    )
}
export default Home;