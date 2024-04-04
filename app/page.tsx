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
        <AttractionItem
          name='〇×△□遊園地'
          businessHour={{ open: 9, close: 19 }}
          address={{
            prefecture: '宮城県',
            city1: '角田市',
            streetAddress1: '横倉字金谷31-41',
            postalCode: 9811512,
          }}
        />
      </Section>
    </main>
  );
}
