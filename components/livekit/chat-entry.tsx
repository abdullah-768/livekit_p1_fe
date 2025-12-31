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
        'group flex w-full flex-col gap-2 animate-message-appear',
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
        {/* Fun Avatar Circle */}
        <div className={cn(
          'flex items-center justify-center w-9 h-9 rounded-full text-lg shadow-lg border-2 transition-transform duration-200 group-hover:scale-110',
          messageOrigin === 'local' 
            ? 'bg-gradient-to-br from-purple-400 to-pink-400 border-purple-200' 
            : 'bg-gradient-to-br from-blue-400 to-cyan-400 border-blue-200'
        )}>
          {messageOrigin === 'local' ? '😊' : '🤖'}
        </div>
        <span className={cn(
          'font-bold text-sm',
          messageOrigin === 'local' ? 'text-purple-600' : 'text-blue-600'
        )}>
          {messageOrigin === 'local' ? 'You' : 'Study Buddy'}
        </span>
        <span className="font-mono text-[10px] text-gray-400 opacity-0 transition-opacity ease-linear group-hover:opacity-100">
          {hasBeenEdited && '✏️ '}
          {time.toLocaleTimeString(locale, { timeStyle: 'short' })}
        </span>
      </header>
      
      {/* Message Bubble - Fun and colorful */}
      <div
        className={cn(
          'relative max-w-[85%] md:max-w-[75%] px-5 py-3 text-[15px] leading-relaxed shadow-lg transition-all duration-200 group-hover:shadow-xl',
          messageOrigin === 'local' 
            ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-3xl rounded-tr-lg border-2 border-purple-300/50' 
            : 'bg-white text-gray-700 rounded-3xl rounded-tl-lg border-2 border-blue-200 shadow-blue-100'
        )}
      >
        {/* Fun decorative corner accent */}
        {messageOrigin === 'remote' && (
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-[8px]">
            ✨
          </div>
        )}
        {messageOrigin === 'local' && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-[8px]">
            ⭐
          </div>
        )}
        
        {/* Message text */}
        <span className="relative z-10 font-medium">{message}</span>
        
        {/* Subtle shine effect on hover */}
        <div className={cn(
          'absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          messageOrigin === 'local' 
            ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent' 
            : 'bg-gradient-to-r from-transparent via-blue-100/30 to-transparent'
        )} />
      </div>
    </li>
  );
};
