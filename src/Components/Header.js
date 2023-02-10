import React from 'react'
import {Typography, AppBar, Toolbar} from '@mui/material'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
        <AppBar position='fixed'>
            <Toolbar style={{backgroundColor: "white",color : "#3399ff"}}>
                <Link style={{textDecoration : 'none'}} to='/'>
                    <Typography variant='h5' style={{marginLeft : '40px'}}>
                        CSS Snippet Generator
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header
