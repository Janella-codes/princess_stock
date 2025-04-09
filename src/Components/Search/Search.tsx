import { ChangeEvent, SyntheticEvent, useState } from "react";

interface Props {
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearchSubmit: (e: SyntheticEvent) => void;
}

const Search : React.FC<Props> = ({search, handleSearchChange, onSearchSubmit}: Props): JSX.Element => {
    
    return (
        <section className="bg-#97c0db">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <form
            className="form relative flex  w-full p-10  bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
            onSubmit={onSearchSubmit}
          >
            <input
              className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
              id="search-input"
              placeholder="Search companies"
              value={search}
              onChange={handleSearchChange}
            ></input>
          </form>
        </div>
      </section>
    );
}

export default Search;