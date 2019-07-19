import React from 'react';
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

const Info = ({title, children}) => {
    return (
        <React.Fragment>
            <div className="container">
                <Row>
                    <Col md='4' className="ml-auto mr-auto" style={{paddingTop: '23%'}}>
                            <div className="text-capitalize text-center">
                                    <h6 className="text-capitalize text-danger" style={{fontSize: '30px'}}>Welcome Dota Players</h6>
                                    <h6 className="text-light">{title}</h6>
                                    <Link to="/hero" className="btn btn-danger">Time for target practice.</Link>
                            </div>
                    </Col>   
                </Row>
            </div>
        </React.Fragment>
    );
}

export default Info;
