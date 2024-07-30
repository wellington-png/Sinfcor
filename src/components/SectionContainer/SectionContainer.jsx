import React from 'react';
import { Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';


const SectionContainer = ({ title, description = null, minHeight='60vh', children }) => {

    return (
        <Container maxWidth="xl" sx={{ padding: '2rem 0', textAlign: 'center', minHeight: minHeight  }}>
            <Typography variant="h4" component="h2" gutterBottom>
                {title}
            </Typography>
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
