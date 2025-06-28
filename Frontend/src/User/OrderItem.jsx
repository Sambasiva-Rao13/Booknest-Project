import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Unavbar from './Unavbar';
import { Button, Card, Form, Row, Col, Alert } from 'react-bootstrap';

function OrderItem() {
  const [item, setItem] = useState(null);
  const [formData, setFormData] = useState({
    flatno: '',
    city: '',
    pincode: '',
    state: '',
    phone: '',
    totalamount: '',
    seller: '',
    description: '',
    booktitle: '',
    bookauthor: '',
    bookgenre: '',
    itemImage: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/item/${id}`)
      .then((resp) => {
        console.log(resp);
        setItem(resp.data);
        // Pre-fill form data with book information
        setFormData(prev => ({
          ...prev,
          booktitle: resp.data.title,
          bookauthor: resp.data.author,
          bookgenre: resp.data.genre,
          itemImage: resp.data.itemImage,
          seller: resp.data.userName,
          sellerId: resp.data.userId,
          description: resp.data.description,
          totalamount: resp.data.price
        }));
      })
      .catch((error) => {
        console.log("Did not get data", error);
        setError('Failed to load book details');
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validate required fields
      if (!formData.flatno || !formData.city || !formData.pincode || !formData.state || !formData.phone) {
        setError('Please fill in all required fields');
        setLoading(false);
        return;
      }

      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        setError('Please login to place an order');
        setLoading(false);
        return;
      }

      const orderData = {
        ...formData,
        userId: user.id,
        userName: user.name,
        BookingDate: new Date().toISOString(),
        Delivery: 'Pending'
      };

      await axios.post('http://localhost:4000/userorder', orderData);
      alert('Order placed successfully!');
      navigate('/myorders');
    } catch (error) {
      console.error('Error placing order: ', error);
      setError('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!item) {
    return (
      <div>
        <Unavbar />
        <div className="text-center mt-5">
          <h3>Loading...</h3>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Unavbar />
      <div className="container mt-4">
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header>
                <h4>Book Details</h4>
              </Card.Header>
              <Card.Body>
                <div className="text-center mb-3">
                  <img 
                    src={`http://localhost:4000/${item.itemImage}`} 
                    alt={item.title}
                    style={{ maxHeight: '300px', maxWidth: '100%' }}
                    className="img-fluid"
                  />
                </div>
                <h5>{item.title}</h5>
                <p><strong>Author:</strong> {item.author}</p>
                <p><strong>Genre:</strong> {item.genre}</p>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Seller:</strong> {item.userName}</p>
                <p><strong>Description:</strong> {item.description}</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card>
              <Card.Header>
                <h4>Shipping Information</h4>
              </Card.Header>
              <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Flat/House Number *</Form.Label>
                    <Form.Control
                      type="text"
                      name="flatno"
                      value={formData.flatno}
                      onChange={handleChange}
                      placeholder="Enter flat/house number"
                      required
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>City *</Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Enter city"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Pincode *</Form.Label>
                        <Form.Control
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          placeholder="Enter pincode"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>State *</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter state"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number *</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      required
                    />
                  </Form.Group>

                  <Card className="mb-3 bg-light">
                    <Card.Body>
                      <h6>Order Summary</h6>
                      <div className="d-flex justify-content-between">
                        <span>Book Price:</span>
                        <span>${item.price}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Shipping:</span>
                        <span>Free</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <strong>Total Amount:</strong>
                        <strong>${item.price}</strong>
                      </div>
                    </Card.Body>
                  </Card>

                  <Button 
                    type="submit" 
                    variant="success" 
                    size="lg" 
                    className="w-100"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Place Order'}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default OrderItem;
