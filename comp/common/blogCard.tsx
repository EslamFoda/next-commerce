import React from "react";
import Image from "next/image";
import Header from "./header";
import { CommentIcon } from "../icons";

interface Blog {
  title: string;
  subTitle: string;
  comments: number;
  image: string;
  desc: string;
  createdBy: string;
}

interface Props {
  blog: Blog;
  i: number;
}

const BlogCard: React.FC<Props> = ({ blog, i }) => {
  return (
    <div key={i} className="blogCard group">
      <div className="relative h-80 ">
        <Image
          alt={blog.title}
          className="group-hover:cursor-pointer"
          src={blog.image}
          layout="fill"
          objectFit="cover"
        />
        <div
          className="bg-white text-center rounded-md p-4 group-hover:p-7  group-hover:w-[95%]
       absolute top-full left-1/2 transform  -translate-x-1/2 -translate-y-1/2 w-[90%] transition-all duration-300"
        >
          <Header Variant="blog" title={blog.title} subTitle={blog.subTitle} />
          <p className="text-gray-500 text-sm my-5">{blog.desc}</p>
          <div className="flex items-center gap-4 justify-center text-xs">
            <span className="text-gray-500">
              by <span className="text-black">{blog.createdBy}</span> on June
              20, 2018
            </span>
            <div className="flex items-center gap-2">
              <CommentIcon />
              {blog.comments}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
