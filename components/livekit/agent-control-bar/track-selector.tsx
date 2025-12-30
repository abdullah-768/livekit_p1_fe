'use client';

import {
  BarVisualizer,
  type TrackReferenceOrPlaceholder,
  useTrackToggle,
} from '@livekit/components-react';
import { TrackDeviceSelect } from '@/components/livekit/agent-control-bar/track-device-select';
import { TrackToggle } from '@/components/livekit/agent-control-bar/track-toggle';
import { cn } from '@/lib/utils';

interface TrackSelectorProps {
  kind: MediaDeviceKind;
  source: Parameters<typeof useTrackToggle>[0]['source'];
  pressed?: boolean;
  pending?: boolean;
  disabled?: boolean;
  className?: string;
  audioTrackRef?: TrackReferenceOrPlaceholder;
  onPressedChange?: (pressed: boolean) => void;
  onMediaDeviceError?: (error: Error) => void;
  onActiveDeviceChange?: (deviceId: string) => void;
}

export function TrackSelector({
  kind,
  source,
  pressed,
  pending,
  disabled,
  className,
  audioTrackRef,
  onPressedChange,
  onMediaDeviceError,
  onActiveDeviceChange,
}: TrackSelectorProps) {
  return (
    <div className={cn('flex items-center gap-0', className)}>
      <TrackToggle
        size="icon"
        variant="primary"
        source={source}
        pressed={pressed}
        pending={pending}
        disabled={disabled}
        onPressedChange={onPressedChange}
        className={cn(
          'peer/track group/track',
          'has-[.audiovisualizer]:w-auto has-[.audiovisualizer]:px-4',
          'has-[~_button]:rounded-r-none has-[~_button]:pr-3 has-[~_button]:pl-4',
          // Active mic state - glowing green/cyan
          'data-[state=on]:bg-gradient-to-r data-[state=on]:from-emerald-600/30 data-[state=on]:to-cyan-600/30',
          'data-[state=on]:border data-[state=on]:border-emerald-500/40',
          'data-[state=on]:shadow-[0_0_15px_rgba(16,185,129,0.3)]',
          // Muted mic state - red warning
          'data-[state=off]:bg-gradient-to-r data-[state=off]:from-red-600/30 data-[state=off]:to-orange-600/30',
          'data-[state=off]:border data-[state=off]:border-red-500/40',
          'data-[state=off]:shadow-[0_0_15px_rgba(239,68,68,0.25)]'
        )}
      >
        {audioTrackRef && (
          <BarVisualizer
            barCount={3}
            options={{ minHeight: 5 }}
            trackRef={audioTrackRef}
            className="audiovisualizer flex h-6 w-auto items-center justify-center gap-1"
          >
            <span
              className={cn([
                'h-full w-1 origin-center rounded-full transition-all duration-150',
                // Active state - animated cyan/green bars
                'group-data-[state=on]/track:bg-gradient-to-t group-data-[state=on]/track:from-emerald-400 group-data-[state=on]/track:to-cyan-300',
                'group-data-[state=on]/track:shadow-[0_0_8px_rgba(6,182,212,0.6)]',
                // Muted state - red bars
                'group-data-[state=off]/track:bg-gradient-to-t group-data-[state=off]/track:from-red-500 group-data-[state=off]/track:to-red-400',
                'data-lk-muted:bg-slate-600',
              ])}
            />
          </BarVisualizer>
        )}
      </TrackToggle>
      <hr className="bg-white/10 peer-data-[state=off]/track:bg-red-500/30 relative z-10 -mr-px hidden h-5 w-px border-none has-[~_button]:block" />
      <TrackDeviceSelect
        size="sm"
        kind={kind}
        requestPermissions={false}
        onMediaDeviceError={onMediaDeviceError}
        onActiveDeviceChange={onActiveDeviceChange}
        className={cn([
          'rounded-l-none pl-2.5 bg-slate-800/60 border-l-0',
          'peer-data-[state=on]/track:text-cyan-300',
          'peer-data-[state=off]/track:text-red-400',
          'hover:text-white hover:bg-slate-700/80',
          'focus:text-white',
        ])}
      />
    </div>
  );
}
