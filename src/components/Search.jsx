import React from 'react';

function Search({searchInput,setSearchInput}) {
 

  return (
    <div className="flex justify-center mt-5">
      <input className=' border-2 border-rose-500 rounded-md'
      type="text" placeholder="Search by name"
      value={searchInput} 
      onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className='bg-amber-700 border  rounded-md hover:border-slate-400'
      >Search</button>
    </div>
  );
}

export default Search;
