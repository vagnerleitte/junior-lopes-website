import { GoogleMapAdapter } from '@/adapters/maps/google-map-adapter';
import { siteConfig } from '@/config/site';

export function MapSection() {
  const url = new GoogleMapAdapter(process.env.GOOGLE_MAPS_API_KEY).getEmbedUrl(
    siteConfig.address,
  );
  return (
    <iframe
      title="Localização do escritório no Google Maps"
      src={url}
      className="min-h-80 w-full rounded-lg border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
