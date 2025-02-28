import { ChangeEvent, ReactElement, useState } from "react";

const Search = (): ReactElement => {
  const [search, setSearch] = useState<string>('');
  return (
    <input
      type='search'
      className='text-md w-full !outline-none'
      placeholder={'Search for a building...'}
      value={search}
      onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.currentTarget.value)}
    />
  );
};

export default Search;