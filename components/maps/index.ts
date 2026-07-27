// Export all map-related components and utilities

// Re-export utility functions from lib/maps
export {
  extractPlaceIdFromUrl,
  generateLocationMapsData,
  generateLocationQuery,
  generateMapsCoordinatesUrl,
  generateMapsDirectionsUrl,
  generateMapsEmbedUrl,
  generateMapsMultiStopRoute,
  generateMapsPlaceUrl,
  generateMapsSearchUrl,
  generateMapsShareUrl,
  generateMyMapsUrl,
  generateStreetViewUrl,
  generateTripRoute,
  isValidMapsUrl,
  type MapLocation,
  openInMaps,
} from "@/lib/maps";
export { DirectionsPanel, QuickDirections } from "./directions-panel";
export { MapButton, MapLink } from "./map-button";
export { LocationPreview, MapGrid, MapPreview } from "./map-preview";
export { MapStats, MapsIntegrationSummary } from "./maps-integration-summary";
export { QuickMap, TripMap } from "./trip-map";
