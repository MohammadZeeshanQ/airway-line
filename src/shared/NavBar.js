import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, SwipeableDrawer, List, ListItem, Divider } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const mobileButtonData = [
    {
        'name': 'Book',
        'link': ''
    },
    {
        'name': 'Manage',
        'link': ''
    },
    {
        'name': 'Charter',
        'link': ''
    },
    {
        'name': 'Cargo',
        'link': ''
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
    },
    loginButton: {
        fontFamily: 'popS',
        backgroundColor: '#005BFF',
        color: '#fcfcfc',
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
                                    <Button className={classes.tab} variant='outlined'>
                                        {item.name}
                                    </Button>
                                </ListItem>

                            )
                        }

                        <div className={classes.signInMargin}>
                            <Divider />
                            <ListItem className={classes.listItemBackground} >
                                <Button className={classes.tab} variant='outlined'>
                                    Sign Up
                                </Button>
                            </ListItem>
                            <Divider />

                            <ListItem className={classes.listItemBackground}>
                                <Button className={classes.tab} variant='outlined'>
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
