'use client';

import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}
export default function Section({ children, className }: SectionProps) {
  return (
    <section className={cn('w-[90%] mx-auto', className)}>{children}</section>
  );
}
