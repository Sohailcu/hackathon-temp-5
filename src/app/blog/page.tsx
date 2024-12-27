/* eslint-disable @next/next/no-img-element */
import { IoIosArrowForward } from 'react-icons/io';

interface Blog {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

export const blogData: Blog[] = [
  {
    id: '1',
    title: 'Top 10 E-commerce Trends for 2024',
    content: 'Discover the latest trends shaping the world of e-commerce in 2024, from AI-driven personalization to sustainable shopping practices.',
    date: '10 January 2024',
    author: 'Emma Johnson',
    image: '/images/blogpic/1.jpeg',
    tags: ['E-commerce', 'Trends', 'Future'],
  },
  {
    id: '2',
    title: 'How to Boost Online Sales with Social Media',
    content: 'Learn how to leverage platforms like Instagram, TikTok, and Facebook to drive traffic and increase sales for your online store.',
    date: '18 February 2024',
    author: 'James Carter',
    image: '/images/blogpic/2.jpeg',
    tags: ['Social Media', 'Sales', 'Strategy'],
  },
  {
    id: '3',
    title: 'The Rise of Mobile Shopping: What You Need to Know',
    content: 'Mobile commerce is growing rapidly. Find out why optimizing your website for mobile users is crucial for success.',
    date: '5 March 2024',
    author: 'Sophia Lee',
    image: '/images/blogpic/3.jpeg',
    tags: ['Mobile', 'Shopping', 'Optimization'],
  },
  {
    id: '4',
    title: '10 Must-Have Features for E-commerce Websites',
    content: 'Ensure your e-commerce site stands out with these essential features, from user-friendly navigation to secure payment options.',
    date: '22 March 2024',
    author: 'Michael Brown',
    image: '/images/blogpic/4.png',
    tags: ['WebDesign', 'Features', 'UserExperience'],
  },
  {
    id: '5',
    title: 'How to Write Product Descriptions That Sell',
    content: 'Craft compelling product descriptions that highlight benefits, solve customer pain points, and drive conversions.',
    date: '12 April 2024',
    author: 'Olivia Davis',
    image: '/images/blogpic/5.jpeg',
    tags: ['Copywriting', 'Sales', 'E-commerce'],
  },
  {
    id: '6',
    title: 'Why Free Shipping Matters for Online Stores',
    content: 'Explore how free shipping can improve customer satisfaction, reduce cart abandonment, and increase sales.',
    date: '30 April 2024',
    author: 'Ethan Wilson',
    image: '/images/blogpic/6.jpeg',
    tags: ['Shipping', 'Customer Satisfaction', 'Sales'],
  },
  {
    id: '7',
    title: 'The Importance of Reviews and Testimonials',
    content: 'Learn how customer reviews and testimonials build trust and influence buying decisions in online shopping.',
    date: '10 May 2024',
    author: 'Isabella Martinez',
    image: '/images/blogpic/7.webp',
    tags: ['Reviews', 'Trust', 'Conversions'],
  },
  {
    id: '8',
    title: 'Sustainability in E-commerce: Going Green Online',
    content: 'Find out how eco-friendly practices in e-commerce can attract conscious consumers and improve brand loyalty.',
    date: '20 May 2024',
    author: 'William Garcia',
    image: '/images/blogpic/8.jpeg',
    tags: ['Sustainability', 'E-friendly', 'E-commerce'],
  },
  {
    id: '9',
    title: 'Top Payment Gateways for E-commerce Businesses',
    content: 'Compare the best payment gateway options for your e-commerce store to ensure secure and seamless transactions.',
    date: '1 June 2024',
    author: 'Ava Rodriguez',
    image: '/images/blogpic/9.png',
    tags: ['Payment', 'Security', 'E-commerce'],
  },
];

const BlogPage = () => {
  const tagColors = {
    tag0: 'text-green-500',
    tag1: 'text-red-500',
    tag2: 'text-blue-500',
    default: 'text-gray-500', // Add a default key
  };

  const getTagColor = (tag: string) =>
    tagColors[tag as keyof typeof tagColors] || tagColors.default;

  return (
    <div>
      <section className="text-gray-600 body-font font-Montserrat">
        <div className="container px-5 py-24 mx-auto max-w-screen-lg">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm font-semibold mt-2">Practice Advice</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#252B42] mt-3 capitalize">
              Featured Blogs Posts
            </h2>
            <p className="text-[#737373] text-sm font-light mt-2">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.map((post) => (
              <div
                key={post.id}
                className="p-4 bg-white shadow-md rounded-lg transition-all hover:scale-105"
              >
                <div className="rounded-lg overflow-hidden h-[300px]">
                  <img
                    alt={`Image for ${post.title}`}
                    className="object-center object-cover h-full w-full"
                    src={post.image}
                  />
                </div>
                <ul className="flex justify-start space-x-3 mt-3 text-xs">
                  {post.tags.map((tag, index) => (
                    <li
                      key={index}
                      className={`px-2 py-1 rounded-full bg-white ${getTagColor(tag)}`}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <h2 className="text-xl font-medium text-[#252B42] mt-5">{post.title}</h2>
                <p className="text-[14px] leading-relaxed mt-2 text-[#737373]">
                  {post.content}
                </p>
                <div className="flex mt-4 items-center text-[#737373] text-[12px]">
                  <img src="/images/future/icon akar-icons-calendar.png" alt="calendar icon" className="h-4 w-4" />
                  <span className="ml-1">{post.date}</span>
                </div>
                <a href={`/blog/${post.id}`} className="text-[#737373] text-sm font-semibold inline-flex items-center mt-6">
                  Learn More
                  <IoIosArrowForward className="text-blue-500 text-2xl ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
