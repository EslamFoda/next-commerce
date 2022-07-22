import Header from "../common/header";
import Grid from "../ui/Grid";
import BlogCard from "../common/blogCard";
import { BlogsData } from "../../constant";
const Blogs = () => {
  return (
    <>
      <Header
        title="LATEST FROM BLOG"
        subTitle="THE FRESHEST AND MOST EXCITING NEWS"
      />
      <Grid layout="C">
        {BlogsData.map((blog, i) => {
          return <BlogCard key={i} i={i} blog={blog} />;
        })}
      </Grid>
    </>
  );
};

export default Blogs;
