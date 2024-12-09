import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
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

const MeetTeam: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Eva Angel",
      profession: "Designer",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: "/images/about/team-member3.png",
    },
    {
      name: "Amelia D",
      profession: "Sales & Marketing",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: "/images/about/team-member4.png",
    },
    {
      name: "Sam Wilson",
      profession: "Project Manager",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: "/images/about/team-member1.png",
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
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 px-36">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            {/* Use Next.js Image component */}
            <Image
              src={member.image}
              alt={member.name}
              width={316}
              height={231}
              className="mx-auto my-4"
            />
            <h3 className="mt-6 text-[16px] font-bold text-[#252B42]">
              {member.name}
            </h3>
            <p className="text-[#737373] text-[14px] mt-3">
              {member.profession}
            </p>
            <div className="flex justify-center mt-3 space-x-4">
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
    </section>
  );
};

export default MeetTeam;