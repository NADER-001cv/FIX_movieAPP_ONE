import React from 'react'
import {Link} from 'react-router-dom'
import {Button,Card,Container,Row,Col} from 'react-bootstrap';
function ListMovie({movie}) {

  return (
    <Container  >
    <div  className="container"    style={{display:'flex'  ,height:'70%',flexWrap:'wrap',maxWidth:'100%'}}>
    <Row  >
    <Col sm>
    
    <Card style={{ width: '250px' }}>
    <Card.Img variant="top" src={movie.img}   style={{width:'100%',height:'270px'}} alt="someimg"/>
    <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
    {movie.description}
    </Card.Text>
  
    <Link to={`/create/${movie.id}`}    >
               <Button variant="primary"  
               
              
               style={{
                 display:'flex' ,
               justifyContent:'center',
               textAlign:'center',
               background:'gray',
               
               FlexDirection:'row'
             }}
               >
               
               Show more..

               
               </Button>
               </Link>
               </Card.Body>
               </Card>
               </Col>
               
               </Row>
               
               
               </div>
               </Container>
    )
}

export default ListMovie
