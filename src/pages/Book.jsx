import { Avatar, Button, CardMedia, Card, Box, CardHeader, CardContent, List, ListItem, ListItemText, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { Footer } from "../components";
import { getBook } from "../sermons";


export default function Book() {
    let params = useParams();
    let book = getBook(parseInt(params.bookId, 10));

    const ChurchImgUrl = new Array(
      "/images/pexels-brett-sayles-3633711.jpg",
      "/images/pexels-eduardo-braga-1296720.jpg",
      "/images/pexels-johnmark-smith-250609.jpg",
      "/images/pexels-matt-hardy-2602543.jpg",
      "/images/pexels-patricia-mccarty-1769691.jpg",
      "/images/pexels-pixabay-267549.jpg",
      "/images/pexels-pixabay-267559.jpg",
      "/images/pexels-pixabay-372326.jpg",
      "/images/pexels-tabitha-mort-710905.jpg"
  );

    let randomNum = Math.floor(Math.random() * ChurchImgUrl.length);

    return (
    <Box flex={5} p={1}>
    <Card sx={{ position: 'fixed', top: 35, left: 0, right: 0, zIndex: 2 }} elevation={3}>
    <h1 className="w3-center">{book.name}</h1>
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
    <CardMedia
      sx={{ borderRadius: 1 }}
      height={211}
      component='img'
      image={ChurchImgUrl[randomNum]}
      title={book.name}
      alt={book.name} />
    </Box>
    </Card>
    <Box sx={{ zIndex: 1}} p={18} /> 

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

    {book.sermons.map((sermon) => (
      
      <Grid item xs={12} sm={6} md={4} key={sermon.title}>
      <Card sx={{ zIndex: 1 }} >

        <CardHeader
          avatar={<Avatar sx={{ bgcolor: 'teal' }} aria-label='Grace Fellowship of Mountain Home Idaho'>
            GF
          </Avatar>}
          title={sermon.title}
          subheader={sermon.year} />

        <CardContent>

          <h6>Bible Verse: {sermon.comment}</h6>
          <h6>Sermon MP3: </h6>
          <audio controls>
            <source src={`/${sermon.path}${sermon.name}`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <h6>Sermon Notes (download): </h6>
            <List>
               <ListItem dense={true}>
                 <Button href={sermon.path + sermon.pdf} download={sermon.path + sermon.pdf}>
                  <ListItemText primary={sermon.pdf} />
                 </Button>
                </ListItem>

                <ListItem dense={true}>
                <Button href={sermon.path + sermon.jpg} download={sermon.path + sermon.jpg}>
                  <ListItemText primary={sermon.jpg} />
                 </Button>
                </ListItem>
            </List>
        </CardContent>
       
      </Card>
      </Grid>
    ))}

    </Grid>
    <Footer />
     </Box>
    );
  };