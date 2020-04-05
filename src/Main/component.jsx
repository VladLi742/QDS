import React, { useEffect } from 'react';
import { LinearProgress, Container } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import Converter from '../Converter/container';
import Table from '../Table/container';

const container = {
    padding: "24px",
    boxShadow: '0 0 10px #d3d3d3',
};
const h1 = {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'unset',
    textAlign: 'center',
};

export default function (props) {
    useEffect(() => {
        const { fetchData } = props;
        fetchData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const { isLoaded, error } = props;
    return (
        isLoaded ? (
            <Container
                maxWidth="sm"
                style={container}
            >
                <h1 style={h1}>Конвертер валют</h1>
                <Converter/>
                <Table/>
            </Container>
        ) : error ? (
            <Alert variant="filled" severity="error">
                {error}
            </Alert>
        ) : <LinearProgress/>
    );
};