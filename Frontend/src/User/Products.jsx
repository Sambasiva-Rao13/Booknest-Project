import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Unavbar from './Unavbar';
import { Button, Card, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Products() {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all items
    axios
      .get(`http://localhost:4000/item`)
      .then((response) => {
        const taskData = response.data;
        setItems(taskData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching tasks: ', error);
        setLoading(false);
      });

    // Fetch wishlist items
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
    axios.get(`http://localhost:4000/wishlist/${user.id}`)
    .then((response) => {
      const wishlistData = response.data;
      setWishlist(wishlistData);
    }) 
  } 
  else{
    console.log('ERROR');
  }
    
  }, []);

  const addToWishlist = async (itemId) => {
    try {
      console.log('itemId before find:', itemId);
      // Find the selected item by itemId
      const selectedItem = items.find((item) => {
        console.log('item._id:', item._id);
        console.log('itemId in find:', itemId);
        return item._id === itemId;
      });
  
      console.log('selectedItem:', selectedItem);
  
      if (!selectedItem) {
        throw new Error('Selected item not found');
      }
  
      // Destructure the needed properties
      const { title, itemImage, _id: itemId2 } = selectedItem;
  
      const userId = JSON.parse(localStorage.getItem('user')).id;
      const userName = JSON.parse(localStorage.getItem('user')).name;
      console.log('itemId2:', itemId2);
      console.log('itemId2:', title);
  
      // Add item to the wishlist
      await axios.post(`http://localhost:4000/wishlist/add`, { itemId: itemId2, title, itemImage,userId,userName });
      // Refresh the wishlist items
      const user = JSON.parse(localStorage.getItem('user'));
      if(user){
      axios.get(`http://localhost:4000/wishlist/${user.id}`)
      .then((response) => {
        const wishlistData = response.data;
        setWishlist(wishlistData);
      }) 
    } 
    else{
      console.log('ERROR');
    }
    } catch (error) {
      console.error('Error adding item to wishlist: ', error);
    }
  };
  
  
  const removeFromWishlist = async (itemId) => {
    try {
      // Remove item from the wishlist
      await axios.post(`http://localhost:4000/wishlist/remove`, { itemId }); // Adjust the endpoint accordingly

      // Refresh the wishlist items
      const user = JSON.parse(localStorage.getItem('user'));
      if(user){
      const response = await axios.get(`http://localhost:4000/wishlist/${user.id}`,); // Adjust the endpoint accordingly
      setWishlist(response.data);
    } 
    else{
      console.log('ERROR');
    }}
    catch (error) {
      console.error('Error removing item from wishlist: ', error);
    }
  };

  const isItemInWishlist = (itemId) => {
    return wishlist.some((item) => item.itemId === itemId);
  };

  const formatPrice = (price) => {
    return parseFloat(price).toFixed(2);
  };

  if (loading) {
    return (
      <div>
        <Unavbar />
        <div className="text-center mt-5">
          <h3>Loading books...</h3>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Unavbar />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Available Books</h2>
        {items.length === 0 ? (
          <div className="text-center mt-5">
            <h4>No books available at the moment.</h4>
            <p>Check back later for new arrivals!</p>
          </div>
        ) : (
          <Row>
            {items.map((item) => (
              <Col key={item._id} lg={4} md={6} sm={12} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={`http://localhost:4000/${item.itemImage}`}
                      style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <Badge 
                      bg="success" 
                      className="position-absolute top-0 end-0 m-2"
                    >
                      ${formatPrice(item.price)}
                    </Badge>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text>
                      <strong>Author:</strong> {item.author}<br/>
                      <strong>Genre:</strong> {item.genre}<br/>
                      <strong>Seller:</strong> {item.userName}
                    </Card.Text>
                    
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="h5 text-success mb-0">
                          ${formatPrice(item.price)}
                        </span>
                        <small className="text-muted">Free Shipping</small>
                      </div>
                      
                      <div className="d-grid gap-2">
                        <Button 
                          variant="primary" 
                          size="sm"
                          as={Link}
                          to={`/uitem/${item._id}`}
                        >
                          View Details
                        </Button>
                        
                        <Button 
                          variant="success" 
                          size="sm"
                          as={Link}
                          to={`/orderitem/${item._id}`}
                        >
                          Buy Now
                        </Button>
                        
                        {isItemInWishlist(item._id) ? (
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => removeFromWishlist(item._id)}
                          >
                            Remove from Wishlist
                          </Button>
                        ) : (
                          <Button
                            variant="outline-warning"
                            size="sm"
                            onClick={() => addToWishlist(item._id)}
                          >
                            Add to Wishlist
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default Products;

