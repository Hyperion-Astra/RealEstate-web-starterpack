import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

const Growth = () => {

    useEffect(() => {
        Aos.init({duration: 1200})
    }, []);


    return (
    <div>
        <section className='serve'>
        <div data-aos = "fade-right" className="left-sec">
            <h1>Drive Efficiency and Growth with Our Cutting-Edge <span className='enterprise'>ERP Solutions</span></h1>
            <div className="wand">
                <div className="wap">
                    <img src="./tech/Erpss-icon-01.png" alt="llt" />
                    <p>SAP Business One</p>
                </div>
                <div className="wap">
                    <img src="./tech/Erpss-icon-02.png" alt="llt" />
                    <p>SAP S/4 HANA</p>
                </div>
                <div className="wap">
                    <img src="./tech/Erpss-icon-03.png" alt="llt" />
                    <p>SAP Success Factors</p>
                </div>
            </div>
            <div className="wand">
            <div className="wap">
                    <img src="./tech/Erpss-icon-04.png" alt="llt" />
                    <p>Hosted Clous Solutions For SAP</p>
                </div>
                <div className="wap">
                    <img src="./tech/Erpss-icon-05.png" alt="llt" />
                    <p>Odoo ERP Solution</p>
                </div>
            </div>
            <div className="rep">
            <Link to="/services"><button>Explore ERP Solutions</button></Link>
            </div>

        </div>
        <div data-aos = "fade-left" className="right-sec">
            <img src="./tech/erp.jfif" alt="" style={{border: '8px solid #000080'}}/>

        </div>
    </section>
    </div>
    )
}

export default Growth
