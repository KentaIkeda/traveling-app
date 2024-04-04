import { Star } from 'lucide-react';

interface AttractionItem {
  name: string;
  businessHour: {
    open: number;
    close: number;
  };
  address: {
    prefecture: string; // 宮城県
    city1: string; // 角田市
    city2?: string; // ～～区等
    streetAddress1: string; // 横倉金谷31-41
    streetAddress2?: string; // アパート・マンション情報等　一軒家は必要なし
    postalCode: number | string; // 郵便番号
  };
}

export default function AttractionItem({
  name,
  address,
  businessHour,
}: AttractionItem) {
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
    <article className='bg-neutral-200 w-1/5 h-96 rounded-md relative'>
      <img
        className='aspect-video w-full h-auto'
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
