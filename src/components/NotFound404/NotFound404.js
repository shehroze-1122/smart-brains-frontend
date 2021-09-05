import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import './notFound404.css';

const NotFound404 = () => {
    return (
            <section className="page_404">
                <Container>
                    <Row>	
                        <Col sm={12}>
                            <Col sm={10} offset={1} className="tc">
                                <div className="four_zero_four_bg">
                                    <h2 className="tc">404</h2>
                                </div>
                        
                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Look like you're lost
                                    </h3>
                        
                                    <p>The page you are looking for is not available!</p>
                        
                                    <Link to="/" className="link_404">Go Back!</Link>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </section>
    )
}
export default NotFound404;
