export type AttractionItemType = {
  name: string;
  businessHour: {
    open: number;
    close: number;
  };
  address: {
    prefecture: string;
    city1: string;
    city2?: string;
    streetAddress1: string;
    streetAddress2?: string;
    postalCode: number | string;
  };
};
