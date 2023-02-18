import React from 'react'
import {Grid, Paper, Container, Avatar, Typography, CardMedia} from '@mui/material'
import {Card, CardHeader, CardContent} from '@mui/material'
import BorderAllIcon from '@mui/icons-material/BorderAll';
import FormatShapesIcon from '@mui/icons-material/FormatShapes';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { Link } from 'react-router-dom'

const CardStyles = {
    transform : 'scale(1)',
    transition : '0.8s ease-in-out',

    "&:hover": {
       transform : 'scale(1.1)'
    }
}



function Hero() {

  return (
    <div>
        <Container style={{width : "80%", marginTop : '100px'}}>
            <Grid container spacing={10}>
                {/* first card */}
                <Grid item xs={12} sm={6}  md={4}>
                    <Card sx={CardStyles}>
                        <BorderAllIcon sx={{margin : '8px'}} />
                        <CardHeader sx={{height : '100px'}}
                        title='CSS Border Generator'
                        subheader='Generate a good looking border for your html elements'
                        >
                        </CardHeader>
                        <CardContent>
                            <Link to='/CSS-Generator/Border-Generator' style={{color : 'blue',textDecoration : 'none'}}>Go To Generator </Link>
                        </CardContent>
                    </Card>
                </Grid>

                {/* second grid Item */}
                <Grid item xs={12} sm={6}  md={4}>
                    <Card sx={CardStyles}>
                        <FormatShapesIcon sx={{margin : '8px'}} />
                        <CardHeader sx={{height : '100px'}}
                        title='Background Generator'
                        subheader='Generate CSS with Background generator Tool'
                        >
                        </CardHeader>
                        <CardContent>
                            <Link to='/CSS-Generator/Background-Generator' style={{color : 'blue',textDecoration : 'none'}}>Go To Generator</Link>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Third Item */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={CardStyles}>
                        <BorderAllIcon sx={{margin : '8px'}} />
                        <CardHeader  sx={{height : '100px'}}
                        title='CSS Border Radius Generator'
                        subheader='Create Border radius by adding border to different sides'
                        >
                        </CardHeader>
                        <CardContent>
                            <Link to='/CSS-Generator/Border-radius-generator' style={{color : 'blue',textDecoration : 'none'}}>Go To Generator </Link>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Fourth component */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={CardStyles}>
                        <InsertPhotoIcon sx={{margin : '8px'}} />
                        <CardHeader  sx={{height : '100px'}}
                        title='Image Filter Generator'
                        subheader='Create filters by adding unique styles to your photos'
                        >
                        </CardHeader>
                        <CardContent>
                            <Link to='/CSS-Generator/Image-Filter-Generator' style={{color : 'blue',textDecoration : 'none'}}>Go To Generator </Link>
                        </CardContent>
                    </Card>
                </Grid>
                
            </Grid>
        </Container>
    </div>
  )
}

export default Hero
