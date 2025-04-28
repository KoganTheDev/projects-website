import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectScroller from '../components/ProjectScroller';
import Footer from '../components/Footer';

// 1. Navigation Tests
describe('Navigation Tests', () => {
  test('renders navigation links correctly', () => {
    render(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  test('navigation links are clickable', () => {
    render(<Navbar />);
    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');
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

  test('project navigation buttons work', () => {
    render(<ProjectScroller />);
    const nextButton = screen.getByText(/next/i);
    fireEvent.click(nextButton);
    // Add assertions for project change
  });
});

// 5. Responsive Design Tests
describe('Responsive Design Tests', () => {
  test('navbar collapses on mobile view', () => {
    global.innerWidth = 500;
    render(<Navbar />);
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  test('project cards stack on mobile view', () => {
    global.innerWidth = 500;
    render(<ProjectScroller />);
    const projectCards = screen.getAllByRole('article');
    expect(projectCards[0]).toHaveStyle({ width: '100%' });
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
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('navigation between sections works', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const aboutLink = screen.getByText('About');
    fireEvent.click(aboutLink);
    await waitFor(() => {
      expect(screen.getByText(/about/i)).toBeInTheDocument();
    });
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

// 9. Performance Tests
describe('Performance Tests', () => {
  test('page loads within acceptable time', async () => {
    const startTime = performance.now();
    render(<App />);
    const endTime = performance.now();
    expect(endTime - startTime).toBeLessThan(1000);
  });
});

// 10. Error Handling Tests
describe('Error Handling Tests', () => {
  test('handles missing project data gracefully', () => {
    render(<ProjectScroller />);
    // Mock empty project data
    expect(screen.getByText(/no projects/i)).toBeInTheDocument();
  });
}); 