
import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/media.jpg'
import { Card } from 'react-bootstrap'
import feature1 from '../assets/feature.jpg'
import feature2 from '../assets/category.avif'
import feature3 from '../assets/history.jpeg'
const Landing = () => {
  return (
    <div style={{paddingTop:'80px'}} className='container'>
      {/* Landing head */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info'>Get Started!!</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img  className='img-fluid shadow' src={LandingImg} alt="" />
        </div>
      </div>

      {/* features */}
      <div className="my-5">
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5">
        <div className="col-lg-4 mt-2 d-flex justify-content-center">
            <Card className='p-2' style={{ width: '20rem' }}>
                <Card.Img style={{height:'250px'}} variant="top" src={feature1} />
                <Card.Body>
                    <Card.Title>Manging Videos</Card.Title>
                    <Card.Text>
                    Users can upload, view and remove the videos.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4 mt-2 d-flex justify-content-center">
            <Card className='p-2' style={{ width: '20rem' }}>
                <Card.Img style={{height:'250px'}} variant="top" src={feature2} />
                <Card.Body>
                    <Card.Title>Categorise Videos</Card.Title>
                    <Card.Text>
                    Users can categorise the videos by drag and drop feature.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4 mt-2 d-flex justify-content-center">
            <Card className='p-2' style={{ width: '20rem' }}>
                <Card.Img style={{height:'250px'}} variant="top" src={feature3} />
                <Card.Body>
                    <Card.Title>Managing Video History</Card.Title>
                    <Card.Text>
                    Users can manage the watch history of all videos.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            
        </div>
      </div>

      {/* youtube */}
        <div className="my-5 row align-items-center border rounded p-5">
            <div className='col-lg-5'>
                <h3 className='text-warning'>Simple, Fast and Powerful</h3>
                <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora vero odio eveniet reiciendis excepturi beatae sapiente soluta saepe aut fugiat cumque minima repellendus blanditiis in, consectetur nulla, iure odit.</p>
                <p style={{textAlign:'justify'}}><span className='fs-5'>Categorise Videos: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora vero odio eveniet reiciendis excepturi beatae sapiente soluta saepe aut fugiat cumque minima repellendus blanditiis in, consectetur nulla, iure odit.</p>
                <p style={{textAlign:'justify'}}><span className='fs-5'>Managing History: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora vero odio eveniet reiciendis excepturi beatae sapiente soluta saepe aut fugiat cumque minima repellendus blanditiis in, consectetur nulla, iure odit.</p>
            </div>
            <div className="col"></div>
            <div className="col-lg-6">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Po3jStA673E?si=TapukhTKcWLL8uVR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        {/* <p><p>jkj</p></p> */}
    </div>

  )
}

export default Landing