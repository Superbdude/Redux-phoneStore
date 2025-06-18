import React from 'react'
import {Link} from 'react-router-dom'
import aboutUs from './assets/aboutUs.jpeg'

const About = () => {
  return (
    <div>
        <div className='container py-5 my-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1 className='text-primary fw-bold mb-4'>About us</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vero modi itaque. Vero repellendus recusandae ab ad molestiae nesciunt adipisci dolores necessitatibus porro obcaecati ullam quia doloribus error sit distinctio itaque dolore modi debitis, cumque eveniet minus enim quaerat! Error!
                    </p>
                    <Link to='/contact' className='btn btn-outline-primary px-3'>Contact us</Link>
                </div>
                <div className='col-md-6 d-flex justify-content-center'>
                    <img src={aboutUs} alt="About us" height='400px' width='400px' />

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About