import { ChangeEvent, SyntheticEvent, useRef } from "react";

interface Props {
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: SyntheticEvent) => void;
}

const Search: React.FC<Props> = ({ search, handleSearchChange, onSearchSubmit }: Props): JSX.Element => {
  const resultsRef = useRef<HTMLDivElement>(null); // Create a ref for the results section

  const handleSubmit = (e: SyntheticEvent) => {
    onSearchSubmit(e); // Trigger your search logic
    resultsRef.current?.scrollIntoView({ behavior: "smooth" }); // Auto-scroll to the results

      // Scroll into view with offset
  if (resultsRef.current) {
    const offset = -650; // Adjust this value for more scrolling
    const scrollPosition =
      resultsRef.current.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }
};


  return (
    <>
      <section className="max-w-4xl mx-auto bg-fuchsia-300 dark:bg-gray-900 rounded-lg shadow-md mt-10 mb-10">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <form
            className="form relative flex w-full p-10 rounded-lg md:flex-row md:space-y-0 md:space-x-3"
            style={{
              background: "radial-gradient(circle, #97c0db 10%, transparent 10%)",
              backgroundSize: "20px 20px",
            }}
            onSubmit={handleSubmit} // Use the updated handleSubmit function
          >
            <input
              className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
              id="search-input"
              placeholder="Search companies"
              value={search}
              onChange={handleSearchChange}
            />
            <button
              className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Add the results section */}
      <section ref={resultsRef} >
        
        {/* Render search results here */}
      </section>
    </>
  );
};

export default Search;
