import SearchAttraction from '@/components/SearchAttraction';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import AttractionItem from '@/components/AttractionItem';

export default function HomePage() {
  return (
    <main>
      <SearchAttraction />
      <Section>
        <H2 title='おすすめの観光名所' />
        <AttractionItem />
      </Section>
    </main>
  );
}
