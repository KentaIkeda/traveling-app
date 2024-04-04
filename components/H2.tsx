'use client';

import { cn } from '@/lib/utils';

interface H2Props {
  title: string;
  className?: string;
}

export default function H2({ title, className }: H2Props) {
  return <h2 className={cn('font-bold text-lg mb-14', className)}>{title}</h2>;
}
