import React from 'react'
import Unavbar from './Unavbar'
import "./uhome.css"
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from '../Componenets/Footer'


const Uhome = () => {
  const navigate=useNavigate()
  const  products=()=>{
 navigate('/uproducts')
  }
  return (
    <div>
      <Unavbar/>
      
      <div>
      <h1 className='text-center' style={{fontSize:"50px"}}>Best Seller</h1>
      <div  style={{display:"flex",justifyContent:"center"}}>
  {/* <hr style={{ height: "px", width:"250px",color:"black", backgroundColor:"black"}} /> */}
  <br/>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="http://localhost:4000/uploads/1700630676613-i8smu3fv.svg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>FOURTH WING</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="http://localhost:4000/uploads/1700633869849-122765395[1].jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>ELON MUSK</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem',marginRight:"80px" }}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="http://localhost:4000/uploads/1700632928170-80830635[1].jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>DON'T LET HER STAY</Card.Title>
     
    
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem'}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="http://localhost:4000/uploads/1700638048715-61111298[1].jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>KILLING THE WITCHES</Card.Title>
    </Card.Body>
  </Card>
</div>

  </div>
  <br/>
  <br/>
  <br/>
  <div>
      <h1 className='text-center' style={{fontSize:"50px"}}>Top Recommendation</h1>
      <div  style={{display:"flex",justifyContent:"center"}}>
  {/* <hr style={{ height: "px", width:"250px",color:"black", backgroundColor:"black"}} /> */}
  <br/>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="http://localhost:4000/uploads/1700630708206-1979210[1].jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>IRON FLAME</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="http://localhost:4000/uploads/1700631424222-18505809[1].jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>TOMORROW, AND TOMORROW, AND TOMORROW</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem',marginRight:"80px" }}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="http://localhost:4000/uploads/1700632005607-136251[1].jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>LESSONS IN CHEMISTRY</Card.Title>
     
    
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem'}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="http://localhost:4000/uploads/1700633112352-42983957[1].jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>THE SEVEN HUSBANDS OF EVELYN HUGO</Card.Title>
    </Card.Body>
  </Card>
</div>
</div>
</div>
      </div>
      <br/>
     <Footer/>
          </div>
  )
}

export default Uhome
