import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  profession: string;
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  image: string;
}

const TeamSection: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
          name: "Sophia Williams",
          profession: "Sales Manager",
          social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
          },
          image: "/images/team/user-1.jpg",
        },
        {
          name: "Olivia Johnson",
          profession: "Marketing Specialist",
          social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
          },
          image: "/images/team/user-2.jpg",
        },
        {
          name: "Isabella Brown",
          profession: "E-commerce Coordinator",
          social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
          },
          image: "/images/team/user-3.jpg",
        },
        {
          name: "Ethan Smith",
          profession: "Sales Executive", // Male for 4th member as per request
          social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
          },
          image: "/images/team/user-4.png",
        },
        {
          name: "Emma Martinez",
          profession: "Digital Marketing Strategist",
          social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
          },
          image: "/images/team/user-5.jpg", 
        },
        {
          name: "Ava Davis",
          profession: "E-commerce Specialist",
          social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
          },
          image: "/images/team/user-6.png",
        },
        {
          name: "Mia Garcia",
          profession: "SEO & SEM Expert",
          social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
          },
          image: "/images/team/user-7.png",
        },
        {
          name: "Charlotte Lee",
          profession: "Product Marketing Manager",
          social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
          },
          image: "/images/team/user-8.jpg",
        },
        {
          name: "Amelia Wilson",
          profession: "E-commerce Sales Strategist",
          social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
          },
          image: "/images/team/user-9.jpg",
        },
      ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-[40px] font-bold mb-20 text-[#252B42]">
        Meet Our Team
      </h2>
      <p className="text-sm text-[#737373] font-normal text-center -mt-20 mb-20">
      Problems trying to resolve the conflict between <br />
      the two major realms of Classical physics: Newtonian mechanics 
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 px-44">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center h-full shadow-lg mb-12">
            <Image
              src={member.image}
              alt={member.name}
              width={316}
              height={231}
              className="mx-auto my-4 shadow-lg"
            />
            <h3 className="mt-6 text-[16px] font-bold text-[#252B42]">
              {member.name}
            </h3>
            <p className="text-[#737373] text-[14px] mt-3">
              {member.profession}
            </p>
            <div className="flex justify-center mt-8 space-x-4">
              {/* Social media icons */}
              <Link href={member.social.facebook} className="text-[#23A6F0]">
                <FaFacebookF size={20} />
              </Link>
              <Link href={member.social.instagram} className="text-[#23A6F0]">
                <FaInstagram size={20} />
              </Link>
              <Link href={member.social.twitter} className="text-[#23A6F0]">
                <FaTwitter size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>
        {/* Start Free Trial Section */}
      <div className="py-16 bg-[#FFFFFF] text-center mt-20">
        <h2 className="text-[40px] font-bold text-[#252B42]">
          Start your 14 days free trial
        </h2>
        <p className="text-[#737373] text-[14px] mt-4 mx-auto">
          Met minim Mollie non deserunt Alamo est sit cliquey dolor <br /> do
          met sent. RELUIT official consequat.
        </p>
        <button className="mt-6 bg-[#23A6F0] rounded-md text-[14px] font-semibold text-[#FFFFFF] px-7 py-3 hover:bg-blue-500 hover:font-bold hover:text-sm">
          Try it free now
        </button>

        <div className="flex justify-center mt-10">
          <Link href="#" className="text-[#55ACEE] hover:animate-bounce hover:text-blue-500 mx-2">
            <FaTwitter size={30} />
          </Link>
          <Link href="#" className="text-[#395185] hover:animate-bounce hover:text-blue-800 mx-2">
            <FaFacebookF size={30} />
          </Link>
          <Link href="#" className="text-[#000000] hover:animate-bounce hover:text-gray-950/90 mx-2">
            <FaInstagram size={30} />
          </Link>
          <Link href="#" className="text-[#0A66C2] hover:animate-bounce hover:text-blue-400 mx-2">
            <FaLinkedinIn size={30} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;