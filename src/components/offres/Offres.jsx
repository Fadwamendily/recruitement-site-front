import { Col, Row } from 'antd'
import React from 'react'
import { Switch ,Route } from 'react-router-dom'
import Navigation from '../../pages/boards/navigation/Navigation'
import Sider from './Sider'
import {useParams, useRouteMatch} from 'react-router'

const Offres = () => {

    let { path, url } = useRouteMatch();

    return (
        <div class='main-content'  >
            <Navigation />
            <br />
            <div style={{ marginTop: '200px' }}  >

                <Row>

                    <Col span={4} >
                        <Sider />
                    </Col>
                    <Col span={14} >
                        <Switch>
                            <Route exact path={path}>
                                <h3>Please select a topic.</h3>
                            </Route>
                            <Route path={`${path}/:topicId`}>
                                <Topic />
                            </Route>
                        </Switch>
                    </Col>
                    <Col span={6} >filter</Col>

                </Row>

            </div>
        </div>
    )
}



export default Offres


function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();
    
    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }
