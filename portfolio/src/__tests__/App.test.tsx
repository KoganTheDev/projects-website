import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ProjectScroller } from '../components/ProjectScroller';
import { Footer } from '../components/Footer';

// 1. Navigation Tests
describe('Navigation Tests', () => {
  test('renders navigation links correctly', () => {
    render(<Navbar isDarkMode={false} setIsDarkMode={() => {}} activeSection="home" />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });
});

// 2. Hero Section Tests
describe('Hero Section Tests', () => {
  test('hero section displays main heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  test('hero section contains call-to-action button', () => {
    render(<Hero />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

// 3. About Section Tests
describe('About Section Tests', () => {
  test('about section displays personal information', () => {
    render(<About />);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  test('about section contains skills list', () => {
    render(<About />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});

// 4. Project Scroller Tests
describe('Project Scroller Tests', () => {
  test('project scroller displays project cards', () => {
    render(<ProjectScroller />);
    expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
  });

  test('project cards contain required information', () => {
    render(<ProjectScroller />);
    const projectCards = screen.getAllByRole('article');
    projectCards.forEach(card => {
      expect(card).toHaveTextContent(/project/i);
      expect(card).toHaveTextContent(/description/i);
    });
  });
});

// 5. Responsive Design Tests
describe('Responsive Design Tests', () => {
  test('navbar collapses on mobile view', () => {
    global.innerWidth = 500;
    render(<Navbar isDarkMode={false} setIsDarkMode={() => {}} activeSection="home" />);
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeInTheDocument();
  });
});

// 6. Footer Tests
describe('Footer Tests', () => {
  test('footer contains social media links', () => {
    render(<Footer />);
    expect(screen.getByText(/connect/i)).toBeInTheDocument();
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  test('footer contains copyright information', () => {
    render(<Footer />);
    expect(screen.getByText(/©/i)).toBeInTheDocument();
  });
});

// 7. Integration Tests
describe('Integration Tests', () => {
  test('complete page renders without errors', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});

// 8. Accessibility Tests
describe('Accessibility Tests', () => {
  test('all images have alt text', () => {
    render(<App />);
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
    });
  });

  test('proper heading hierarchy', () => {
    render(<App />);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
  });
}); 