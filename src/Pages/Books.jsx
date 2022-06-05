import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getBooks } from "../sermons.js";

export default function Books() {
  let books = getBooks();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          padding: "1rem",
        }}
      >
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
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/sermons/books/${book.id}`}
            key={book.id}
          >
            {book.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}