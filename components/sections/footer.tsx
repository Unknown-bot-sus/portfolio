import Link from "next/link";
import { ContactIcon } from "../contact-icon";
import { TbBrandGithubFilled } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";

export const Footer = () => {
  return (
    <footer className=" w-full h-10 text-white">
      <div className="py-5 bg-gray-900">
        <ul className="mx-auto flex justify-center gap-10 items-center">
          <li>
            <Link href="https://www.linkedin.com/in/thar-lin-shwe/">
              <ContactIcon className="hover:rounded-lg p-0 hover:text-4xl hover:bg-[#0077B5]">
                <TiSocialLinkedin />
              </ContactIcon>
            </Link>
          </li>
          <li>
            <Link href="https://leetcode.com/Unknown-bot-sus/">
              <ContactIcon className=""></ContactIcon>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Unknown-bot-sus">
              <ContactIcon className=" hover:bg-white hover:text-black hover:items-end hover:text-4xl">
                <TbBrandGithubFilled />
              </ContactIcon>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-black flex justify-center items-center p-2">
        Copyright &#169; 2024; Designed by Thar Lin
      </div>
    </footer>
  );
};
