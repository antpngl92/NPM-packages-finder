import React, { FC, useState } from "react";

import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const LibraryList: FC = () => {
  const [term, setTerm] = useState("");
  const { searchLibraries } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.libraries);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchLibraries(term);
  };

  return (
    <div>
      <h1>Search for Library</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading ...</h3>}
      {!error &&
        !loading &&
        data.map((lib) => {
          return <p>{lib}</p>;
        })}
    </div>
  );
};

export default LibraryList;
