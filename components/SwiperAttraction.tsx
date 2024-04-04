'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import AttractionItem from './AttractionItem';
import 'swiper/css';
export default function SwiperAttraction() {
  // DB使って管理する予定
  const attractionData = [
    {
      id: 1,
      name: '〇×△□遊園地',
      businessHour: {
        open: 10,
        close: 20,
      },
      address: {
        prefecture: '宮城県',
        city1: '仙台市',
        streetAddress1: '青葉区1丁目1-1',
        postalCode: 1234567,
      },
    },
    {
      id: 2,
      name: '〇×△□遊園地',
      businessHour: {
        open: 10,
        close: 20,
      },
      address: {
        prefecture: '宮城県',
        city1: '仙台市',
        streetAddress1: '青葉区1丁目1-1',
        postalCode: 1234567,
      },
    },
    {
      id: 3,
      name: '〇×△□遊園地',
      businessHour: {
        open: 10,
        close: 20,
      },
      address: {
        prefecture: '宮城県',
        city1: '仙台市',
        streetAddress1: '青葉区1丁目1-1',
        postalCode: 1234567,
      },
    },
    {
      id: 4,
      name: '〇×△□遊園地',
      businessHour: {
        open: 10,
        close: 20,
      },
      address: {
        prefecture: '宮城県',
        city1: '仙台市',
        streetAddress1: '青葉区1丁目1-1',
        postalCode: 1234567,
      },
    },
  ];
  return (
    <Swiper>
      {attractionData.map((data) => {
        return (
          <SwiperSlide key={data.id}>
            <AttractionItem
              name={data.name}
              businessHour={data.businessHour}
              address={data.address}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
