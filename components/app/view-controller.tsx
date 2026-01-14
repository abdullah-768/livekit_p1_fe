'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useSessionContext } from '@livekit/components-react';
import type { AppConfig } from '@/app-config';
import { SessionView } from '@/components/app/session-view';
import { WelcomeView } from '@/components/app/welcome-view';
import { AuthView } from '@/components/app/auth-view';
import { useAuth } from '@/components/app/auth-provider';

const MotionAuthView = motion.create(AuthView);
const MotionWelcomeView = motion.create(WelcomeView);
const MotionSessionView = motion.create(SessionView);

const VIEW_MOTION_PROPS = {
  variants: {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  transition: {
    duration: 0.5,
    ease: 'linear',
  },
};

interface ViewControllerProps {
  appConfig: AppConfig;
}

export function ViewController({ appConfig }: ViewControllerProps) {
  const { isConnected, start } = useSessionContext();
  const { isAuthenticated, login } = useAuth();

  return (
    <AnimatePresence mode="wait">
      {/* Auth view - shows first when not authenticated */}
      {!isAuthenticated && (
        <MotionAuthView
          key="auth"
          {...VIEW_MOTION_PROPS}
          onLoginSuccess={login}
        />
      )}
      {/* Welcome view - shows after authentication but before connection */}
      {isAuthenticated && !isConnected && (
        <MotionWelcomeView
          key="welcome"
          {...VIEW_MOTION_PROPS}
          startButtonText={appConfig.startButtonText}
          welcomeNote={appConfig.welcomeNote}
          onStartCall={start}
        />
      )}
      {/* Session view - shows when connected */}
      {isAuthenticated && isConnected && (
        <MotionSessionView key="session-view" {...VIEW_MOTION_PROPS} appConfig={appConfig} />
      )}
    </AnimatePresence>
  );
}
