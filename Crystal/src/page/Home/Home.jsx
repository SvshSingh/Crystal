import React, { useState } from 'react';
import { Upload } from '../../components';
import useDatabase from '../../hooks/useDatabase';
import { motion } from 'framer-motion';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import {Navbar} from '../../components';

export default function Home({ setSelectedImg }) {

  const { docs } = useDatabase('images');
  // const [ selectedImg, setSelectedImg ] = useState(null);
  const [ images, setImages ] = useState();



  return (
    <>
      <div className='block md:hidden'>
        <p className='sub-heading text-center'>This website is not supported in mobiles or smaller devices. please use a laptop to get access to the website</p></div>
      <div className='hidden md:block'>
        <Navbar />
          <section className = "body">
              <h1 className = "heading">A Curated Photo Gallery</h1>
              <p className = "sub-heading">Where simplicity meets artistic expression,
Step into a world of visual serenity,
As we invite you to explore a collection carefully curated,
Unveiling captivating moments, elegantly showcased,
{/* Every image whispers stories, waiting to be discovered,
Embrace the beauty of minimalism and let your imagination roam free, */}
In this haven of visual delights, where less is more,
We invite you to immerse yourself in the artistry of photography,
And experience the power of simplicity in its purest form.</p>
          </section>
          <Upload />
          <section className = "gallery mt-8 grid grid-cols-3">
          {/* <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}> */}
            { docs && docs.map((doc) => {
              return(
                
                <motion.div 
                className = "w-full rounded-xl p-2 img-wrap" 
                key = { doc.id } 
                layout
                onClick = {() => setSelectedImg({url: doc.url, id: doc.id})}
                whileHover = {{ opacity: 1}}
                >
                    {/* <Masonry> */}
                    <motion.img 
                      src= { doc.url }
                      alt="image"
                      initial = {{ opacity: 0 }}
                      animate = {{ opacity: 1 }}
                      transition = {{ delay: 1 }}
                    />
                  {/* </Masonry> */}
                  </motion.div>
                )
              })
            }
            {/* </ResponsiveMasonry> */}
          </section>
      </div>
      </>
  )
}
