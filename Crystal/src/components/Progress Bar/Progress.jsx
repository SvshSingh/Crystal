import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import { motion } from 'framer-motion';

export default function Progress({ file, setFile }) {
    const { progress, url } = useStorage(file);
    useEffect( () => {
        if(url) {
            setFile(null);
        }
    }, [url])
    return (
        <div>
            <motion.div 
                className='progress-bar'
                initial = {{ width: 0}}
                animate = {{ width: progress + '%'}}
            ></motion.div>
        </div>
    )
}
