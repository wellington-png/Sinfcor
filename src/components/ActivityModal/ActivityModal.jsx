import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, List, ListItem, ListItemText, CardMedia } from '@mui/material';
import PropTypes from 'prop-types';

const ActivityModal = ({ open, onClose, activity }) => {
    if (!activity) return null;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle color='#242565'>{activity.title}</DialogTitle>
            <DialogContent>
                <CardMedia  component="img" height="200" image={activity.image} alt={activity.title} sx={{ borderRadius: 5 }} />
                <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                    {activity.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    <strong>Data:</strong> {activity.date}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    <strong>Localização:</strong> {activity.location}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    <strong>Palestrantes</strong>
                </Typography>
                <List dense>
                    {activity.speakers.map((speaker, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={speaker} />
                        </ListItem>
                    ))}
                </List>
                <Typography variant="body2" color="textSecondary">
                    <strong>Inscrição:</strong> <a href={activity.registration} target="_blank" rel="noopener noreferrer">Clique aqui</a>
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Fechar
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
