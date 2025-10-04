"use client";

// import { useSectionInView } from '@/hooks/use-section-in-view'
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./section-heading";
import { Badge } from "./ui/badge";
import { useSectionInView } from "@/hooks/use-section-in-view";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function ProjectsSection() {
  const { ref } = useSectionInView('Projects')

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28 md:mb-20 p-1.5">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="My Projects"
          content="Projects I worked on. Each of them containing its own case study."
        />
      </motion.div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projectsData.map((data, index) => (
          <motion.div
            key={data.title}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="flex flex-col rounded border p-4 cursor-pointer"
          >
            <Link
              href={data.links.preview}
              aria-label={data.title}
              target="_blank"
              className="overflow-hidden rounded"
            >
              <video
                src={data.video}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none mx-auto h-48 w-full object-cover"
              />
            </Link>
            <h3 className="mt-4 text-xl font-medium">{data.title}</h3>
            <Link
              href={data.links.github}
              aria-label={data.title}
              target="_blank"
              className="overflow-hidden rounded flex gap-2"
            >
              <h4 className="hover:text-blue-300 underline underline-offset-2 mt-1">Github</h4>
            </Link>
            <p className="text-muted-foreground mb-4 mt-1">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {data.technologies.map((tech) => (
                <Badge key={tech} variant={"outline"} size={"lg"}>
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
