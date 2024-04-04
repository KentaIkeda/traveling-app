import { Star } from 'lucide-react';
import { AttractionItemType } from '@/app/types/type';

export default function AttractionItem({
  name,
  address,
  businessHour,
}: AttractionItemType) {
  function formatAddress() {
    const pref = address.prefecture;
    const city1 = address.city1;
    let city2 = '';
    const streetAddress1 = address.streetAddress1;
    let streetAddress2 = '';
    if (address.city2) {
      city2 = address.city2;
    }
    if (address.streetAddress2) {
      streetAddress2 = address.streetAddress2;
    }

    // Attraction Addressの略
    const AA = pref + city1 + city2 + streetAddress1 + streetAddress2;
    return AA;
  }

  const attractionAddress = formatAddress();

  return (
    <article className='bg-neutral-200 w-1/5 h-96 rounded-md relative shadow-sm'>
      <img
        className='aspect-video w-full h-auto rounded-t-md'
        src='https://placehold.jp/160x90.png'
        alt=''
      />
      <div className='flex flex-col items-start gap-y-0.5 p-7'>
        <h3 className='font-bold'>{name}</h3>
        <p className='text-sm'>{attractionAddress}</p>
        <p>
          営業時間: {businessHour.open}時 - {businessHour.close}時
        </p>
      </div>
      <Star
        className='absolute bottom-7 right-7'
        size={22}
      />
    </article>
  );
}
