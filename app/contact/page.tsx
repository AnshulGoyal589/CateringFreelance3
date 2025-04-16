import React from 'react'
import ContactUs from './ContactUs'

import { Metadata } from "next";
import metadataobj from "@/app/Metadata.json";
export const metadata: Metadata = metadataobj.contactus;
import defaultViewport from "@/GlobalComponent/viewportConfig";
export const viewport = defaultViewport;

function page() {
  return (
    <div>
      <ContactUs />
    </div>
  )
}

export default page