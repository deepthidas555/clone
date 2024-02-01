import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
  } from 'mdb-react-ui-kit';
function Footer() {
  return (
   <>
   <div className="foot">
    <br /><br />
       <MDBFooter className='text-white text-left text-lg-left'>
      <MDBContainer  className='p-1'>
        <MDBRow >
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
          <img width={'150px'} src="https://fronicmedia.com/wp-content/uploads/2023/03/Available-on-MX-Player-2.png" alt="mx-player" />


            <p>
            MX Player is your one-stop destination for all your entertainment such as latest movies, most popular web shows, Live TV channels, newly released songs etc

            </p>
            <h6>Follow us for update</h6>       <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Company</h5>

            <ul className='list-unstyled mb-0'>
            <li>
                <a href='#!' className='text-white'>
                About Us
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                Careers
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                Advertise With Us
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                Contact Us
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                FAQ
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Legal</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                Download Apps
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                Privacy Policy
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                Terms of Services
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                Content Complaints
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                Compliance Report
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
        MX Media & Entertainment. All rights reserved.
        </a>
      </div>
    </MDBFooter>
    </div>
   </>
  )
}

export default Footer