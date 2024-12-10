import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { 
  AppBar, Box, Toolbar, IconButton, Typography, Badge, MenuItem, Menu 
} from '@mui/material';
import { 
  Menu as MenuIcon, AccountCircle, Mail as MailIcon,
  Notifications as NotificationsIcon, MoreVert as MoreIcon 
} from '@mui/icons-material';

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'var(--background-transparent)',
  color: 'var(--primary-color)',
  width: '100vw'
});

const BrandLink = styled(Link)({
  textDecoration: 'none'
});

const BrandText = styled(Typography)({
  fontFamily: 'Gotham-Medium, sans-serif',
  fontSize: '24px',
  fontWeight: 700,
  color: 'var(--primary-color)',
  display: 'none',
  '@media (min-width: 600px)': {
    display: 'block'
  }
});

const DesktopMenu = styled(Box)({
  display: 'none',
  '@media (min-width: 900px)': {
    display: 'flex'
  }
});

const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    backgroundColor: 'var(--background-color)'
  },
  '& .MuiMenuItem-root': {
    color: 'var(--secondary-color)',
    '&:hover': {
      backgroundColor: 'var(--accents-color)'
    }
  }
});

const StyledIconButton = styled(IconButton)({
  '& .MuiSvgIcon-root': {
    color: 'var(--primary-color)'
  }
});

const StyledBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    backgroundColor: 'var(--secondary-color)'
  }
});

export default function NavBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const handleMailClick = () => navigate('/chat');
  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => setMobileMoreAnchorEl(event.currentTarget);

  return (
      <Box sx={{ 
      flexGrow: 1, 
      maxHeight: '64px',
      '& .MuiBox-root': {
        maxHeight: '64px'
      }
      }}>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledIconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </StyledIconButton>
          
          <BrandLink to="/">
            <BrandText>MATCHA</BrandText>
          </BrandLink>

          <Box sx={{ flexGrow: 1 }} />
          <DesktopMenu>
            <StyledIconButton size="large" onClick={handleMailClick}>
              <StyledBadge badgeContent={0}>
                <MailIcon />
              </StyledBadge>
            </StyledIconButton>
            
            <StyledIconButton size="large">
              <StyledBadge badgeContent={1}>
                <NotificationsIcon />
              </StyledBadge>
            </StyledIconButton>
            
            <StyledIconButton
              size="large"
              edge="end"
              onClick={handleProfileMenuOpen}
              aria-controls={menuId}
            >
              <AccountCircle />
            </StyledIconButton>
          </DesktopMenu>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <StyledIconButton
              size="large"
              onClick={handleMobileMenuOpen}
              aria-controls={mobileMenuId}
            >
              <MoreIcon />
            </StyledIconButton>
          </Box>
        </Toolbar>
      </StyledAppBar>

      <StyledMenu
        anchorEl={mobileMoreAnchorEl}
        id={mobileMenuId}
        keepMounted
        open={Boolean(mobileMoreAnchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem>
          <StyledIconButton size="large">
            <StyledBadge badgeContent={0}>
              <MailIcon />
            </StyledBadge>
          </StyledIconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <StyledIconButton size="large">
            <StyledBadge badgeContent={1}>
              <NotificationsIcon />
            </StyledBadge>
          </StyledIconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <StyledIconButton size="large">
            <AccountCircle />
          </StyledIconButton>
          <p>Profile</p>
        </MenuItem>
      </StyledMenu>

      <StyledMenu
        anchorEl={anchorEl}
        id={menuId}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </StyledMenu>
    </Box>
  );
}