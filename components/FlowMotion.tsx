'use client';

import { useState, type ReactNode } from 'react';
import { Pause, Play } from 'lucide-react';

export function FlowMotion({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className="flow-motion" data-paused={paused}>
      <button className="flow-motion-toggle" type="button" aria-pressed={paused}
        onClick={() => setPaused(value => !value)}>
        {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
        {paused ? 'Retomar animação' : 'Pausar animação'}
      </button>
      {children}
    </div>
  );
}
