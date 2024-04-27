
import {
  BookIcon,
  FacebookIcon,
  TiktokIcon,
  InstagramIcon
} from "@/components/icons";

import { LinkedinIcon, TwitterIcon, GithubIcon, DribleIcon } from "@/components/icons"


export const SocialLinks = () => {
  return (
    <div>
      <div className=" hidden sm:flex items-center">
        <a href={""} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a href={""} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank"><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a href={""} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank"><GithubIcon className="  hover:scale-125 transition-all ease duration-200 " /></a>
        <a href={""} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Dribbble" target="_blank"><DribleIcon className="hover:scale-125 transition-all ease duration-200" /></a>
      </div>

      {/* <div className="hidden sm:flex items-center">

        <a className="inline-block w-6 h-6 mr-4" href="https://" title="X-Icons" >
          <BookIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a className="inline-block w-10 h-10 mr-4" href="https:// " title="Linkedn-Icon" >
          <FacebookIcon className="hover:scale-125 transition-all ease duration-200 " />
        </a>
        <a className="inline-block w-6 h-6 mr-4 " href="https://" title="Linkedn-Icon">
          <TiktokIcon className="hover:scale-125 transition-all ease duration-200 " />
        </a>
        <a className="inline-block w-6 h-6 mr-4 " href="https://" title="Linkedn-Icon">
          <BookIcon className="hover:scale-125 transition-all ease duration-200 rounded-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />
        </a>
      </div> */}
    </div>

  )
}

// export default SocialLinks