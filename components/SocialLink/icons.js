import Image from "next/image"
import Tiktok from "/public/assets/social-svg/tiktok-icon.svg"
import Twitter from "/public/assets/social-svg/twitter-icon.svg"
import LinkedIn from "/public/assets/social-svg/linkedin-icon.svg"
import Facebook from "/public/assets/social-svg/facebook-icon.svg"
import Instagram from "/public/assets/social-svg/instagram-icon.svg"





export const TwitterIcon = () => {
  return (
    <div>
      <Image
        src={Twitter}
        alt={""}
        className=" w-full"
        sizes="32" />
    </div>
  )
}


export const TiktokIcon = () => {
  return (
    <div>
      <Image
        src={Tiktok}
        alt={""}
        className=" w-6 h-6"
        sizes={32}
      />
    </div>
  )
}


export const FacebookIcon = () => {
  return (
    <div>
      <Image
        src={Facebook}
        alt={""}
        className=" w-6 h-6"
        sizes="32" />
    </div>
  )
}

export const InstagramIcon = () => {
  return (
    <div>
      <Image
        src={Instagram}
        alt={""}
        className=" w-6 h-6"
        sizes="32"
      />
    </div>
  )
}

export const LinkedinIcon = () => {
  return (
    <div>
      <Image
        src={LinkedIn}
        alt={""}
        className=" w-6 h-6"
        sizes="32" />
    </div>
  )
}