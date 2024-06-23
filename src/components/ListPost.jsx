import {
  IoIosArrowDown,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";

const ListPost = () => {
  const [showPerPageDropdown, setShowPerPageDropdown] = useState(false);
  const [sortByDropdown, setSortByDropdown] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(10); // Default items per page
  const [currentPage, setCurrentPage] = useState(1); // Default current page
  const [sortedBy, setSortedBy] = useState("published_at"); // Default sort by published_at
  const [totalPages, setTotalPages] = useState(1); // Total pages from API response
  const [posts, setPosts] = useState([]); // Posts fetched from API

  // Function to fetch posts from API
  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://suitmedia-backend.suitdev.com/api/ideas",
        {
          params: {
            "page[number]": currentPage, // Menggunakan currentPage untuk nomor halaman
            "page[size]": postsPerPage, // Menggunakan postsPerPage untuk jumlah item per halaman
            append: ["small_image", "medium_image"], // Melampirkan 'small_image' dan 'medium_image'
            sort: sortedBy === "newest" ? "-published_at" : "published_at", // Menggunakan sortBy untuk pengurutan
          },
        }
      );
      setPosts(response.data.data); // Mengatur data post dari respons API
      setTotalPages(response.data.meta.total_pages); // Mengatur total halaman dari respons API
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Fetch posts when component mounts or when dependencies change
  useEffect(() => {
    fetchPosts();
  }, [currentPage, postsPerPage, sortedBy]);

  // Handle show per page dropdown toggle
  const toggleShowPerPageDropdown = () => {
    setShowPerPageDropdown(!showPerPageDropdown);
  };

  // Handle sort by dropdown toggle
  const toggleSortByDropdown = () => {
    setSortByDropdown(!sortByDropdown);
  };

  // Handle changing items per page
  const changePerPage = (perPage) => {
    setPostsPerPage(perPage);
    setCurrentPage(1); // Reset current page to 1 when changing items per page
    setShowPerPageDropdown(false);
  };

  // Handle changing sort option
  const changeSortBy = (sortBy) => {
    setSortedBy(sortBy);
    setSortByDropdown(false);
  };

  useEffect(() => {
    // Reset page to 1 when sort option changes
    setCurrentPage(1);
  }, [sortedBy]);

  // Pagination buttons handler
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full pt-32 font-medium bg-white">
      {/* Filter */}
      <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row justify-between">
        {/* Information */}
        <p className="mb-4 sm:mb-0">
          Showing {(currentPage - 1) * postsPerPage + 1}-
          {Math.min(currentPage * postsPerPage, posts.length)} of {posts.length}
        </p>

        {/* Filter */}
        <div className="flex flex-wrap gap-8">
          {/* Show per page */}
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
                {postsPerPage}
                <IoIosArrowDown />
              </button>
              {showPerPageDropdown && (
                <div className="absolute w-full py-1 mt-1 bg-white rounded-md shadow-lg">
                  {[10, 20, 50].map((perPage) => (
                    <button
                      key={perPage}
                      onClick={() => changePerPage(perPage)}
                      className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                    >
                      {perPage}
                    </button>
                  ))}
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
                {sortedBy === "published_at" ? "Newest" : "Oldest"}
                <IoIosArrowDown />
              </button>
              {sortByDropdown && (
                <div className="absolute w-full py-1 mt-1 bg-white rounded-md shadow-lg">
                  <button
                    onClick={() => changeSortBy("published_at")}
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                  >
                    Newest
                  </button>
                  <button
                    onClick={() => changeSortBy("oldest")}
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                  >
                    Oldest
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* List Card */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {posts.map((post, index) => (
          <Card
            key={index}
            title={post.title}
            description={post.description}
            imageUrl={post.small_image.url} // Asumsikan small_image adalah objek dengan properti url
            publishedAt={post.published_at} // Asumsikan published_at adalah tanggal dari post
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="max-w-[1240px] mx-auto flex justify-between items-center gap-2 mt-16">
        {/* Show pagination information */}
        <div className="flex items-center">
          <p className="text-sm text-xl text-gray-600">
            Showing {Math.max((currentPage - 1) * postsPerPage + 1, 1)}-
            {Math.min(currentPage * postsPerPage, posts.length)} of{" "}
            {posts.length} results
          </p>
        </div>

        {/* Pagination controls */}
        <div className="flex items-center gap-4">
          {/* Previous page button */}
          <IoIosArrowBack
            size={30}
            onClick={() => handlePageClick(currentPage - 1)}
            className={`cursor-pointer ${
              currentPage === 1 ? "text-gray-400 hidden" : ""
            }`}
            disabled={currentPage === 1}
          />

          {/* Next page button */}
          <IoIosArrowForward
            size={30}
            onClick={() => handlePageClick(currentPage + 1)}
            className={`cursor-pointer ${
              currentPage === totalPages ? "text-gray-400" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ListPost;
