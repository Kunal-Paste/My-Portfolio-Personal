"use client";

// import { useSectionInView } from '@/hooks/use-section-in-view'
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import Link from "next/link";
import Skills from "./skills";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/hooks/use-section-in-view";

export default function AboutSection() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          A goal-oriented software developer with experience in building web
          applications using modern technologies like React, Next.js, MongoDB,
          MySQL, Docker and more. Seeking to leverage my technical skills to
          deliver exceptional user experiences.
        </p>
        <p>
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to{" "}
          <Link
            className="underline-offset-4 hover:underline"
            href={siteConfig.links.contactForm}
          >
            contact
          </Link>{" "}
          me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
}
