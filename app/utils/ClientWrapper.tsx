"use client";

import React from "react";
import ClientSwiper from "../../GlobalComponent/ClientComponent/ClientSwiper";

interface SlideData {
  image: string;
  heading: string;
  subheading: string;
  alt: string;
}

export default function ClientWrapper({ slidesData }: { slidesData: SlideData[] }) {
  return <ClientSwiper slidesData={slidesData} />;
}
