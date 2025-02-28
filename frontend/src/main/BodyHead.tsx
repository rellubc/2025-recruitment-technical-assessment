import Search from "./Search";

const BodyHead = () => {
  return (
    <>
      <div className='flex justify-between gap-2'>
        <div className='body-head-option-container cursor-pointer'>
          <span className='material-symbols-outlined'>filter_alt</span>
          <p className='font-bold text-md'>Filters</p>
        </div>
        <div className='body-head-search-container'>
          <span className='material-symbols-outlined'>search</span>
          <Search />
        </div>
        <div className='body-head-option-container cursor-pointer'>
          <span className='material-symbols-outlined'>filter_list</span>
          <p className='font-bold text-md'>Sort</p>
        </div>
      </div>
    </>
  );
}

export default BodyHead;