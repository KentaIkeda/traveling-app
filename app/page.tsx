'use client';

import SearchAttraction from '@/components/SearchAttraction';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import SwiperAttraction from '@/components/SwiperAttraction';
import db from '@/lib/firebase';
import { useState, useEffect, SetStateAction } from 'react';
import { collection, getDocs, DocumentData } from 'firebase/firestore';

export default function HomePage() {
  const [data, setData] = useState<SetStateAction<DocumentData>[]>();

  useEffect(() => {
    const attractionData = collection(db, 'datas');
    getDocs(attractionData).then((data) => {
      const d = data.docs.map((doc) => doc.data());
      setData(d);
    });
  }, []);
  console.log(data);

  return (
    <main>
      <SearchAttraction />
      <Section>
        <H2 title='おすすめの観光名所' />
        <SwiperAttraction />
      </Section>
      <Section>
        <H2
          title='お気に入りの観光名所'
          className='mt-32'
        />
        <SwiperAttraction />
      </Section>
      {/* test */}
      <div>
        {data &&
          data.map((data) => {
            return <p>{data.name}</p>;
          })}
      </div>
    </main>
  );
}
