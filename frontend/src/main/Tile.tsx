interface TileProps {
  img: string | undefined;
  name: string;
  num: number;
}

const Tile = ({ img, name, num }: TileProps) => {
  return (
    <div className='flex justify-center cursor-pointer overflow-hidden rounded-lg'>
      <div className='relative h-96 w-96 object-cover rounded-lg flex justify-center'>
        <img src={`../../assets${img?.substring(1)}`} className='h-full w-full object-cover rounded-lg transition duration-300 hover:scale-105' />
        <div className='absolute top-2 right-2 h-8 bg-white text-sm flex items-center justify-center gap-3 rounded-xl px-4'>
          { num === 1 && (
            <>
              <div className='w-2 h-2 bg-yellow-500 rounded-full' />
              <p className='text-black pb-0.5'>{num} room available</p>
            </>
          )}
          { num < 1 && (
            <>
              <div className='w-2 h-2 bg-red-800 rounded-full' />
              <p className='text-black pb-0.5'>No rooms available</p>
            </>
          )}
          { num > 1 && (
            <>
              <div className='w-2 h-2 bg-green-800 rounded-full' />
              <p className='text-black pb-0.5'>{num} rooms available</p>
            </>
          )}
        </div>
        <div className='absolute bottom-2 h-12 w-11/12 bg-[#EF7021] flex items-center p-4 rounded-lg'>
          <p className='text-white'>{name}</p>
        </div>
      </div>
    </div>
  )
}

export default Tile;