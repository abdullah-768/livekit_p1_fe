'use client';

import { AnimatePresence, motion } from 'motion/react';
import { type ReceivedMessage } from '@livekit/components-react';
import { ShimmerText } from '@/components/livekit/shimmer-text';
import { cn } from '@/lib/utils';

const MotionMessage = motion.create('p');

const VIEW_MOTION_PROPS = {
  variants: {
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeIn',
        duration: 0.5,
        delay: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        ease: 'easeIn',
        duration: 0.5,
        delay: 0,
      },
    },
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
};

interface PreConnectMessageProps {
  messages?: ReceivedMessage[];
  className?: string;
}

export function PreConnectMessage({ className, messages = [] }: PreConnectMessageProps) {
  return (
    <AnimatePresence>
      {messages.length === 0 && (
        <MotionMessage
          {...VIEW_MOTION_PROPS}
          aria-hidden={messages.length > 0}
          className={cn('pointer-events-none text-center', className)}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border border-violet-500/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <ShimmerText className="text-sm font-semibold text-slate-300">
              🎤 AI Buddy is listening... ask anything!
            </ShimmerText>
          </div>
        </MotionMessage>
      )}
    </AnimatePresence>
  );
}
