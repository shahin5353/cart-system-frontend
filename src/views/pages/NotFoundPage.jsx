import { Button, Result } from 'antd';
import React from 'react';
import { withRouter } from "react-router-dom";


const NotFoundPage = (props) => {
    return (
        <Result
        status="404"
        // title="500"
        subTitle="Sorry, The page you requested does not exists"
        extra={<Button type="primary" onClick={() => props.history.push("/")} >Back Home</Button>}
    />
    );
};

export default withRouter(NotFoundPage);