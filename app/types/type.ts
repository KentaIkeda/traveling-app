export type AttractionItemType = {
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
};
