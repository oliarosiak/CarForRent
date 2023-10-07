import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled.js';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;