"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const FramerCard = motion.create(Card);

export function MotionCard({ children, className, ...props }: React.PropsWithChildren & HTMLMotionProps<'div'>) {
  return (
    <FramerCard
      className={cn('p-8 cursor-pointer relative', className)}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 100, damping: 25 }}
      {...props}
    >
      {children}
    </FramerCard>
  );
}
