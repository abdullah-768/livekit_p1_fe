import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { PaperPlaneRightIcon, SpinnerIcon } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/livekit/button';

const MOTION_PROPS = {
  variants: {
    hidden: {
      height: 0,
      opacity: 0,
      marginBottom: 0,
    },
    visible: {
      height: 'auto',
      opacity: 1,
      marginBottom: 12,
    },
  },
  initial: 'hidden',
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
};

interface ChatInputProps {
  chatOpen: boolean;
  isAgentAvailable?: boolean;
  onSend?: (message: string) => void;
}

export function ChatInput({
  chatOpen,
  isAgentAvailable = false,
  onSend = async () => {},
}: ChatInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSending(true);
      await onSend(message);
      setMessage('');
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  const isDisabled = isSending || !isAgentAvailable || message.trim().length === 0;

  useEffect(() => {
    if (chatOpen && isAgentAvailable) return;
    // when not disabled refocus on input
    inputRef.current?.focus();
  }, [chatOpen, isAgentAvailable]);

  return (
    <motion.div
      inert={!chatOpen}
      {...MOTION_PROPS}
      animate={chatOpen ? 'visible' : 'hidden'}
      className="flex w-full items-start overflow-hidden border-b border-white/10"
    >
      <form
        onSubmit={handleSubmit}
        className="mb-3 flex grow items-end gap-3 rounded-xl pl-1 text-sm"
      >
        {/* Fun input wrapper */}
        <div className="flex-1 relative group">
          <input
            autoFocus
            ref={inputRef}
            type="text"
            value={message}
            disabled={!chatOpen}
            placeholder="✨ Ask your study buddy anything..."
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-10 px-4 bg-slate-800/50 border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
          />
          {/* Subtle glow on focus */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/0 via-violet-500/0 to-cyan-500/0 group-focus-within:from-violet-500/10 group-focus-within:via-purple-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none" />
        </div>
        
        {/* Send button with fun gradient */}
        <Button
          size="icon"
          type="submit"
          disabled={isDisabled}
          title={isSending ? 'Sending...' : 'Send message'}
          className={`
            self-start transition-all duration-300 h-10 w-10 rounded-xl
            ${isDisabled 
              ? 'bg-slate-700/50 text-slate-500' 
              : 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white hover:from-violet-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 active:scale-95'
            }
          `}
        >
          {isSending ? (
            <SpinnerIcon className="animate-spin" weight="bold" />
          ) : (
            <PaperPlaneRightIcon weight="bold" className="text-lg" />
          )}
        </Button>
      </form>
    </motion.div>
  );
}
