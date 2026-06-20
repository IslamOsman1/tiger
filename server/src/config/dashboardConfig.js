const dashboardConfig = {
  websiteType: 'company',
  enabledModules: ['services', 'gallery', 'settings'],
  modules: [
    {
      key: 'services',
      title: 'Services',
      titleAr: 'الخدمات',
      icon: 'sparkles',
      route: 'ServicesScreen',
      api: '/api/services',
      actions: ['list', 'create', 'update', 'delete']
    },
    {
      key: 'gallery',
      title: 'Gallery',
      titleAr: 'المعرض',
      icon: 'image',
      route: 'GalleryScreen',
      api: '/api/gallery',
      actions: ['list', 'create', 'update', 'delete']
    },
    {
      key: 'settings',
      title: 'Site Settings',
      titleAr: 'الإعدادات',
      icon: 'settings',
      route: 'SettingsScreen',
      api: '/api/settings',
      actions: ['read', 'update']
    }
  ]
};

export default dashboardConfig;
