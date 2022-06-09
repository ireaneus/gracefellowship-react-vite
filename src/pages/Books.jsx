import React from 'react'
import { NavLink, useSearchParams } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemIcon, Box, ListItemText } from '@mui/material';
import { getBooks } from "../sermons.js";
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';

export default function Books({ mode, setMode }) {
  let books = getBooks();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <>

    <Box flex={1} p={2} sx={{width: 240}} >
    <h4>Sermon Collections</h4>
    <input
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
        let filter = event.target.value;
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
        }}
    />
        {books
        .filter((book) => {
        let filter = searchParams.get("filter");
        if (!filter) return true;
        let name = book.name.toLowerCase();
        return name.startsWith(filter.toLowerCase());
          })
        .map((book) => (
          <List key={book.id}>
          <ListItem disablePadding>
          <ListItemButton>
          <ListItemIcon>
            <MenuBookTwoToneIcon />
          </ListItemIcon>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                color: isActive ? "red" : "",
              };
            }}
            to={`/${book.id}`}
          >
            <ListItemText primary={book.name} />
          </NavLink> {" "}
          </ListItemButton>
          </ListItem>
          </List>
        ))}

        </Box>


      </>
  );
};