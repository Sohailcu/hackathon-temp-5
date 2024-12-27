/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const blogData = [
    {
        id: 1,
        image: '/images/future/FUT-1.png',
        tags: ['Google', 'Trending', 'New'],
        title: "Loudest à la Madison #1 (L'intégral)",
        description:
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: '22 April 2021',
        comments: '10 Comments',
    },
    {
        id: 2,
        image: '/images/future/FUT-2.png',
        tags: ['Google', 'Trending', 'New'],
        title: "Loudest à la Madison #2 (L'intégral)",
        description:
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: '18 April 2022',
        comments: '16 Comments',
    },
    {
        id: 3,
        image: '/images/future/FUT-3.png',
        tags: ['Google', 'Trending', 'New'],
        title: "Loudest à la Madison #3 (L'intégral)",
        description:
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: '8 May 2021',
        comments: '25 Comments',
    },
];

function Futuredpost() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto max-w-screen-lg">
                    {/* Heading */}
                    <div className="text-center mb-12 font-Montserrat">
                        <p className="text-blue-600 text-sm font-semibold mt-2 font-Montserrat">
                            Practice Advice
                        </p>
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#252B42] font-Montserrat mt-3 capitalize">
                            Featured Posts
                        </h2>
                        <p className="text-[#737373] text-sm font-light mt-2 font-Montserrat">
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
                                        alt={post.title}
                                        className="object-cover object-center h-full w-full"
                                        src={post.image}
                                    />
                                </div>
                                <ul className="flex justify-start space-x-3 mt-3 font-Montserrat text-sm">
                                    {post.tags.map((tag, index) => (
                                        <li
                                            key={index}
                                            className={`px-2 py-1 rounded-full bg-white ${tag === 'Google'
                                                    ? 'text-blue-500'
                                                    : tag === 'Trending'
                                                        ? 'text-green-500'
                                                        : 'text-red-500'
                                                }`}
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                                <h2 className="text-xl font-medium text-[#252B42] font-Montserrat mt-5">
                                    {post.title}
                                </h2>
                                <p className="text-[14px] leading-relaxed mt-2 text-[#737373] font-Montserrat">
                                    {post.description}
                                </p>
                                <div className="flex mt-4 items-center text-[#737373] text-[12px] font-Montserrat">
                                    <img
                                        src="/images/future/icon akar-icons-calendar.png"
                                        alt="time"
                                        className="h-4 w-4"
                                    />
                                    <span className="ml-1">{post.date}</span>
                                    <img
                                        src="/images/future/icon ant-design-area-chart-outlined.png"
                                        alt="chart"
                                        className="ml-auto h-4 w-4"
                                    />
                                    <span className="ml-1">{post.comments}</span>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-[#737373] text-sm font-semibold font-Montserrat inline-flex items-center mt-6"
                                    >
                                        Learn More
                                        <IoIosArrowForward className="text-blue-500 text-2xl ml-2" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Futuredpost;
