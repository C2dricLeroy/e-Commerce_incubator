import React from 'react';

function SearchBar() {
  return (
      <form >
          <label htmlFor="search-form" hidden={true}>Search</label>
          <input placeholder="Search" type="text"/>
          <button >Submit</button>
      </form>
  );
}

export default SearchBar;
