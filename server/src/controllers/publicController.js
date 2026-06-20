import dashboardConfig from '../config/dashboardConfig.js';

export function getDashboardConfig(req, res) {
  try {
    res.json({
      success: true,
      ...dashboardConfig
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to load dashboard config'
    });
  }
}
