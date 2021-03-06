import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import PlaneImage from '../../assets/images/planeBackground.png'
import WhietBg from '../../assets/images/whiteBackground.jpg'


const useStyles = makeStyles({
    root: {
        position: 'relative',

        '@media(max-width: 600px)': {
            paddingBottom: '3rem',
        },
    },
    wrapper: {
        position: 'relative',
        width: '80%',
        margin: 'auto',
        paddingTop: '10rem',
        zIndex: '2',

        '@media(max-width: 600px)': {
            paddingTop: '6rem',
            width: '90%',
        },
        '@media(min-width: 601px) and (max-width: 1024px)': {
            paddingTop: '6rem',
        },
    },
    whiteBackground: {
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '1',
        width: '100%',
        height: '100%',
        objectFit: 'cover',

        '@media(max-width: 600px)': {
            borderRadius: '0 0 2.5rem 2.5rem',
        },
    },
    textContainer: {
        textAlign: 'center',
        padding: '2rem 0 1rem 0',
    },
    header: {
        fontFamily: 'popB',
        letterSpacing: '2px',
        color: '#3c3c3c',

        '@media(max-width: 600px)': {
            fontSize: '3rem',
        },
        '@media(min-width: 601px) and (max-width: 1024px)': {
            fontSize: '2.5rem',
        },
    },
    description: {
        fontFamily: 'popR',
        margin: '1.5rem 0',
        letterSpacing: '1px',
        color: '#3c3c3c',

        '@media(max-width: 600px)': {
            fontSize: '1.15rem',
            margin: '2.5rem 0',
        },
        '@media(min-width: 601px) and (max-width: 1024px)': {
            fontSize: '.8rem',
            margin: '1rem 0',
        },
    },
    button: {
        fontFamily: 'popS',
        backgroundColor: '#005BFF',
        color: '#fcfcfc',
        padding: '0.7rem 3rem',
        letterSpacing: '2px',

        '@media(min-width: 601px) and (max-width: 1024px)': {
            padding: '.5rem 2rem',
            fontSize: '.7rem',
        },
    },
    imageContainer: {
        '@media(max-width: 600px)': {
            display: 'none',
        },
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

});

export default function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>

                <div className={classes.textContainer}>
                    <Typography className={classes.header} variant='h2'>
                        Are you ready for our trip?
                    </Typography>
                    <Typography className={classes.description} variant='body1'>
                        Let's fly with us and feel the comfort that we provide
                    </Typography>
                    <Button className={classes.button} variant='contained' >Let's Fly</Button>
                </div>

                <div className={classes.imageContainer}>
                    <img className={classes.image} src={PlaneImage} alt='Willow Airline' />
                </div>

            </div>
            <img src={WhietBg} className={classes.whiteBackground} alt='White Plane Patern' />
        </div>
    )
}
