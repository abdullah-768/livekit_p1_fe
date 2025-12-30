'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useSessionContext, useSessionMessages } from '@livekit/components-react';
import type { AppConfig } from '@/app-config';
import { ChatTranscript } from '@/components/app/chat-transcript';
import { PreConnectMessage } from '@/components/app/preconnect-message';
import { TileLayout } from '@/components/app/tile-layout';
import {
  AgentControlBar,
  type ControlBarControls,
} from '@/components/livekit/agent-control-bar/agent-control-bar';
import { cn } from '@/lib/utils';
import { ScrollArea } from '../livekit/scroll-area/scroll-area';

// Floating decorative shapes for chat screen
function FloatingChatShape({ className, delay = '0s', type = 'circle' }: { className?: string; delay?: string; type?: 'circle' | 'star' | 'book' | 'pencil' }) {
  const shapes = {
    circle: <circle cx="20" cy="20" r="18" fill="url(#chatShapeGrad)" opacity="0.12"/>,
    star: (
      <polygon 
        points="20,2 24,15 38,15 27,23 31,38 20,29 9,38 13,23 2,15 16,15" 
        fill="url(#chatShapeGrad)" 
        opacity="0.12"
      />
    ),
    book: (
      <g opacity="0.12" fill="url(#chatShapeGrad)">
        <rect x="6" y="8" width="28" height="24" rx="2"/>
        <line x1="20" y1="8" x2="20" y2="32" stroke="url(#chatShapeGrad)" strokeWidth="2"/>
      </g>
    ),
    pencil: (
      <g opacity="0.12" fill="url(#chatShapeGrad)">
        <rect x="14" y="4" width="12" height="28" rx="2" transform="rotate(15 20 20)"/>
        <polygon points="14,32 20,38 26,32" transform="rotate(15 20 20)"/>
      </g>
    ),
  };

  return (
    <svg
      className={`absolute animate-float-gentle pointer-events-none ${className}`}
      style={{ animationDelay: delay }}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <defs>
        <linearGradient id="chatShapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
      </defs>
      {shapes[type]}
    </svg>
  );
}

// Floating sparkle effect
function Sparkle({ className, delay = '0s', size = 6 }: { className?: string; delay?: string; size?: number }) {
  return (
    <div 
      className={`absolute rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 opacity-20 animate-pulse-slow pointer-events-none ${className}`}
      style={{ 
        animationDelay: delay,
        width: size,
        height: size,
      }}
    />
  );
}

const MotionBottom = motion.create('div');

const BOTTOM_VIEW_MOTION_PROPS = {
  variants: {
    visible: {
      opacity: 1,
      translateY: '0%',
    },
    hidden: {
      opacity: 0,
      translateY: '100%',
    },
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  transition: {
    duration: 0.3,
    delay: 0.5,
    ease: 'easeOut',
  },
};

interface FadeProps {
  top?: boolean;
  bottom?: boolean;
  className?: string;
}

export function Fade({ top = false, bottom = false, className }: FadeProps) {
  return (
    <div
      className={cn(
        'from-background pointer-events-none h-4 bg-linear-to-b to-transparent',
        top && 'bg-linear-to-b',
        bottom && 'bg-linear-to-t',
        className
      )}
    />
  );
}

interface SessionViewProps {
  appConfig: AppConfig;
}

export const SessionView = ({
  appConfig,
  ...props
}: React.ComponentProps<'section'> & SessionViewProps) => {
  const session = useSessionContext();
  const { messages } = useSessionMessages(session);
  const [chatOpen, setChatOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const controls: ControlBarControls = {
    leave: true,
    microphone: true,
    chat: appConfig.supportsChatInput,
    camera: appConfig.supportsVideoInput,
    screenShare: appConfig.supportsVideoInput,
  };

  useEffect(() => {
    const lastMessage = messages.at(-1);
    const lastMessageIsLocal = lastMessage?.from?.isLocal === true;

    if (scrollAreaRef.current && lastMessageIsLocal) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="relative z-10 h-full w-full overflow-hidden" {...props}>
      {/* Animated Gradient Background - matching Welcome Screen */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Animated gradient overlay */}
      <div className="fixed inset-0 animate-gradient-shift bg-[linear-gradient(-45deg,rgba(139,92,246,0.1),rgba(6,182,212,0.08),rgba(139,92,246,0.1),rgba(14,165,233,0.08))] bg-[length:400%_400%]" />
      
      {/* Subtle grid pattern */}
      <div className="fixed inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Floating decorative elements */}
      <FloatingChatShape className="top-[8%] left-[3%]" delay="0s" type="star" />
      <FloatingChatShape className="top-[15%] right-[8%]" delay="1s" type="circle" />
      <FloatingChatShape className="bottom-[35%] left-[5%]" delay="2s" type="book" />
      <FloatingChatShape className="top-[40%] right-[3%]" delay="0.5s" type="pencil" />
      <FloatingChatShape className="bottom-[50%] right-[12%]" delay="1.5s" type="star" />
      <FloatingChatShape className="top-[65%] left-[8%]" delay="2.5s" type="circle" />
      
      {/* Sparkle particles */}
      <Sparkle className="top-[12%] left-[25%]" delay="0s" size={5} />
      <Sparkle className="top-[20%] right-[20%]" delay="0.5s" size={4} />
      <Sparkle className="bottom-[40%] left-[30%]" delay="1s" size={6} />
      <Sparkle className="top-[50%] right-[35%]" delay="1.5s" size={4} />
      <Sparkle className="bottom-[55%] left-[50%]" delay="2s" size={5} />

      {/* Chat Transcript */}
      <div
        className={cn(
          'fixed inset-0 grid grid-cols-1 grid-rows-1 z-10',
          !chatOpen && 'pointer-events-none'
        )}
      >
        {/* Top gradient fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent pointer-events-none z-20" />
        
        {/* Header title when chat is open */}
        {chatOpen && (
          <div className="absolute top-0 inset-x-0 z-30 pt-6 pb-4 text-center pointer-events-none">
            <h2 className="text-lg font-semibold bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              💬 Chat with AI Study Buddy
            </h2>
            <p className="text-xs text-slate-500 mt-1">Ask anything about your studies!</p>
          </div>
        )}
        
        <ScrollArea ref={scrollAreaRef} className="px-4 pt-28 pb-[170px] md:px-6 md:pb-[220px] relative z-10">
          <ChatTranscript
            hidden={!chatOpen}
            messages={messages}
            className="mx-auto max-w-2xl space-y-4 transition-opacity duration-300 ease-out"
          />
        </ScrollArea>
      </div>

      {/* Tile Layout */}
      <TileLayout chatOpen={chatOpen} />

      {/* Bottom */}
      <MotionBottom
        {...BOTTOM_VIEW_MOTION_PROPS}
        className="fixed inset-x-3 bottom-0 z-50 md:inset-x-12"
      >
        {appConfig.isPreConnectBufferEnabled && (
          <PreConnectMessage messages={messages} className="pb-4" />
        )}
        <div className="relative mx-auto max-w-2xl pb-3 md:pb-8">
          {/* Bottom gradient fade */}
          <div className="absolute inset-x-0 top-0 h-8 -translate-y-full bg-gradient-to-t from-slate-950/90 to-transparent pointer-events-none" />
          <AgentControlBar
            controls={controls}
            isConnected={session.isConnected}
            onDisconnect={session.end}
            onChatOpenChange={setChatOpen}
          />
        </div>
      </MotionBottom>
    </section>
  );
};
