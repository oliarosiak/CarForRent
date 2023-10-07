import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout.jsx';

const MainPage = lazy(() => import('../pages/MainPage.jsx'));
const CatalogPage = lazy(() => import('../pages/CatalogPage.jsx'));
const FavoritePage = lazy(() => import('../pages/FavoritePage.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
};
