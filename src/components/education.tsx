"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/use-section-in-view";

const education = [
  {
    institution: "Dr. D.Y Patil University, Pune, Ambi",
    degree: "B.Tech, Computer Science",
    period: "Oct 2021 - jun 2025",
    gpa: "CGPA: 7.96/10",
    icon: "🎓",
  },
  {
    institution: "Dr. D.Y. Patil Junior College of Science, Talegaon",
    degree: "HSC-Science",
    period: "Apr 2019 - Jun 2021",
    gpa: "pct: 83%",
    icon: "🏫",
  },
];

export default function Education() {
  const { ref } = useSectionInView("Education");
  return (
    <section ref={ref} id="education" className="py-10 p-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Education</h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xl">
                {edu.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-muted-foreground">{edu.degree}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                  <span>{edu.period}</span>
                  {edu.gpa && (
                    <>
                      <span className="hidden sm:inline">•</span>
                      <span>{edu.gpa}</span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
