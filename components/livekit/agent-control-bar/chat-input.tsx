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
      className="flex w-full items-start overflow-hidden border-b-2 border-blue-100"
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
            placeholder="🎤 Ask me anything! I'm here to help! ✨"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-12 px-5 bg-blue-50 border-2 border-blue-200 rounded-full text-gray-700 placeholder:text-blue-400 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 font-medium text-base"
          />
          {/* Subtle glow on focus */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200/0 via-purple-200/0 to-pink-200/0 group-focus-within:from-blue-200/30 group-focus-within:via-purple-200/30 group-focus-within:to-pink-200/30 transition-all duration-300 pointer-events-none" />
        </div>
        
        {/* Send button - big and fun */}
        <Button
          size="icon"
          type="submit"
          disabled={isDisabled}
          title={isSending ? 'Sending...' : 'Send message'}
          className={`
            self-start transition-all duration-300 h-12 w-12 rounded-full
            ${isDisabled 
              ? 'bg-gray-200 text-gray-400' 
              : 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white hover:from-green-500 hover:via-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-300/50 hover:scale-110 active:scale-95'
            }
          `}
        >
          {isSending ? (
            <SpinnerIcon className="animate-spin" weight="bold" />
          ) : (
            <PaperPlaneRightIcon weight="bold" className="text-xl" />
          )}
        </Button>
      </form>
    </motion.div>
  );
}
