'use client';

import SearchAttraction from '@/components/SearchAttraction';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import SwiperAttraction from '@/components/SwiperAttraction';

export default function HomePage() {
  return (
    <main>
      <SearchAttraction />
      <Section>
        <H2 title='おすすめの観光名所' />
        <SwiperAttraction />
      </Section>
    </main>
  );
}
