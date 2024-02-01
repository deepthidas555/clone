import React, { useEffect, useState } from 'react'
import './Nav.css'
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';
function Nav() {

const [show,setShow]=useState(false)
useEffect(()=>{
  window.addEventListener("scroll",()=>{
    if(window.scrollY > 600){
      setShow(true)
    }else{
      setShow(false)
    }
  })
})
// console.log(show);

const [openNavText, setOpenNavText] = useState(false);


  return (
    <>
    <div className={`${show && 'nav-black'} nav`} style={{boxShadow:'none'}} >
         <MDBNavbar expand='lg' style={{width:'100%',fontWeight:'bold',fontSize:20}}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img width={'150px'} src="https://fronicmedia.com/wp-content/uploads/2023/03/Available-on-MX-Player-2.png" alt="mx-player" />
</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavText(!openNavText)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavText}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0' style={{paddingLeft:'20%'}} >
 
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
              <span className='navbar-text text-light'> <MDBIcon fas icon="home" /> </span>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{color:'white'}}>Shows</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{color:'white'}}>Movies</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{color:'white'}}>New & Hot  <MDBIcon fas icon="fire-alt" color='warning' /></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{color:'white'}}>DistroTV</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{color:'white'}}>MX VDesi</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{color:'white'}}>Others <MDBIcon fas icon="angle-down" size='xs' /></MDBNavbarLink>
            </MDBNavbarItem>




          </MDBNavbarNav>
         
        </MDBCollapse>
      </MDBContainer>
      <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{color:'white'}}><MDBIcon fas icon="search" /></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBBtn outline rounded color='warning' style={{color:'white',width:'210px'}}> <MDBIcon far icon="play-circle" color='warning'  size='lg'/>     UPGRADE TO MX GOLD</MDBBtn>
            </MDBNavbarItem>
      <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{color:'white'}}><MDBIcon fas icon="bell" /></MDBNavbarLink>  
            </MDBNavbarItem>
      <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{color:'white'}}>Login</MDBNavbarLink>
            </MDBNavbarItem>
      <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{color:'white'}}>   <MDBIcon icon='bars' fas /></MDBNavbarLink>
            </MDBNavbarItem>
    </MDBNavbar>
    </div>
    
    </>
    
  )
}

export default Nav