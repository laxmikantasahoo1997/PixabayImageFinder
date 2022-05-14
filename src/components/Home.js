import React from 'react';
import {Button} from '@mui/material';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Images from './Images';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/logo.png'

const Home = () => {
  const navigate = useNavigate();

      const FindImage = () =>{
          navigate('/search/photos');
      }
  return (
      <>
    <div className='bgimage'>
        <div className='navbar'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <div style={{marginTop:'20px'}}>
          <img src={Logo} alt="img" height={50} width={50} style={{borderRadius:'50%'}}/>
          </div>
          </Typography>
        </Toolbar>
            <div className='nav-buttons'>
                <Stack spacing={2} direction="row">
                <Button variant="contained" size="small">Signin</Button>
                <Button variant="contained"size="small">Signup</Button>
                </Stack>
            </div>
        </div>
        <div className='main-content'>
            <div>
            <Typography variant="h3" component="div"  className='header'>
            Stunning free images & royality free stock
      </Typography>
            <p style={{textAlign:'center'}}>Over 2.6 million+ high quality stock images, videos and music shared by our talented community.</p>
            <p style={{textAlign:'center',color:'lightblack'}}>Popular Images: background, wallpaper, nature, flowers, money, mothers day, flower, business, beach, food, sky, dog, coronavirus</p>
            <div style={{textAlign:'center',marginBottom:'20px'}}>

            <Button  onClick={FindImage} style={{width:'70%',height:'15%',padding:'2%',borderRadius:'30px 30px 30px 30px',backgroundColor:'white',color:'black'}} ><SearchIcon/> Search For Your Favorite Images </Button>
            </div>
            </div>
        </div>
    </div>
  <Images/>
    </>
  )
}

export default Home