import { Box, Typography, Stack } from '@mui/material';
import {LinkedIn, Email, Phone, LocationOn } from '@mui/icons-material';

export default function Footer() {

    const styles = {
        mainContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: { xs: 'center', sm: 'space-between' },
            backgroundColor: 'white',
            p: 3,
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)',
            marginTop: '0px',
        },
        firstField: {
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: {
                xs: 'center',
                sm: 'space-between',
            },
            gap: 2,
        },
        secondField: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', sm: 'row' },
            mt: 2,
            pt: 1,
            borderTop: '1px solid',
            borderColor: 'divider',
            gap: 2
        },

    }

    return (
    <Box sx={styles.mainContainer}>
        <Box sx={styles.firstField}>

            {/* À propos */}
            <Box >
                <Typography variant='h5' color='primary.main' gutterBottom>
                    À propos de nous
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Découvrez de nouvelles rencontres passionnantes. Rejoignez notre communauté et partagez vos intérêts.
                </Typography>
            </Box>

            {/* Liens utiles */}
            <Box>
                <Typography variant='h5' color='primary.main' gutterBottom>
                    Contact 1
                </Typography>
                <Stack spacing={2}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <Email color="action" />
                        <Typography variant="body2" color="text.secondary">
                            contact@example.com
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                        <LinkedIn color="action" />
                        <Typography variant="body2" color="text.secondary">
                            LinkedIn
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            {/* Contact */}
            <Box>
                <Typography variant='h5' color='primary.main' gutterBottom>
                    Contact 2
                </Typography>
                <Stack spacing={2}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <Email color="action" />
                        <Typography variant="body2" color="text.secondary">
                            contact@example.com
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                        <LinkedIn color="action" />
                        <Typography variant="body2" color="text.secondary">
                            LinkedIn
                        </Typography>
                    </Box>
                </Stack>
            </Box>
        </Box>

        {/* copyright * */}
        <Box sx={styles.secondField}>
            <Typography variant="body2" color="text.secondary" align="center">
                © {new Date().getFullYear()} Matcha. All rights reserved.
            </Typography>
        </Box>
    </Box>
    );
}