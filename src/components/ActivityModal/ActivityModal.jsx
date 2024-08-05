import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, List, ListItem, ListItemText, CardMedia } from '@mui/material';
import PropTypes from 'prop-types';

const ActivityModal = ({ open, onClose, activity }) => {
    if (!activity) return null;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle sx={{ background: 'linear-gradient(90deg, #5324c6 0%, #840fbe 100%)', color: '#fff', textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                {activity.title}
            </DialogTitle>
            <DialogContent sx={{ padding: '24px' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={activity.image}
                    alt={activity.title}
                    sx={{ width: '100%', marginBottom: '16px' }}
                />
                <Typography variant="body1" paragraph>
                    {activity.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px' }}>
                    <strong>Data:</strong> {activity.date}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px' }}>
                    <strong>Localização:</strong> {activity.location}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px' }}>
                    <strong>Palestrantes:</strong>
                </Typography>
                <List dense>
                    {activity.speakers.map((speaker, index) => (
                        <ListItem key={index} sx={{ paddingLeft: 0 }}>
                            <ListItemText primary={speaker} />
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'flex-end', padding: '16px 24px' }}>
                <Button
                    onClick={onClose}
                    variant="outlined"
                    color="primary"
                    sx={{
                        padding: '10px 20px',
                        borderRadius: '20px',
                        borderColor: '#F5167E',
                        color: '#F5167E',
                        '&:hover': {
                            backgroundColor: '#F5167E1f',
                        }
                    }}
                >
                    Fechar
                </Button>
                <Button
                    href={activity.registration}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="primary"
                    sx={{
                        backgroundColor: '#F5167E',
                        padding: '10px 20px',
                        borderRadius: '20px',
                        '&:hover': {
                            backgroundColor: '#F5167Ec1',
                        }
                    }}
                >
                    Inscrição
                </Button>
            </DialogActions>
        </Dialog>
    );
};

ActivityModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    activity: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        speakers: PropTypes.arrayOf(PropTypes.string).isRequired,
        registration: PropTypes.string.isRequired
    })
};

export default ActivityModal;
