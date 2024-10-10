"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const FramerCard = motion.create(Card);

export function MotionCard({ children, ...props }: React.PropsWithChildren & HTMLMotionProps<'div'>) {
  return (
    <FramerCard
      className="p-8 cursor-pointer flex flex-col items-center relative"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 100, damping: 25 }}
      {...props}
    >
      {children}
    </FramerCard>
  );
}
