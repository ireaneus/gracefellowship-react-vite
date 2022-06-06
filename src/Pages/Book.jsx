import { Card, Box, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { getBook } from "../sermons";

export default function Book() {
    let params = useParams();
    let book = getBook(parseInt(params.bookId, 10));

    return (
    <Box flex={5} p={2}>
    <Grid container spacing={2}>
    {book.sermons.map((sermon) => (

    <Grid item xs={4} md={3} key={sermon.title}>
    <Card >
      <h4>{sermon.title}</h4>
      <h6>Bible Verse: {sermon.comment}</h6>
      <p className="w3-center">Year: {sermon.year}</p>
      <h6>Sermon MP3:</h6> 
      <ul>
        <li><Link to={`/${sermon.path}${sermon.name}`}>{sermon.name}</Link></li>
      </ul>
    </Card>
    </Grid>

    ))}

    </Grid>
     </Box>
    );
  };