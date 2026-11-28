import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout() {

  // <Outlet /> is the placeholder where the current page renders in the layout.

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
        <main className="flex-1">
          <Outlet />
        </main>
      <Footer />
    </div>
  );
}
