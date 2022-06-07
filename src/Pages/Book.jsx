import { Avatar, CardMedia, Card, Box, CardHeader, CardContent} from "@mui/material";
import { useParams } from "react-router-dom";
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
    {book.sermons.map((sermon) => (
      <Card key={sermon.title}>
      <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: 'teal' }} aria-label='Grace Fellowship of Mountain Home Idaho'>
            GF
            </Avatar>
        }
        title={sermon.title}
        subheader={sermon.year}
        />


        <CardMedia
          sx={{borderRadius: 1 }}
          height={211}
          component='img'
          image={ChurchImgUrl[randomNum]}
          title={sermon.title}
          alt={sermon.name}
        />

      <CardContent> 

      <h6>Bible Verse: {sermon.comment}</h6>
      <h6>Sermon MP3: </h6> 
        <audio controls>
        <source src={`/${sermon.path}${sermon.name}`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

      </CardContent>

    </Card>


    ))}

     </Box>
    );
  };