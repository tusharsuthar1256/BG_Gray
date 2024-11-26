import React, { useContext, useEffect, useRef, useState } from "react";
import { auth } from "../utils/firebase.js";
import { signOut } from "firebase/auth";
import { UserContext } from "../utils/UserProvider.jsx";
import { BsMoonStars } from "react-icons/bs";
import Nav from "../Components/Nav.jsx";

const Editor = () => {
  const { user } = useContext(UserContext);

  const [originalImg, setOriginalImg] = useState(null);
  const [bgRemovedImg, setBgRemovedImg] = useState(null);
  const [filters, setFilters] = useState({
    contrast: 100,
    blur: 0,
    grayscale: 0,
    opacity: 100,
  });

  const fileInput = useRef(null);
  const canvasRef = useRef(null);

  const API_KEY = import.meta.env.VITE_BACKGROUND_REMOVE_KEY; // Replace with your API key

  // Handle file upload and background removal on file change
  // Handle file upload and background removal on file change
const handleFileChange = async (e) => {
  const file1 = e.target.files[0];
  if (file1) {
    const imageUrl = URL.createObjectURL(file1);

    // Reset filters to default values
    setFilters({
      contrast: 100,
      blur: 0,
      grayscale: 0,
      opacity: 100,
    });

    // Clear the canvas before rendering a new image
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Set the original image
    setOriginalImg(imageUrl);

    // Optional: Remove background using API
    const formData = new FormData();
    formData.append("image_file", file1);
    formData.append("size", "auto");

    try {
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: { "X-Api-Key": API_KEY },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const blob = await response.blob();
      const bgImageUrl = URL.createObjectURL(blob);
      setBgRemovedImg(bgImageUrl);
    } catch (error) {
      console.error("Failed to remove background:", error);
    }
  }
};


  const applyFilters = () => {
    const canvas = canvasRef.current;
    if (!canvas || !originalImg) return;  // Check if original image exists
  
    const ctx = canvas.getContext("2d");
    const baseImage = new Image();
    baseImage.src = originalImg;  // Use original image as the base
  
    baseImage.onload = () => {
      canvas.width = baseImage.width;
      canvas.height = baseImage.height;
  
      // Apply filters only to the original image
      ctx.filter = `grayscale(${filters.grayscale}%) contrast(${filters.contrast}%) blur(${filters.blur}px) opacity(${filters.opacity / 100})`;
      ctx.drawImage(baseImage, 0, 0); // Draw the original image with the filters applied
  
      // Now draw the background-removed image on top of the original image without any filters
      if (bgRemovedImg) {
        const bgRemovedImage = new Image();
        bgRemovedImage.src = bgRemovedImg;
  
        bgRemovedImage.onload = () => {
          // Draw the background-removed image on top of the original image without any filters
          ctx.filter = "none";  // Ensure no filters are applied to the background-removed image
          ctx.drawImage(bgRemovedImage, 0, 0, baseImage.width, baseImage.height);
        };
      }
    };
  };
  

  
  useEffect(() => {
    // Reapply filters and redraw image on canvas when originalImg or filters change
    if (originalImg) {
      applyFilters();
    }
  }, [originalImg, filters]);
  
  useEffect(() => {
    // Clear the canvas and draw the background-removed image, if available
    if (bgRemovedImg && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
  
      // Clear canvas before drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      const baseImage = new Image();
      baseImage.src = originalImg;
  
      baseImage.onload = () => {
        canvas.width = baseImage.width;
        canvas.height = baseImage.height;
  
        // Draw the original image first
        ctx.drawImage(baseImage, 0, 0);
  
        const bgRemovedImage = new Image();
        bgRemovedImage.src = bgRemovedImg;
  
        bgRemovedImage.onload = () => {
          ctx.filter = "none"; // Ensure no filters for the background-removed image
          ctx.drawImage(bgRemovedImage, 0, 0, baseImage.width, baseImage.height);
        };
      };
    }
  }, [bgRemovedImg, originalImg]);
  
  
  
  
  

  // Handle changes in filter values
  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters({ ...filters, [id]: parseInt(value, 10) });
  
    // Automatically apply filters after change
    applyFilters();
  };

  // Export the final image
  const downloadImage = () => {
    const canvas = canvasRef.current;
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "edited_image.png";
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  };


  

  return (
    <>
   
  <div className="h-auto w-full bg-black text-white dark:text-black dark:bg-white">

  <section className="lg:h-[calc(100vh-70px)] w-full flex flex-col lg:flex-row h-auto">
    {/* Canvas Section */}
    <div className="w-full lg:w-[60%] flex items-center justify-center px-4 py-2 lg:py-0">
       <canvas ref={canvasRef} className="border w-full lg:w-[90%] h-[300px] lg:h-[70%] object-contain py-2 rounded-lg dark:border-black" onClick={() => setIsFullScreen(!isFullScreen)}></canvas>
      
    </div>

    {/* Filter Section */}
    <div className="w-full lg:w-[40%] py-4 px-4 flex justify-center items-center flex-col rounded-xl mt-4 lg:mt-0">
      <div className="h-auto w-full lg:w-[90%] p-10 bg-black outline outline-[1px] rounded-lg dark:bg-white">
        <h1 className="text-xl mb-2">Adjust Filters:</h1>
        {["contrast", "blur", "grayscale", "opacity"].map((filter) => (
          <div key={filter} className="mb-3">
            <label className="block text-left">
              {filter.charAt(0).toUpperCase() + filter.slice(1)}:
            </label>
            <input
              type="range"
              id={filter}
              min="0"
              max={filter === "contrast" ? "200" : "100"}
              step={filter === "blur" ? "0.1" : "1"}
              value={filters[filter] }
              onChange={handleFilterChange}
              className="w-full"
            />
            <span>{filters[filter]}</span>
          </div>
        ))}
        <button
          className="text-black hover:text-grey bg-white hover:bg-[#e2e2e0] py-1.5 px-2 rounded-md dark:text-white dark:bg-black"
          onClick={downloadImage}
        >
          Export
        </button>
      </div>
    </div>
  </section>

  {/* Upload Button */}
  <button
    className="absolute right-6 bottom-6 text-black hover:text-grey bg-white hover:bg-[#e2e2e0] py-1.5 px-2 rounded-md dark:text-white dark:bg-black"
    onClick={() => fileInput.current.click()}
  >
    Upload
  </button>
  <input
    type="file"
    hidden
    ref={fileInput}
    onChange={handleFileChange}
  />
</div>
    </>

  );
};

export default Editor;
