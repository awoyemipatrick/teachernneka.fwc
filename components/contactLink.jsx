import Link from "next/link"

import React from 'react'

export const ContactLink = () => {
  return (
    <button className="">
      <Link href="/contactPage" className="" passHref>
        Contact Us
      </Link>
    </button>
  )
}
