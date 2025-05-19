// Utility to fetch location suggestions from OpenStreetMap Nominatim
// See: https://nominatim.org/release-docs/latest/api/Search/

export async function fetchLocationSuggestions(query: string): Promise<string[]> {
  if (!query || query.length < 3) return [];
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=5`;
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'shipping-logistics-demo/1.0 (your@email.com)'
    }
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.map((item: any) => item.display_name);
}
