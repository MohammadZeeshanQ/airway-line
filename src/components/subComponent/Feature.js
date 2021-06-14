import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core'

import image1 from '../../assets/images/blue1.png'
import image2 from '../../assets/images/blue2.png'
import image3 from '../../assets/images/blue3.png'

const gridData = [
    {
        'number': '01',
        'imagePath': image1,
        'header': 'Priority Check-in at other Airports',
        'description': 'You will get more priority when checking is to your destination airport'
    },
    {
        'number': '02',
        'imagePath': image2,
        'header': 'Free unlimited lounge Access',
        'description': 'You will given premium services when you visit a lounge that provides facilities'
    },
    {
        'number': '03',
        'imagePath': image3,
        'header': 'Excess baggage Allowance',
        'description': 'Enjoy an additional 25-kg per traveller that is travelling with us'
    },
]

const useStyles = makeStyles({
    root: {
        padding: '3rem 0',

        '@media(max-width: 600px)': {
            padding: '2rem 0',
        },
        '@media(min-width: 601px) and (max-width: 1024px)': {
            padding: '2rem 0',
        },
    },
    wrapper: {
        width: '80%',
        margin: 'auto',

        '@media(max-width: 600px)': {
            width: '90%',
        },
        '@media(min-width: 601px) and (max-width: 1024px)': {

        },
    },
    messageContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: '3rem 0',

        '@media(max-width: 600px)': {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            margin: '2rem 0',
        },
        '@media(min-width: 601px) and (max-width: 1024px)': {

        },
    },
    messageHeaderWrapper: {

        '@media(max-width: 600px)': {
            border: '1px solid #808080',
            padding: '1rem',
            borderRadius: '1rem',
            marginBottom: '2rem',
        },
        '@media(min-width: 601px) and (max-width: 1024px)': {

        },
    },
    messageHeader: {
        fontFamily: 'popS',
        color: '#3c3c3c',

        '@media(max-width: 600px)': {
            fontSize: '2.8em',
            textAlign: 'center',
            lineHeight: '140%',
        },
        '@media(min-width: 601px) and (max-width: 1024px)': {

        },
    },
    messageDescriptionWrapper: {

    },
    messageDescription: {
        fontFamily: 'popR',
        color: '#808080',
        paddingLeft: '4rem',

        '@media(max-width: 600px)': {
            paddingLeft: '0',
            lineHeight: '170%',
            letterSpacing: '1px',
            fontSize: '1.3rem',
        },
        '@media(min-width: 601px) and (max-width: 1024px)': {

        },
    },
    gridWrapper: {
        padding: '1.5rem',
    },
    gridNumberContainer: {

    },
    gridNumber: {
        fontFamily: 'popS',
        margin: '1rem 0',
        color: '#808080',
    },
    gridImageContainer: {

    },
    gridImage: {
        height: '25rem',
        width: '100%',
        objectFit: 'cover',
    },
    gridHeader: {
        fontFamily: 'popS',
        margin: '1.5rem 0',
        color: '#3c3c3c',
    },
    gridDescription: {
        fontFamily: 'popR',
        color: '#808080',
    },

});

export default function Feature() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>

                <div className={classes.messageContainer}>
                    <div className={classes.messageHeaderWrapper}>
                        <Typography className={classes.messageHeader} variant='h3'>
                            We offer several advantages for you!
                        </Typography>
                    </div>
                    <div className={classes.messageDescriptionWrapper}>
                        <Typography className={classes.messageDescription} variant='h6'>
                            You will get more priority when checking is to your destination airport.
                            Enjoy more travel point with us to gain great rewards and tour.
                        </Typography>
                    </div>
                </div>

                <Grid
                    container
                    xs={12}
                    sm={12}
                    md={12}
                    justify='center'

                >
                    {
                        gridData.map((item, index) =>
                            <Grid
                                item
                                xs={12}
                                sm={4}
                                md={4}
                                key={index}
                            >
                                <div className={classes.gridWrapper}>
                                    <div className={classes.gridNumberContainer}>
                                        <Typography className={classes.gridNumber} variant='h4'>
                                            {item.number}
                                        </Typography>
                                    </div>
                                    <div className={classes.gridImageContainer}>
                                        <img className={classes.gridImage} src={item.imagePath} alt='Airport Airlines' />
                                    </div>
                                    <div className={classes.gridHeader}>
                                        <Typography className={classes.gridHeader} variant='h5'>
                                            {item.header}
                                        </Typography>
                                        <Typography className={classes.gridDescription} variant='body1'>
                                            {item.description}
                                        </Typography>
                                    </div>
                                </div>

                            </Grid>
                        )
                    }
                </Grid>

            </div>
        </div>
    )
}
