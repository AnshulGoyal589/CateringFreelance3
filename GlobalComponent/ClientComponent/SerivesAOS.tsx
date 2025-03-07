"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClientSideAOS = () => {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 400,
      once: true,
    });
  }, []);

  return null;
};

export default ClientSideAOS;