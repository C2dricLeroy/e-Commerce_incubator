import React from 'react';

function SearchBar() {
  return (
      <form className="mb-4 w-full md:mb-0 md:w-1/4">
          <label className="hidden" htmlFor="search-form">Search</label>
          <input className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
                 placeholder="Search" type="text"/>
          <button className="hidden">Submit</button>
      </form>
  );
}

export default SearchBar;
