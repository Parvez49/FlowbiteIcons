import React from "react";
import LeftBar from "./LeftBar";
import iconList from "../../data/data";
import { useState } from "react";

const Content = ({ sizeRange, strokeRange, searchQuery, contentView }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterProperty, setFilterProperty] = useState([])
  const itemPerPage = 72;

  const handleProperty = (prp) => {
    setFilterProperty(prevState => {
      const index = prevState.indexOf(prp);
      if (index === -1) {
        return [...prevState, prp];
      } else {
        return prevState.filter(item => item !== prp);
      }
    });
    console.log(filterProperty)
  };

  const handleRemoveProperty = () =>{
    setFilterProperty([])
  }

  const searchIcons = searchQuery
    ? iconList.filter((icon) =>
        icon.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : iconList;

  const styleFilters = filterProperty.filter(filter => ["Solid", "Outline"].includes(filter));
  const categoryFilters = filterProperty.filter(filter => ["General", "E-commerce", "Media", "Files"].includes(filter));

  const filteredIcons = searchIcons.filter(icon => {
    const matchesStyle = styleFilters.length === 0 || styleFilters.includes(icon.style.charAt(0).toUpperCase() + icon.style.slice(1));
    const matchesCategory = categoryFilters.length === 0 || categoryFilters.includes(icon.category);

    return matchesStyle && matchesCategory;
  });


  const finalIconList = filteredIcons.length == 0 ? iconList: filteredIcons;
  const totalPage = Math.ceil(finalIconList.length / itemPerPage);
  const currentItems = finalIconList.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  const handleCurrentPage = (current) => {
    setCurrentPage(current);
  };




  const [buttonText, setButtonText] = useState('copy');

  const handleCopy = async (id) => {
    try {
      // Get the SVG element
      const svgElement = document.getElementById(id);

      if (!svgElement) return;

      // Serialize the SVG element to a string
      const svgData = new XMLSerializer().serializeToString(svgElement);

      // Create a temporary textarea to copy the SVG content
      const textarea = document.createElement('textarea');
      textarea.value = svgData;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      <svg id="iconToCopy" class="text-blue-600 mr-1" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0446 0.333336H7.99996V3.66667C7.99996 4.402 7.40196 5 6.66663 5H3.33329V9.66667C3.33329 10.402 3.91129 11 4.62196 11H10.0446C10.7553 11 11.3333 10.402 11.3333 9.66667V1.66667C11.3333 0.931336 10.7553 0.333336 10.0446 0.333336Z" fill="currentColor"/><path d="M6.66663 3.66667V0.420003C6.34529 0.512003 6.04729 0.676003 5.80463 0.919336L3.91929 2.80467C3.67596 3.04734 3.51196 3.34534 3.41996 3.66667H6.66663Z" fill="currentColor"/><path d="M8.66663 11.6667H7.33329V12.3333H1.99996L1.99929 4.33334H2.66663V3H1.99996C1.26463 3 0.666626 3.598 0.666626 4.33334V12.3333C0.666626 13.0687 1.24463 13.6667 1.95529 13.6667H7.35529C7.71996 13.6667 8.06063 13.522 8.31396 13.26C8.56729 12.998 8.66663 12.7013 8.66663 12.2887C8.66663 12.2727 8.66663 11.6667 8.66663 11.6667Z" fill="currentColor"/></svg>

      // Update the button text to "copied" when
      setButtonText('copied');

      // Optional: Change back to initial text after a few seconds
      setTimeout(() => {
        setButtonText('copy');
      }, 1000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  




  return (
    <div className="grid grid-cols-5 gap-6 mt-4">
      <LeftBar 
        handleProperty = {handleProperty}
      />
      <div className="col-span-5 lg:col-span-4">
        <div className="mb-4 flex items-center min-h-[28px]">
          <span className="text-sm font-medium text-gray-900 dark:text-white mr-3 shrink-0">
            Showing {(currentPage - 1) * itemPerPage + 1} to{" "}
            {totalPage === currentPage
              ? iconList.length
              : currentPage * itemPerPage}{" "}
            icons of {finalIconList.length} in total.
          </span>
          <div class="flex items-center flex-wrap space-x-3">
          
          {
            filterProperty.map((val,ind) => (
              <span key={ind} class="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-900 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-white">
                {val}
                <button
                  type="button"
                  class="inline-flex items-center p-1 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  aria-label="Remove filter"
                >
                  <svg
                    aria-hidden="true"
                    class="w-2.5 h-2.5 text-gray-500"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={()=>handleProperty(val)}
                  >
                    <path
                      d="M5.83196 5.00717L8.91955 1.91958C8.97526 1.86577 9.0197 1.8014 9.05027 1.73023C9.08084 1.65907 9.09693 1.58252 9.09761 1.50507C9.09828 1.42761 9.08352 1.3508 9.05419 1.27911C9.02486 1.20742 8.98155 1.14229 8.92677 1.08752C8.872 1.03275 8.80687 0.989433 8.73518 0.960103C8.66349 0.930772 8.58668 0.916013 8.50923 0.916686C8.43177 0.917359 8.35523 0.933451 8.28406 0.964023C8.21289 0.994595 8.14852 1.03903 8.09471 1.09475L5.00713 4.18233L1.91954 1.09475C1.80953 0.98849 1.66217 0.929693 1.50923 0.931022C1.35628 0.932351 1.20997 0.9937 1.10182 1.10185C0.993662 1.21001 0.932313 1.35632 0.930984 1.50926C0.929655 1.66221 0.988452 1.80956 1.09471 1.91958L4.18229 5.00717L1.09471 8.09475C1.039 8.14856 0.994557 8.21293 0.963985 8.2841C0.933413 8.35527 0.917321 8.43181 0.916648 8.50927C0.915975 8.58672 0.930734 8.66353 0.960065 8.73522C0.989395 8.80691 1.03271 8.87204 1.08748 8.92681C1.14225 8.98158 1.20738 9.0249 1.27907 9.05423C1.35076 9.08356 1.42757 9.09832 1.50503 9.09765C1.58248 9.09697 1.65903 9.08088 1.7302 9.05031C1.80137 9.01974 1.86573 8.9753 1.91954 8.91958L5.00713 5.832L8.09471 8.91958C8.20473 9.02584 8.35208 9.08464 8.50503 9.08331C8.65798 9.08198 8.80428 9.02063 8.91244 8.91248C9.02059 8.80432 9.08194 8.65801 9.08327 8.50507C9.0846 8.35212 9.0258 8.20477 8.91955 8.09475L5.83196 5.00717Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span class="sr-only">Remove filter</span>
                </button>
              </span>
            ))
          }
            
            
          </div>
          { filterProperty.length>0 && (
              <button
              type="button"
              class="px-2 py-1 bg-white shrink-0 rounded-md text-gray-500 border border-gray-400 text-sm font-medium hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ml-3"
              onClick={handleRemoveProperty}
            >
              Remove filters
            </button>
          )}
          
        </div>
        <div className={`grid grid-cols-2 sm:grid-cols-4 ${contentView === 'grid' ? 'lg:grid-cols-6 xl:grid-cols-8 gap-3' : 'grid-cols-5 xl:grid-cols-6 gap-3'}`}>
          {currentItems.map((val, ind) => {
            const svgId = `iconToCopy-${ind}`; 
            return (
            <button
              key={ind}
              className={`relative border border-gray-100 dark:border-gray-800 rounded-lg flex items-center group hover:cursor-pointer ${contentView === 'grid' ? 'h-[95px] justify-center' : 'h-[50px] justify-start'}`}
            >
              <div onClick={() => handleCopy(svgId)} className="absolute top-0 left-0 h-full w-full bg-[#1F2A37] rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity">
                <div className="flex items-center">
                  <svg
                    id={svgId} 
                    class="text-blue-600 mr-1"
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0446 0.333336H7.99996V3.66667C7.99996 4.402 7.40196 5 6.66663 5H3.33329V9.66667C3.33329 10.402 3.91129 11 4.62196 11H10.0446C10.7553 11 11.3333 10.402 11.3333 9.66667V1.66667C11.3333 0.931336 10.7553 0.333336 10.0446 0.333336Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6.66663 3.66667V0.420003C6.34529 0.512003 6.04729 0.676003 5.80463 0.919336L3.91929 2.80467C3.67596 3.04734 3.51196 3.34534 3.41996 3.66667H6.66663Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8.66663 11.6667H7.33329V12.3333H1.99996L1.99929 4.33334H2.66663V3H1.99996C1.26463 3 0.666626 3.598 0.666626 4.33334V12.3333C0.666626 13.0687 1.24463 13.6667 1.95529 13.6667H7.35529C7.71996 13.6667 8.06063 13.522 8.31396 13.26C8.56729 12.998 8.66663 12.7013 8.66663 12.2887C8.66663 12.2727 8.66663 11.6667 8.66663 11.6667Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span class="text-sm font-medium text-blue-600">{buttonText}</span>
                </div>
              </div>
              <div className={`${contentView === 'grid' ? 'flex flex-col justify-center items-center': 'flex justify-between items-center'}`}>
                <div className="mb-2 h-[48px] w-[48px] flex items-center justify-center">
                  <div>
                    {ind % 2 ? (
                      <svg
                        style={{
                          width: `${sizeRange}px`,
                          height: `${sizeRange}px`,
                        }}
                        className={`text-gray-800 dark:text-white`}
                        // className={`w-[25px] h-[25px] text-gray-800 dark:text-white`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        style={{
                          width: `${sizeRange}px`,
                          height: `${sizeRange}px`,
                        }}
                        class="w-[35px] h-[35px] text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width={strokeRange}
                          d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                        ></path>
                      </svg>
                    )}
                  </div>
                </div>
                <span class="text-gray-500 dark:text-gray-400 text-sm font-medium truncate whitespace-nowrap max-w-[90px]">
                  {val.name}
                </span>
              </div>
            </button>
            )
        })}
        </div>
        <div className="flex justify-center mt-4">
          {[...Array(totalPage)].map((_, index) => (
            <button
              key={index}
              className={`px-3 py-1 mx-1 border ${
                index + 1 === currentPage
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
              onClick={() => handleCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;

{
  /* <div class="mb-2 h-[48px] w-[48px] flex items-center justify-center">
  <div>
    <svg
      class="w-[35px] h-[35px] text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      ></path>
    </svg>
  </div>
</div>;

<div class="mb-2 h-[48px] w-[48px] flex items-center justify-center">
  <div>
    <svg
      class="w-[35px] h-[35px] text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.2"
        d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      ></path>
    </svg>
  </div>
</div>; */
}
