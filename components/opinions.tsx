'use client'

import { Star, User } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { motion } from "motion/react";

export const Opinions = ({ name, stars, children, priority = 1 }: { name: string, stars: 0 | 1 | 2 | 3 | 4 | 5, children: string, priority?: 1 | 2 | 3 }) => (
    <MotionCard
        className="gap-y-4 w-[512px]"
        initial={{
            scale:
                priority === 2 ? 0.95
                : priority === 3 ? 0.90
                : 1,
            opacity:
                priority === 2 ? 0.8
                : priority === 3 ? 0.70
                : 1
        }}
        whileHover={{
            scale: 1.05,
            opacity: 1
        }}
    >
        <CardHeader>
            <div className="flex items-center gap-x-4">
                <div className="size-8 rounded-full flex items-center justify-center bg-gray-300 relative">
                    <User size={24} />
                </div>
                <p>{name}</p>
            </div>
            <div className="flex items-center gap-x-1 mt-2" role="img" aria-label={`Ocena ${stars} na 5`}>
                {Array.from({ length: 5 }, (_, index) => (
                    <Star
                        key={index}
                        fill={index < stars ? 'currentColor' : 'none'} className="text-primary"
                        role="presentation"
                        aria-hidden="true"
                    />
                ))}
            </div>
        </CardHeader>
        <CardContent className="text-muted-foreground">
            {children}
        </CardContent>
    </MotionCard>
)

export const MotionCard = motion.create(Card)