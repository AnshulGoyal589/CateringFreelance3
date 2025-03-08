"use client";
import React, { useState, useRef } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { CiPlay1, CiPause1 } from "react-icons/ci";

// Dynamically import ReactPlayer to prevent SSR issues
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

// Define types for component
interface VideoProgressState {
  played: number;
}

// Define type for ReactPlayer instance
interface ReactPlayerInstance {
  getDuration: () => number;
  seekTo: (time: number) => void;
}

const Video: React.FC = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const playerRef = useRef<ReactPlayerInstance | null>(null);

  const handlePlayClick = () => {
    setPlaying(true);
  };

  const handlePauseClick = () => {
    setPlaying(false);
  };

  const handleVideoEnd = () => {
    setPlaying(false);
  };

  const handleProgress = (state: VideoProgressState) => {
    setProgress(state.played * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (playerRef.current) {
      const target = e.currentTarget;
      const offsetX = (e.nativeEvent as MouseEvent).offsetX;
      const newTime = offsetX / target.clientWidth * playerRef.current.getDuration();
      playerRef.current.seekTo(newTime);
    }
  };

  return (
    <section 
      className="w-full bg-[#ecece2] bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      itemScope
      itemType="https://schema.org/VideoObject"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-up">
            <h1 
              className="text-3xl font-semibold text-gray-800 leading-tight"
              itemProp="name"
            >
              Our goal is to provide a superior customer experience
            </h1>
            <p 
              className="text-gray-600 leading-relaxed text-xl"
              itemProp="description"
            >
              We strive to deliver exceptional service by understanding customer needs, ensuring satisfaction, 
              and continuously improving our offerings to exceed expectations. 
              <br /><br />
              Our expertise has been trusted by esteemed clients, including the Government of India, for whom we have proudly organized catering for high-profile events and official gatherings.
            </p>

            <Link 
              href="/events"
              className="px-6 py-3 bg-[#f1a986] text-white rounded-md hover:bg-white 
              hover:text-[#f1a986] transition-colors duration-300 border border-[#f1a986]"
            >
              GET STARTED
            </Link>
          </div>

          <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
              <ReactPlayer
                ref={playerRef}
                url='https://res.cloudinary.com/daa3y840x/video/upload/v1735048541/Banner_jnxwli.mp4'
                playing={playing}
                muted
                playsinline
                width="100%"
                height="100%"
                style={{
                  transformOrigin: 'center',
                  position: 'absolute', top: 0, left: 0
                }}
                onEnded={handleVideoEnd}
                onProgress={handleProgress}
              />
              {!playing && (
                <div className="absolute inset-0 flex items-center justify-center bg-opacity-30">
                  <button
                    className="p-4 rounded-full transition-all duration-300 bg-[#f1a986]"
                    onClick={handlePlayClick}
                    aria-label="Play Video"
                  >
                    <CiPlay1 className="w-6 h-6 text-white" />
                  </button>
                </div>
              )}
              <div
                className="absolute bottom-0 left-0 right-0 h-2 bg-gray-300 cursor-pointer"
                onClick={handleSeek}
                aria-label="Video Progress Bar"
              >
                <div
                  className="h-full bg-[#f1a986]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              {playing && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity"
                >
                  <button
                    className="p-4 rounded-full transition-all duration-300 bg-[#f1a986]"
                    onClick={handlePauseClick}
                    aria-label="Pause Video"
                  >
                    <CiPause1 className="w-6 h-6 text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Our Vision | Customer Experience Journey',
  description: 'Explore our commitment to exceptional service through our compelling video narrative. Discover how we exceed customer expectations.',
  keywords: [
    'customer experience', 
    'service excellence', 
    'catering expertise', 
    'company vision', 
    'customer satisfaction'
  ],
  openGraph: {
    title: 'Our Vision | Customer Experience Journey',
    description: 'Explore our commitment to exceptional service through our compelling video narrative. Discover how we exceed customer expectations.',
    type: 'video.other'
  }
};

export default Video;