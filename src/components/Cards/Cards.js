import React from 'react';
import { Col, Row, Card } from 'antd';
import './Cards.css'
import ChangeFonts from '../ChangeFonts/ChangeFonts';

function DashCards() {
    return (
        <div className="DashCards">
        <ChangeFonts/>
            <Row>
                <Col lg={12} md={24} sm={24}>
                <div className = "Cards" id="card1">
                    <Card title="Congratulations">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Card>
                </div>
                </Col>

                <Col lg={6} md={12} sm={24}>
                <div className = "Cards">
                    <Card title="Profit">
                    <p>$12.628</p>
                    </Card>
                </div>
                </Col>
                

                <Col lg={6} md={12} sm={24}>
                    <div className = "Cards">
                        <Card title="Sales">
                        <p>$4.679</p>
                        </Card>
                    </div>
                </Col>
            </Row>
    


            <Row>
                <Col lg={12} md={24} sm={24}>
                <div className = "Cards">
                    <Card title="Total Revenue">
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <h4>Why do we use it?</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </Card>
                </div>
                </Col>


        <Row>
                <Col lg={12} md={12} sm={24}>
                    <div className = "Cards">
                        <Card title="Payments">
                        <p>$2.456</p>
                        </Card>
                    </div>
                </Col>

                <Col lg={12} md={12} sm={24}>
                    <div className = "Cards">
                        <Card title="Transactions">
                        <p>$14.857</p>
                        </Card>
                    </div>
                </Col>


                <Col lg={24} md={24} sm={24}>
                    <div className = "Cards">
                        <Card title="Profile Report">
                        <p
                        style={{
                        fontSize: '[$fontSize]px'
                        }}>$84.686</p>
                        </Card>
                    </div>
                </Col>
            </Row>
            </Row>
        </div>
        
        )
}

export default DashCards;