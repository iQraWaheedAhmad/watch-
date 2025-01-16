'use client'
import { useState } from 'react';
import Link from 'next/link';

const VideoPage = () => {
  // Sample list of video clips (can be replaced with actual video URLs)
  const videos = [
    { id: 1, title: 'Video 1', src: 'https://www./19912058-uhd_1440_2560_60fps.mp4 ' },
    { id: 2, title: 'Video 2', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 3, title: 'Video 3', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 4, title: 'Video 4', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 5, title: 'Video 5', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 6, title: 'Video 6', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 7, title: 'Video 7', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 8, title: 'Video 8', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next video
  const nextVideo = () => {
    if (currentIndex + 1 < videos.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to go to the previous video
  const prevVideo = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentVideo = videos[currentIndex];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-center mb-6">Video Clips</h1>

      {/* Video Display */}
      <div className="w-full max-w-4xl mb-8">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <video width="100%" height="auto" controls className="rounded-t-lg">
            <source src={currentVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{currentVideo.title}</h3>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={prevVideo}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Previous
        </button>
        <button
          onClick={nextVideo}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoPage;
