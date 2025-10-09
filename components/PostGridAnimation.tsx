"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Post {
  id: string;
  imageUrl: string;
  cafeName: string;
  rating?: number;
}

interface PostGridAnimationProps {
  posts: Post[];
  columns?: 1 | 2 | 3 | 4;
  gap?: number;
  enableResponsive?: boolean;
}

export default function PostGridAnimation({
  posts,
  columns = 2,
  gap = 1,
  enableResponsive = false
}: PostGridAnimationProps) {

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  // Individual post animation
  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  // Get responsive classes (mimics mobile app behavior)
  const getGridClass = () => {
    if (enableResponsive) {
      // Responsive: 1 col on mobile, 2 on tablet, 3 on desktop, 4 on large screens
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    }

    // Fixed columns
    switch (columns) {
      case 1: return "grid-cols-1";
      case 2: return "grid-cols-2";
      case 3: return "grid-cols-3";
      case 4: return "grid-cols-4";
      default: return "grid-cols-2";
    }
  };

  // Get border radius based on columns (mimics mobile app)
  const getBorderRadius = () => {
    switch (columns) {
      case 1: return "rounded-[20px]";
      case 2: return "rounded-[16px]";
      case 3: return "rounded-[12px]";
      case 4: return "rounded-[8px]";
      default: return "rounded-[16px]";
    }
  };

  return (
    <motion.div
      className={`grid ${getGridClass()} gap-[${gap}px] w-full`}
      style={{ gap: `${gap}px` }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {posts.map((post) => (
        <motion.div
          key={post.id}
          className="relative aspect-square overflow-hidden group cursor-pointer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Image */}
          <div className={`relative w-full h-full ${getBorderRadius()} overflow-hidden`}>
            <Image
              src={post.imageUrl}
              alt={post.cafeName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>

          {/* Overlay with cafe name (blur effect) */}
          <motion.div
            className={`absolute bottom-0 left-0 right-0 ${getBorderRadius()}`}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div
              className="backdrop-blur-md bg-black/50 px-3 py-2"
              style={{
                borderBottomLeftRadius: getBorderRadius().includes("20") ? "20px" :
                                       getBorderRadius().includes("16") ? "16px" :
                                       getBorderRadius().includes("12") ? "12px" : "8px",
                borderBottomRightRadius: getBorderRadius().includes("20") ? "20px" :
                                        getBorderRadius().includes("16") ? "16px" :
                                        getBorderRadius().includes("12") ? "12px" : "8px",
              }}
            >
              <p className="text-white text-sm font-medium truncate">
                {post.cafeName}
              </p>
              {post.rating && (
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-white text-xs">{post.rating}</span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
