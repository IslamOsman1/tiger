import { useEffect, useState } from 'react';
import api from '../api/client.js';
import { defaultGallery, defaultServices, defaultSettings } from '../data/fallback.js';

export default function usePublicData() {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState(defaultServices);
  const [gallery, setGallery] = useState(defaultGallery);
  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const [servicesRes, galleryRes, settingsRes] = await Promise.allSettled([
          api.get('/api/services'),
          api.get('/api/gallery'),
          api.get('/api/settings')
        ]);

        if (!active) return;
        if (servicesRes.status === 'fulfilled' && servicesRes.value.data?.length) setServices(servicesRes.value.data);
        if (galleryRes.status === 'fulfilled' && galleryRes.value.data?.length) setGallery(galleryRes.value.data);
        if (settingsRes.status === 'fulfilled' && settingsRes.value.data) {
          setSettings({ ...defaultSettings, ...settingsRes.value.data });
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => { active = false; };
  }, []);

  return { loading, services, gallery, settings };
}
