/* eslint-disable @next/next/no-img-element */
import React from 'react';

function BestSellerProduct() {
    const products = [
        {
            id: 1,
            name: 'Modern Art Canvas',
            collection: 'Abstract Art Collection',
            price: '$32.99',
            oldPrice: '$48.99',
            image: '/images/desk product/1.png',
        },
        {
            id: 2,
            name: 'Sunset Painting',
            collection: 'Nature Collection',
            price: '$40.99',
            oldPrice: '$54.99',
            image: '/images/desk product/2.png',
        },
        {
            id: 3,
            name: 'Geometric Wall Art',
            collection: 'Modern Geometry',
            price: '$25.99',
            oldPrice: '$39.99',
            image: '/images/desk product/3.png',
        },
        {
            id: 4,
            name: 'Abstract Portrait',
            collection: 'Expressionism',
            price: '$45.99',
            oldPrice: '$59.99',
            image: '/images/desk product/4.png',
        },
        {
            id: 5,
            name: 'Floral Canvas',
            collection: 'Botanical Art',
            price: '$28.99',
            oldPrice: '$38.99',
            image: '/images/desk product/5.png',
        },
        {
            id: 6,
            name: 'Cityscape Painting',
            collection: 'Urban Vibes',
            price: '$35.99',
            oldPrice: '$49.99',
            image: '/images/desk product/6.png',
        },
        {
            id: 7,
            name: 'Minimalist Art',
            collection: 'Simple Elegance',
            price: '$22.99',
            oldPrice: '$34.99',
            image: '/images/desk product/1.png',
        },
        {
            id: 8,
            name: 'Vintage Sketch',
            collection: 'Timeless Collection',
            price: '$30.99',
            oldPrice: '$44.99',
            image: '/images/desk product/2.png',
        },
    ];

    return (
        <div className="bg-gray-50 py-12">
            <section className="container mx-auto px-32 text-gray-600 body-font">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#252B42] uppercase">BestSeller Products</h1>
                    <div className="h-0.5 w-full bg-gray-200 mt-2 shadow-sm"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white shadow-md rounded-md overflow-hidden w-[238px] h-[442px] mx-auto"
                        >
                            <a
                                className="block relative h-[280px] w-[239px] mb-4"
                            >
                                <img
                                    alt={product.name}
                                    className="object-cover object-center w-full h-full"
                                    src={product.image}
                                />
                            </a>
                            <div className="p-4 text-start space-y-4">
                                <h2 className="text-[#252B42] title-font text-lg font-Montserrat font-bold">
                                    {product.name}
                                </h2>
                                <h3 className="text-[#737373] text-sm tracking-widest font-semibold title-font">
                                    {product.collection}
                                </h3>
                                <p className="mt-2 text-[#BDBDBD] font-semibold">
                                    {product.price}
                                    <span className="ml-2 text-base font-bold text-[#23856D]">
                                        {product.oldPrice}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Trusted By Section */}
                <div className="mt-16 text-center font-bold">
                    <div className="flex justify-center space-x-16">
                        <img
                            src="/images/icon/fa-brands-1.png"
                            alt="Hooli"
                            className="h-12 w-auto object-contain"
                        />
                        <img
                            src="/images/icon/fa-brands-2.png"
                            alt="Lyft"
                            className="h-12 w-auto object-contain"
                        />
                        <img
                            src="/images/icon/fa-brands-3.png"
                            alt="Leaf"
                            className="h-12 w-auto object-contain"
                        />
                        <img
                            src="/images/icon/fa-brands-4.png"
                            alt="Stripe"
                            className="h-12 w-auto object-contain"
                        />
                        <img
                            src="/images/icon/fa-brands-5.png"
                            alt="AWS"
                            className="h-12 w-auto object-contain"
                        />
                        <img
                            src="/images/icon/fa-brands-6.png"
                            alt="Google"
                            className="h-12 w-auto object-contain"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BestSellerProduct;
