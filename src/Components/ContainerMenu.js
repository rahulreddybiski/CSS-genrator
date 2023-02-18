import { useTheme } from '@emotion/react'
import { Button, makeStyles, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const containerMenu = {
  margin : '80px 20px',
  display : {
    xs : 'none',
    sm : 'none',
    md : 'none',
    lg : 'block',
    xl : 'block'
  }
}



function ContainerMenu() {

  return (
    <div>
          <Stack sx={containerMenu} md={{display : 'none'}}  direction="row" spacing={2}>
              <Link to='Border-Generator'>
                <Button>CSS Border Radius Generator</Button>
              </Link>
              <Link to='Background-Generator'>
                <Button>Background Generator</Button>
              </Link>
              <Link to='Border-radius-generator'>
                <Button>Border Radius Generator</Button>
              </Link>
              <Link to='Image-Filter-Generator'>
                <Button>Image Filter Generator</Button>
              </Link>
          </Stack>
        <Outlet />
    </div>
  )
}

export default ContainerMenu
