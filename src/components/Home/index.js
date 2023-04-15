import LogoP from '../../assets/images/logo-p.png';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.scss';
import {Loader} from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const  [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['r','e','e','t','h','a','m',',']
    const jobArray = ['F','u','l','l',' ','S','t','a','c','k',' ','E','n','g','i','n','e','e','r','.']

    useEffect(()=>{
      setTimeout(()=> {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _13`}>,</span>
                <br/> 
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>'m</span>
                <img src={LogoP} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={16}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={24}/>
                </h1>
                <h2>Software Engineer / Tech Enthusiast</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Home