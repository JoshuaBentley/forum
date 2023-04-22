import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid, } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'
import SWlogo from './img/starwarslogo.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import makeStyles from './styles'

const App = () => {
    const styling = makeStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <Container maxidth="lg">
            <AppBar className={styling.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Stars Fan Page</Typography>
                <img className={styling.image} src={SWlogo} alt="Star Wars logo" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} xm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} xm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App