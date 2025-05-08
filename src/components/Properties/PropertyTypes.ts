export type PropertyItemProps = {
  imageUrl: string;
  address: string; // Used as the "ID" for navigation
};
export type PropertyDetails = {
  address: string;
  sqft: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  displayImageUrl: string;
  description: string;
  sold: "Sold" | "For Sale" | "On Lease";
  prpertyType: string;
  stories: number;
  yearBuilt: number;
  pool: boolean;
  appliances: string;
  parking: string;
  heating: string;
  cooling: string;
  laundry: string;
};