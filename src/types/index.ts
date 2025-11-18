export interface HeroSection {
  id: string;
  title: string;
  tagline: string;
  rera_number: string;
  background_video_url?: string;
  background_image_url?: string;
  cta_text: string;
  is_active: boolean;
}

export interface ProjectInfo {
  id: string;
  description: string;
  land_parcel_size: string;
  number_of_towers: number;
  highlights: string[];
}

export interface Amenity {
  id: string;
  name: string;
  icon_name: string;
  description: string;
  image_url?: string;
  display_order: number;
}

export interface Configuration {
  id: string;
  type: string;
  size_sqft: number;
  size_sqm: number;
  floor_plan_pdf_url: string;
  thumbnail_url: string;
  price_starting_from: number;
  description: string;
  display_order: number;
}

export interface GalleryItem {
  id: string;
  media_type: 'image' | 'video';
  media_url: string;
  thumbnail_url?: string;
  title: string;
  category: string;
  display_order: number;
}

export interface DeveloperInfo {
  id: string;
  name: string;
  description: string;
  logo_url?: string;
  established_year: number;
  projects_completed: number;
  website_url?: string;
}

export interface LocationInfo {
  id: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  latitude: number;
  longitude: number;
  map_image_url?: string;
  google_maps_embed_url?: string;
  nearby_places: Array<{
    name: string;
    distance: string;
  }>;
}

export interface ContactInfo {
  id: string;
  phone_primary: string;
  phone_secondary?: string;
  email: string;
  corporate_address: string;
  whatsapp_number?: string;
  social_media: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface SiteSettings {
  id: string;
  site_title: string;
  logo_url?: string;
  favicon_url?: string;
  brochure_pdf_url: string;
  rera_disclaimer: string;
  footer_text: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  source: string;
}
