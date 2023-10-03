import React from 'react';
import {useParams} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'

const PublicationPage = () => {
    return (
        <>
            <div id='content-page' className='content-page'>

           <Container>
                <Row>
                    <Col lg="12">
                        Add Your HTML Content Here.....
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default PublicationPage