import styled from '@emotion/styled'
import { Button, Stack } from '@mui/material'
import { Container, display } from '@mui/system'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const containerMenu = {
  margin : '80px 20px',
}

function ContainerMenu() {
  return (
    <div>
          <Stack sx={containerMenu} md={{display : 'none'}}  direction="row" spacing={2}>
              <Link to='Border-Generator'>
                <Button>CSS Border Generator</Button>
              </Link>
              <Link to='Background-Generator'>
                <Button>Background Generator</Button>
              </Link>
              <Button>Image Filter Generator</Button>
          </Stack>
        <Outlet />
    </div>
  )
}

export default ContainerMenu
