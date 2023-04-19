import React from "react";
import {Container, AppBar, Typography, Grow, Grid, } from '@material-ui/core'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import SWlogo from './img/starwarslogo.png'

const App = () => {
    return (
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Stars Fan Page</Typography>
                <img src={SWlogo} alt="Star Wars logo" height="160"/>
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