import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ChatEntryProps extends React.HTMLAttributes<HTMLLIElement> {
  /** The locale to use for the timestamp. */
  locale: string;
  /** The timestamp of the message. */
  timestamp: number;
  /** The message to display. */
  message: string;
  /** The origin of the message. */
  messageOrigin: 'local' | 'remote';
  /** The sender's name. */
  name?: string;
  /** Whether the message has been edited. */
  hasBeenEdited?: boolean;
}

export const ChatEntry = ({
  name,
  locale,
  timestamp,
  message,
  messageOrigin,
  hasBeenEdited = false,
  className,
  ...props
}: ChatEntryProps) => {
  const time = new Date(timestamp);
  const title = time.toLocaleTimeString(locale, { timeStyle: 'full' });

  return (
    <li
      title={title}
      data-lk-message-origin={messageOrigin}
      className={cn(
        'group flex w-full flex-col gap-1.5 animate-message-appear',
        messageOrigin === 'local' ? 'items-end' : 'items-start',
        className
      )}
      {...props}
    >
      {/* Avatar & Name Header */}
      <header
        className={cn(
          'flex items-center gap-2 text-sm',
          messageOrigin === 'local' ? 'flex-row-reverse' : 'flex-row'
        )}
      >
        {/* Cute Avatar Circle */}
        <div className={cn(
          'flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shadow-md',
          messageOrigin === 'local' 
            ? 'bg-gradient-to-br from-violet-500 to-purple-600 text-white' 
            : 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white'
        )}>
          {messageOrigin === 'local' ? '👤' : '🤖'}
        </div>
        <span className={cn(
          'font-semibold text-xs',
          messageOrigin === 'local' ? 'text-violet-300' : 'text-cyan-300'
        )}>
          {messageOrigin === 'local' ? 'You' : 'AI Buddy'}
        </span>
        <span className="font-mono text-[10px] text-slate-500 opacity-0 transition-opacity ease-linear group-hover:opacity-100">
          {hasBeenEdited && '✏️ '}
          {time.toLocaleTimeString(locale, { timeStyle: 'short' })}
        </span>
      </header>
      
      {/* Message Bubble */}
      <div
        className={cn(
          'relative max-w-[85%] md:max-w-[75%] px-4 py-3 text-[15px] leading-relaxed shadow-lg transition-all duration-200',
          messageOrigin === 'local' 
            ? 'bg-gradient-to-br from-violet-600/90 to-purple-700/90 text-white rounded-2xl rounded-tr-md border border-violet-500/30' 
            : 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 text-slate-100 rounded-2xl rounded-tl-md border border-cyan-500/20'
        )}
      >
        {/* Decorative corner accent for AI messages */}
        {messageOrigin === 'remote' && (
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60" />
        )}
        {messageOrigin === 'local' && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-60" />
        )}
        
        {/* Message text */}
        <span className="relative z-10">{message}</span>
        
        {/* Subtle shine effect */}
        <div className={cn(
          'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          messageOrigin === 'local' 
            ? 'bg-gradient-to-r from-transparent via-white/5 to-transparent' 
            : 'bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'
        )} />
      </div>
    </li>
  );
};
