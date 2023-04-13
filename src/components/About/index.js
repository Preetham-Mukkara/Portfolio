import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState,useEffect } from 'react';

const About = () => {
    const  [letterClass, setLetterClass] = useState('text-animate')
    const aboutArray = ['A','b','o','u','t'];

    useEffect(()=>{
        setTimeout(()=> {
              setLetterClass('text-animate-hover')
          }, 2000)
      },[])

    return (
        <div className='containter about'>
            <div className='text-zone'>
            <h1>
                <span>
                    <AnimatedLetters letterClass={letterClass} strArray={aboutArray} idx={43}/>
                </span>
            </h1>

            </div>
        </div>
    )
}

export default About