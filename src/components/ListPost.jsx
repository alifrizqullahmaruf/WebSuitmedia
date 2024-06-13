import { IoIosArrowDown } from "react-icons/io";
import Card from './Card';
import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const ListPost = () => {
  const [showPerPageDropdown, setShowPerPageDropdown] = useState(false);
  const [sortByDropdown, setSortByDropdown] = useState(false);

  const toggleShowPerPageDropdown = () => {
    setShowPerPageDropdown(!showPerPageDropdown);
  };

  const toggleSortByDropdown = () => {
    setSortByDropdown(!sortByDropdown);
  };

  const posts = [
    {
      title: 'Shoes!',
      description: 'If a dog chews shoes whose shoes does he choose?',
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
    },
    // Tambahkan objek postingan lain sesuai kebutuhan
  ];

  return (
    <div className='w-full pt-32 font-medium bg-white'>
      {/* Filter */}
      <div className="max-w-[1240px] flex justify-between mx-auto">
        {/* Information */}
        <p>Showing 1-10 of 100</p>

        {/* Filter */}
        <div className="flex gap-8">
          {/* Sort by page */}
          <div id="page" className="flex items-center gap-2">
            <p>Show per page:</p>
            <div className="relative">
              <button 
                type="button" 
                className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 items-center" 
                id="menu-button" 
                aria-expanded={showPerPageDropdown} 
                aria-haspopup="true"
                onClick={toggleShowPerPageDropdown}
              >
                10
                <IoIosArrowDown />
              </button>
              {showPerPageDropdown && (
                <div className="absolute w-full py-1 mt-1 bg-white rounded-md shadow-lg">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">10</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">25</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">50</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">100</a>
                </div>
              )}
            </div>
          </div>

          {/* Sort by */}
          <div id="sort" className="flex items-center gap-2">
            <p>Sort by:</p>
            <div className="relative">
              <button 
                type="button" 
                className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 items-center" 
                id="menu-button" 
                aria-expanded={sortByDropdown} 
                aria-haspopup="true"
                onClick={toggleSortByDropdown}
              >
                Newest
                <IoIosArrowDown />
              </button>
              {sortByDropdown && (
                <div className="absolute w-full py-1 mt-1 bg-white rounded-md shadow-lg">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">Newest</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">Oldest</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">Most Popular</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* List Card */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-4 gap-4 mt-8">
        {posts.map((post, index) => (
          <Card
            key={index}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>

      {/* Filterpage */}
      <div className="max-w-[1240px] mx-auto flex gap-2  mt-16">
      <div className="flex items-center gap-2 mx-auto">
      <IoIosArrowBack />
      <p className="px-2 bg-orange-500 rounded">1</p>
      <p className="px-2 rounded">2</p>
      <p className="px-2 rounded">3</p>
      <p className="px-2 rounded">4</p>
      <p className="px-2 rounded">5</p>
      <IoIosArrowForward />
      </div>
      </div>
    </div>
  );
}

export default ListPost;
