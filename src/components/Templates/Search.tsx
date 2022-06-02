import React from 'react';

interface SearchProps {

}

const Search:React.FC<SearchProps> =({...props}) => {
  return (
    <>
      Search!
      {props.title}
    </>
  );
};

export default Search;