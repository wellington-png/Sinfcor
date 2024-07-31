import React from 'react';
import { Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const Divider = styled.div`
    font-size: 30px;
    display: flex;
    align-items: center;
    &::before, &::after {
        content: '';
        height: 1px;
        background-color: silver;
        flex-grow: 1;
        margin: 0 20px;
    }
`;


const SectionContainer = ({ title, description = null, minHeight = '60vh', children }) => {

    return (
        <Container maxWidth="xl" sx={{ padding: '2rem 0', textAlign: 'center', minHeight: minHeight }}>
            {/* Text Divider */}
            <Divider variant="h4" gutterBottom>
                <Typography variant="h4" component="h2">
                    {title}
                </Typography>
            </Divider>

            {
                description && (
                    <Typography variant="body1" gutterBottom>
                        {description}
                    </Typography>
                )
            }

            {children}
        </Container>
    );
};

SectionContainer.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.node.isRequired,
    minHeight: PropTypes.string,
};

export default SectionContainer;
