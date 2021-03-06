import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, SwipeableDrawer, List, ListItem, Divider } from '@material-ui/core'

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import FlightIcon from '@material-ui/icons/Flight';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

const mobileButtonData = [
    {
        'name': 'Book',
        'link': '',
        'icon': <FlightIcon style={{ marginRight: '0.5rem', }} />
    },
    {
        'name': 'Manage',
        'link': '',
        'icon': <PlaylistAddCheckIcon style={{ marginRight: '0.5rem', }} />
    },
    {
        'name': 'Charter',
        'link': '',
        'icon': <FlightTakeoffIcon style={{ marginRight: '0.5rem', }} />
    },
    {
        'name': 'Cargo',
        'link': '',
        'icon': <LocalShippingIcon style={{ marginRight: '0.5rem', }} />
    },
];

const useStyles = makeStyles({
    root: {
        backgroundColor: '#fcfcfc',
    },
    wrapper: {
        width: '80%',
        height: '64',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',

        '@media(max-width: 600px)': {
            width: '90%',
        },
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        flexGrow: '1',
    },
    logo: {
        fontFamily: 'popS',
        marginRight: '1rem',
        letterSpacing: '2px',
    },
    logSpanoColor: {
        color: '#005BFF',
    },
    tabContainer: {

        '@media(max-width: 1024px)': {
            display: 'none',
        },
    },
    tab: {
        fontFamily: 'popS',
        border: 'none',
        margin: '0 1rem',
        letterSpacing: '2px',
    },
    buttonContainer: {
        '@media(max-width: 1024px)': {
            display: 'none',
        },
    },
    signInButton: {
        fontFamily: 'popS',
        marginRight: '1.5rem',
        border: 'none',
        color: '#005BFF',
        letterSpacing: '2px',
    },
    loginButton: {
        fontFamily: 'popS',
        backgroundColor: '#005BFF',
        color: '#fcfcfc',
        letterSpacing: '2px',
    },
    mobileMenuContainer: {
        display: 'none',

        '@media(max-width: 1024px)': {
            display: 'block',
        },
    },
    paper: {
        width: 250,
        borderRadius: '2rem 0 0 2rem',
    },
    signInMargin: {
        marginTop: '2rem',
    },
    listItemBackground: {
        backgroundColor: '#E0EAFC',
    },
});

export default function NavBar() {

    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);


    const drawerToggle = () => {
        setDrawer(!drawer);
    }

    return (
        <AppBar className={classes.root} color='default' elevation={0} position='fixed' >
            <Toolbar className={classes.wrapper}>
                <div className={classes.logoContainer}>
                    <Typography className={classes.logo} variant='h5'>
                        Willow.<span className={classes.logSpanoColor}>Air</span>
                    </Typography>

                    <div className={classes.tabContainer}>
                        <Button className={classes.tab} variant='outlined'>
                            Book
                        </Button>
                        <Button className={classes.tab} variant='outlined'>
                            Manage
                        </Button>
                        <Button className={classes.tab} variant='outlined'>
                            Charter
                        </Button>
                        <Button className={classes.tab} variant='outlined'>
                            Cargo
                        </Button>
                    </div>
                </div>


                <div className={classes.buttonContainer}>
                    <Button className={classes.signInButton} variant='outlined'>
                        Sign Up
                    </Button>
                    <Button className={classes.loginButton} variant='contained'>
                        Login
                    </Button>
                </div>

                <div className={classes.mobileMenuContainer}>
                    {drawer ? <CloseIcon onClick={drawerToggle} style={{ fontSize: '2.2rem', }} /> : <MenuIcon onClick={drawerToggle} style={{ fontSize: '2.2rem', }} />}
                </div>


                {/* Mobile Drawer */}
                <SwipeableDrawer anchor='right' open={drawer} onOpen={() => setDrawer(true)} onClose={() => setDrawer(false)} classes={{ paper: classes.paper }} >
                    <List>

                        {
                            mobileButtonData.map((item, index) =>
                                <ListItem key={index} >
                                    <Button className={classes.tab} variant='outlined' startIcon={item.icon} >
                                        {item.name}
                                    </Button>
                                </ListItem>

                            )
                        }

                        <div className={classes.signInMargin}>
                            <Divider />
                            <ListItem className={classes.listItemBackground} >
                                <Button className={classes.tab} variant='outlined' startIcon={<PersonAddIcon style={{ marginRight: '0.5rem', }} />} >
                                    Sign Up
                                </Button>
                            </ListItem>
                            <Divider />

                            <ListItem className={classes.listItemBackground}>
                                <Button className={classes.tab} variant='outlined' startIcon={<AccountCircleIcon style={{ marginRight: '0.5rem', }} />} >
                                    Login
                                </Button>
                            </ListItem>
                        </div>

                    </List>
                </SwipeableDrawer>

            </Toolbar>
        </AppBar>
    )
}
