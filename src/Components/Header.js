import React from 'react'
import {Typography, AppBar, Toolbar} from '@mui/material'
import {Link} from 'react-router-dom'

const styles = {
    marginLeft : '40px',
    fontSize : {
        xs : '15px',
        sm : '20px',
        md : '25px',
        lg : '40px',
        xl : '40px'
    }
}
function Header() {
  return (
    <>
        <AppBar position='fixed'>
            <Toolbar style={{backgroundColor: "white",color : "#3399ff"}}>
                <Link style={{textDecoration : 'none'}} to='/'>
                    <Typography variant='h5' sx={styles}>
                        CSS Snippet Generator
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header
