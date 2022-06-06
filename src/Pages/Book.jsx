import { Avatar, CardMedia, Card, Box, CardHeader, CardContent} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { getBook } from "../sermons";
import ChurchImgUrl from "../images/ChurchImgs";

export default function Book() {
    let params = useParams();
    let book = getBook(parseInt(params.bookId, 10));

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