import type { MapAdapter } from './map-adapter';

export class GoogleMapAdapter implements MapAdapter {
  constructor(private readonly apiKey?: string) {}
  getEmbedUrl(address: string) {
    const query = encodeURIComponent(address);
    return this.apiKey
      ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(this.apiKey)}&q=${query}`
      : `https://www.google.com/maps?q=${query}&output=embed`;
  }
}
