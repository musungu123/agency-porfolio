function SearchBar({ query, onChange }) {
    return (
        <label className="w-full sm:w-72">
        <span className="sr-only">Search projects</span>
        <input
            type="search"
            placeholder="Search projects"
            value={query}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-md border border-line bg-card px-3 py-2.5"
        />
        </label>
    )
}

export default SearchBar;