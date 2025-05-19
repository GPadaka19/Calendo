import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactButton from '../ContactButton';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ContactButton />
    </div>
  );
} 