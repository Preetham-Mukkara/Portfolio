import AnimatedLetters from '../AnimatedLetters';
import Emoji from '../Emoji';
import './index.scss';
import { useState,useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPython, faGithub, faJava, faJsSquare, faReact, faDocker } from '@fortawesome/free-brands-svg-icons';

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
            <p>
                I was born in India, and moved around a lot in America before my family settled down in the state of Minnesota.
                I ended up going back to India during my highschool years and fell in love with Bollywood, Tollywood, Cricket and THE FOOD!
                I've always been fascinated by technology and how it can make people's lives easier, and that's what inspired me to pursue a career in software engineering.
                When I'm not coding or learning about new technologies, you can find me hiking in the mountains or experimenting in the kitchen! <Emoji symbol="😋"/>
           </p>
            <p>
                I finsihed a B.S. in Mathematics and a B.S. in Computer Science at the University of Wisconsin-Madison and went through multiple
                software engineering internships during my time there. Currently, I work as a software engineer at Target, and my work deals with Target's
                credit card application workflow. <Emoji symbol="🎯"/>
            </p>
             <p>
                I always love a good chat, so shoot me a message through the contact page if you want to connect <Emoji symbol="😁"/>
             </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                    <FontAwesomeIcon icon={faDocker}/>
                    </div>
                    <div className='face2'>
                    <FontAwesomeIcon icon={faPython}/>
                    </div>
                    <div className='face3'>
                    <FontAwesomeIcon icon={faReact}/>
                    </div>
                    <div className='face4'>
                    <FontAwesomeIcon icon={faJsSquare}/>
                    </div>
                    <div className='face5'>
                    <FontAwesomeIcon icon={faJava}/>
                    </div>
                    <div className='face6'>
                    <FontAwesomeIcon icon={faGithub}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About