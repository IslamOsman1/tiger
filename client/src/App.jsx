import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AdminLogin from './pages/admin/AdminLogin.jsx';
import AdminLayout from './components/admin/AdminLayout.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AdminGallery from './pages/admin/AdminGallery.jsx';
import AdminServices from './pages/admin/AdminServices.jsx';
import AdminSettings from './pages/admin/AdminSettings.jsx';
import ProtectedRoute from './components/admin/ProtectedRoute.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="services" element={<AdminServices />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
