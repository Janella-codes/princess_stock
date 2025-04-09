import { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: SyntheticEvent) => void;
}

const Search: React.FC<Props> = ({ search, handleSearchChange, onSearchSubmit }: Props): JSX.Element => {
  return (
    <section className="max-w-4xl mx-auto bg-customCyan dark:bg-gray-900 rounded-lg shadow-md mt-10 mb-10">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex w-full p-10 rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          style={{
            background: "radial-gradient(circle, #97c0db 10%, transparent 10%)",
            backgroundSize: "20px 20px",
          }}
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          />
        </form>
      </div>
    </section>
  );
};

export default Search;
