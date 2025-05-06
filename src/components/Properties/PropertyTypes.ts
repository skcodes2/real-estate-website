export type PropertyItemProps = {
  imageUrl: string;
  address: string; // Used as the "ID" for navigation
};
export type PropertyDetails = {
  address: string;
  sqft: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  imageUrls: string[];
  displayImageUrl: string;
  additionalDetails: string;
};