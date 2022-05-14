import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

const Images = () => {
    const [image,setImage] = useState([]);
    useEffect(() => {
        axios.get("https://pixabay.com/api/?key=27333739-9d7bbeb03e4b3d298d2f5f31e&image_type=photo&per_page=200")
          .then((response) => {
            setImage(response?.data?.hits);
          });
      }, []);

  return (
    <div style={{marginTop:'2%'}}>
       <Grid container spacing={2}>
       {image?.map((item, key) => 
        (
          <Grid item xs={12} sm={6} md={4} lg={3}>
         <img src={item?.largeImageURL} key={key} alt="img" height="300px" width="100%" style={{objectFit:'cover',borderRadius:'5px'}}/>
         </Grid>
        )
    )}
       </Grid>
    </div>
  )
}

export default Images