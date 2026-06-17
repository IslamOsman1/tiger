import Settings from '../models/Settings.js';

async function getOrCreateSettings() {
  let settings = await Settings.findOne();
  if (!settings) settings = await Settings.create({});
  return settings;
}

export async function getSettings(req, res) {
  const settings = await getOrCreateSettings();
  res.json(settings);
}

export async function updateSettings(req, res) {
  const settings = await getOrCreateSettings();
  const allowed = ['companyName', 'tagline', 'phone', 'whatsapp', 'email', 'address', 'facebook', 'instagram', 'heroImage'];
  allowed.forEach((key) => {
    if (req.body[key] !== undefined) settings[key] = req.body[key];
  });
  await settings.save();
  res.json(settings);
}
