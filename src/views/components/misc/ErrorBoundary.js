// import React, { Component } from "react";
import { Result, Button } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import FooterFixedBottom from '../navigation/FooterFixedBottom'
import TopBar from '../navigation/TopBar'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    componentDidCatch(error, info) {
        console.log('exception',{
            'name': error.message,
            'path': this.props.history.location.pathname,
            'componentSpecified': info.componentStack.split(')')[0]
        })
    }
    render() {
        if (this.state.hasError) {
            return (
                <>
                    <div className="page-basic-container">
                        <TopBar />
                        <Result
                            status='500'
                            // title="500"

                            subTitle='Sorry, Something went Wrong'
                            extra={
                                <a href='/'>
                                    <Button type='primary'>
                                        Back Home
                                    </Button>
                                </a>
                            }
                        />
                    </div>
                    <FooterFixedBottom/>
                </>
            )
        }
        return this.props.children
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

function mapStateToProps({}) {
    return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary))
