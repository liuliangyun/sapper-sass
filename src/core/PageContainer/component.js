import CampaignHero from '../../components/CampaignHero/hero.svelte';
import FeaturedItems from '../../components/FeaturedItems/itemlist.svelte';
import LtoItems from '../../components/LtoItems/itemlist.svelte';

export const COMPONENT__ID_MAPPER = {
  "web-campaign-hero": CampaignHero,
  "web-featured-items": FeaturedItems,
  "web-lto-items": LtoItems
};

export function validateComponentId(componentId) {
  return typeof COMPONENT__ID_MAPPER[componentId] !== "undefined";
}
