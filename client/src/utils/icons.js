import { Factory, Flame, Palette, Sparkles, Scissors, Shirt, Truck, BadgeCheck } from 'lucide-react';

export const iconMap = {
  Factory,
  Flame,
  Palette,
  Sparkles,
  Scissors,
  Shirt,
  Truck,
  BadgeCheck
};

export function getIcon(name) {
  return iconMap[name] || Sparkles;
}
