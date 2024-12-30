/* eslint-disable @next/next/no-img-element */
import { blogData } from '@/data/blogData';
import { IoIosArrowForward } from 'react-icons/io';
import Header from '../components/Header';
import AnnoucementBarProduct from '../components/productList-Components/AnnoucementBarProduct';
import Footer from '../components/footer';

export interface Blog {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  comments: string; // Add this new property
}

const BlogPage = () => {
  const tagColors = ['text-green-500', 'text-red-500', 'text-blue-500', 'text-gray-500'];

  const getTagColor = (index: number) => tagColors[index % tagColors.length];

  return (
    <>
      <div>
        <AnnoucementBarProduct />
        <Header />
        <section className="text-gray-600 body-font font-Montserrat py-1 -mt-12">
          <div className="container px-5 py-24 mx-auto max-w-screen-lg">
            {/* Heading */}
            <div className="text-center mb-12">
              <p className="text-[#23A6F0] text-md font-bold mt-2">From Our Blog</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#252B42] mt-3 capitalize">
                Featured Posts
              </h2>
              <p className="text-[#9e9b9b] text-md font-light mt-2">
                Stay updated with the latest insights and updates from Bandage Store.
              </p>
            </div>
            {/* Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogData.map((post) => (
                <div
                  key={post.id}
                  className="p-4 bg-white shadow-md rounded-lg transition-all hover:scale-105 hover:shadow-lg"
                >
                  <div className="rounded-lg overflow-hidden h-[300px]">
                    <img
                      alt={`Image for ${post.title}`}
                      className="object-center object-cover h-full w-full"
                      src={post.image || '/images/placeholder.png'} // Fallback image
                    />
                  </div>
                  <ul className="flex justify-start space-x-3 mt-3 text-xs">
                    {post.tags.map((tag:any, index:any) => (
                      <li
                        key={index}
                        className={`px-2 py-1 rounded-full bg-white ${getTagColor(index)}`}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <h2 className="text-xl font-medium text-[#252B42] mt-5 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-[14px] leading-relaxed mt-2 text-[#737373] line-clamp-3">
                    {post.content}
                  </p>
                  <div className="flex mt-8 items-center text-[#737373] text-[12px]">
                    <img
                      src="/images/future/icon akar-icons-calendar.png"
                      alt="Calendar Icon"
                      className="h-4 w-4"
                    />
                    <span className="ml-1">{post.date}</span>
                    <img
                      src="/images/future/icon ant-design-area-chart-outlined.png"
                      alt="Comments Icon"
                      className="ml-auto h-4 w-4"
                    />
                    <span className="ml-1">
                      {`${parseInt(post.comments)} Comments`}
                    </span>
                  </div>
                  <a
                    href={`/blog/${post.id}`}
                    className="text-[#737373] text-sm font-semibold inline-flex items-center mt-8"
                  >
                    Learn More
                    <IoIosArrowForward className="text-blue-500 text-2xl ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
