export default function SearchBar({ onSearch }) {
  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(event.target.elements.query.value);
    event.target.reset();
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <button type="submit">Search</button>
    </form>
  );
}
