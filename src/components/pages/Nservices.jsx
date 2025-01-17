import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer'

const Nservices = () => {
  return (
    <div>
      <Header />
      <div style={{paddingTop: "150px"}}><h1 style={{color: "#0058ae"}} className='text-center'>E-Governance <span className='enterprise'>Services</span></h1>
      <p className='text-center'>Our rich expertise in developing Government IT solutions allow us to drive next-gen innovations in the sphere of government.
        <br /> We also partner with government agensies to modernise their legacy Infrastructure.
      </p>
      <h5 className='text-center text-secondary mt-5'>E-Governance Platforms Development | Style Window Solution & Dashboards | G2C, G2B, G2G Portal | Manpower Services</h5>
      </div>
        <section className='serve'>
        <div data-aos = "fade-right" className="left">
            <img src="./tech/enterprise.jfif" alt="llt" />
        </div>
        <div data-aos = "fade-left" className="left-sec">
            <h1>Enterprise Software<span className='enterprise'> Services</span></h1>
            <ul>
              <li>Digital Engineering</li>
              <li>Enterprise Architecture</li>
              <li>Cloud Applications Development</li>
              <li>Mobile Applications</li>
              <li>Enterprise DevOps</li>
            </ul>
            </div>
        </section>
        <section className='serve'>
        
        <div data-aos = "fade-right" className="left-sec">
            <h1>Digital <span className='enterprise'>Transformation</span></h1>
            <ul>
              <li>Applied AI</li>
              <li>Data Analytics </li>
              <li>BlockChain & IoT</li>
              <li>Robotic Process Automation</li>
            </ul>
            </div>
            <div data-aos = "fade-left" className="left">
            <img src="./tech/transform.webp" alt="llt" />
        </div>
        </section>
        <section className='serve'>
        <div data-aos = "fade-right" className="left">
            <img src="./tech/erp.jfif" alt="llt" />
        </div>
        <div data-aos = "fade-left" className="left-sec">
            <h1>ERP <span className='enterprise'>Solutions</span></h1>
            <ul>
              <li>SAP Business One HANA</li>
              <li>SAP S/4 HANA </li>
              <li>SAP SuccessFactors</li>
              <li>Hosted Cloud Solution for SAP</li>
            </ul>
            </div>
        </section>
        <section className='serve'>
        <div data-aos = "fade-right" className="left-sec">
            <h1>E-Governance <span className='enterprise'>Services</span></h1>
            <ul>
              <li>E-Governance Platforms Development</li>
              <li>Single Window Solution & Dashboards </li>
              <li>G2C, G2B, G2G Portal</li>
              <li>Manpower Services</li>
            </ul>
            </div>
            <div data-aos = "fade-left" className="left">
            <img src="./tech/egov.jpg" alt="llt" />
        </div>
        </section>
        <section className='serve'>
        <div data-aos = "fade-right" className="left">
            <img src="./tech/managed.jpg" alt="llt" />
        </div>
        <div data-aos = "fade-left" className="left-sec">
            <h1>Managed Security <span className='enterprise'>Services</span></h1>
            <ul>
              <li>SOC-as-a-Service</li>
              <li>Cloud Security </li>
              <li>Email Security and Protection</li>
              <li>VAPT Service</li>
              <li>Endpoint Security</li>
              <li>Website & Application Security</li>
              <li>Security Awareness Training</li>
              <li>Identity and Access Management</li>
              <li>Managed Detection and Response Services</li>
            </ul>
            </div>
        </section>
        <section className='serve'>
        
        <div data-aos = "fade-right" className="left-sec">
            <h1>Modern Workplace <span className='enterprise'>Services</span></h1>
            <ul>
              <li>Data Center</li>
              <li>Communication Services</li>
              <li>IT Consulting</li>
              <li>Backup & Disaster Recovery</li>
              <li>Call Center / IP Telephony</li>
            </ul>
            </div>
            <div data-aos = "fade-left" className="left">
            <img src="./tech/modern-workplace.jpg" alt="llt" />
        </div>
        </section>
        <section className='serve'>
        <div data-aos = "fade-right" className="left">
            <img src="./tech/CaaS.jpg" alt="llt" />
        </div>
        <div data-aos = "fade-left" className="left-sec">
            <h1>Cloud <span className='enterprise'>Solutions</span></h1>
            <ul>
              <li>Public, Private, Hybrid Cloud</li>
              <li>Virtual Desktops on Cloud</li>
              <li>Cloud Monitoring and Management</li>
              <li>Silver Cloud</li>
            </ul>
            </div>
        </section>
      <Footer />
    </div>
  )
}

export default Nservices
