import { startTransition, useDeferredValue, useEffect, useEffectEvent, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ExternalLink, Github, Linkedin, Mail, MoonStar, SunMedium } from 'lucide-react';
import Lightbox from './components/Lightbox';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Resume from './components/sections/Resume';
import Skills from './components/sections/Skills';
import {
  aboutHighlights,
  certifications,
  contactCards,
  experience,
  featuredProjects,
  navLinks,
  profile,
  skills,
} from './data/portfolioData';
import * as S from './styles/appStyles';
import { GlobalStyle, themes } from './styles/theme';

const THEME_STORAGE_KEY = 'tarek-portfolio-theme';

const iconMap = {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
};

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

function App() {
  const [themeName, setThemeName] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const activeNavId = useDeferredValue(activeSection);
  const theme = themes[themeName];
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, themeName);
  }, [themeName]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  const handleScroll = useEffectEvent(() => {
    setIsBackToTopVisible(window.scrollY > 560);
  });

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio);

        if (visibleEntries.length) {
          startTransition(() => {
            setActiveSection(visibleEntries[0].target.id);
          });
        }
      },
      {
        threshold: [0.15, 0.28, 0.42, 0.6],
        rootMargin: '-18% 0px -48% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleThemeToggle = () => {
    setThemeName((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleNavLinkClick = (sectionId) => {
    setMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showNextLightboxImage = () =>
    setLightboxIndex((currentIndex) =>
      currentIndex === null ? 0 : (currentIndex + 1) % featuredProjects.length,
    );
  const showPreviousLightboxImage = () =>
    setLightboxIndex((currentIndex) =>
      currentIndex === null
        ? featuredProjects.length - 1
        : (currentIndex - 1 + featuredProjects.length) % featuredProjects.length,
    );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <S.SkipLink href="#content">Skip to content</S.SkipLink>
      <S.SiteShell>
        <S.TopNav>
          <S.NavInner>
            <S.Brand type="button" onClick={() => handleNavLinkClick('hero')} aria-label="Go to homepage">
              <S.BrandMark>TM</S.BrandMark>
              <S.BrandText>
                <strong>{profile.name}</strong>
                <span>Azure Data Engineer</span>
              </S.BrandText>
            </S.Brand>

            <S.DesktopNav aria-label="Primary navigation">
              {navLinks.map((link) => (
                <S.NavLinkButton
                  as="a"
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  $active={activeNavId === link.id}
                  aria-current={activeNavId === link.id ? 'page' : undefined}
                >
                  {link.label}
                </S.NavLinkButton>
              ))}
            </S.DesktopNav>

            <S.NavActions>
              <S.ThemeToggle
                type="button"
                onClick={handleThemeToggle}
                aria-label={`Switch to ${themeName === 'dark' ? 'light' : 'dark'} mode`}
              >
                {themeName === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
              </S.ThemeToggle>
              <S.MobileMenuButton
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
              >
                {menuOpen ? <S.CloseIcon size={20} /> : <S.MenuIcon size={20} />}
              </S.MobileMenuButton>
            </S.NavActions>
          </S.NavInner>

          <S.MobileNavPanel id="mobile-navigation" $open={menuOpen} aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <S.MobileNavLinkButton
                as="a"
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                $active={activeNavId === link.id}
              >
                {link.label}
              </S.MobileNavLinkButton>
            ))}
          </S.MobileNavPanel>
        </S.TopNav>

        <S.Main id="content">
          <Hero profile={profile} />
          <About profile={profile} highlights={aboutHighlights} />
          <Skills skills={skills} />
          <Projects projects={featuredProjects} onPreview={openLightbox} />
          <Experience experience={experience} />
          <Resume profile={profile} certifications={certifications} />
          <Contact profile={profile} contactCards={contactCards} />
        </S.Main>

        <S.Footer>
          <S.FooterGrid>
            <S.FooterColumn>
              <S.FooterBrand>
                <S.BrandMark>TM</S.BrandMark>
                <S.FooterBrandText>
                  <strong>{profile.name}</strong>
                  <span>{profile.role}</span>
                </S.FooterBrandText>
              </S.FooterBrand>
              <S.FooterText>
                Data engineering portfolio focused on Azure, ETL pipelines, data warehousing, SQL analytics, BI, and
                practical ML applications.
              </S.FooterText>
            </S.FooterColumn>

            <S.FooterColumn>
              <S.FooterHeading>Quick Links</S.FooterHeading>
              <S.FooterLinkList>
                {navLinks.slice(1).map((link) => (
                  <S.FooterLinkItem key={link.id}>
                    <S.FooterLink href={`#${link.id}`}>{link.label}</S.FooterLink>
                  </S.FooterLinkItem>
                ))}
              </S.FooterLinkList>
            </S.FooterColumn>

            <S.FooterColumn>
              <S.FooterHeading>Contact</S.FooterHeading>
              <S.FooterLinkList>
                <S.FooterLinkItem>
                  <S.FooterLink href={`mailto:${profile.email}`}>{profile.email}</S.FooterLink>
                </S.FooterLinkItem>
                <S.FooterLinkItem>
                  <S.FooterLink href={profile.portfolioUrl} target="_blank" rel="noreferrer">
                    Portfolio
                  </S.FooterLink>
                </S.FooterLinkItem>
                <S.FooterLinkItem>
                  <S.FooterMuted>{profile.location}</S.FooterMuted>
                </S.FooterLinkItem>
              </S.FooterLinkList>
            </S.FooterColumn>

            <S.FooterColumn>
              <S.FooterHeading>Social</S.FooterHeading>
              <S.SocialRow>
                {profile.socialLinks.map((social) => {
                  const Icon = iconMap[social.icon] || ExternalLink;

                  return (
                    <S.SocialIconLink
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </S.SocialIconLink>
                  );
                })}
              </S.SocialRow>
              <S.FooterLinkList>
                {profile.socialLinks.map((social) => (
                  <S.FooterLinkItem key={social.label}>
                    <S.FooterLink
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {social.shortLabel}
                    </S.FooterLink>
                  </S.FooterLinkItem>
                ))}
              </S.FooterLinkList>
            </S.FooterColumn>
          </S.FooterGrid>

          <S.FooterBottom>
            <S.FooterMuted>
              (c) {currentYear} {profile.fullName}. All rights reserved.
            </S.FooterMuted>
            <S.FooterMuted>Built with React, styled-components, and a project-first portfolio structure.</S.FooterMuted>
          </S.FooterBottom>
        </S.Footer>

        <S.BackToTopButton
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          $visible={isBackToTopVisible}
          aria-label="Back to top"
        >
          <S.UpIcon size={18} />
        </S.BackToTopButton>

        <Lightbox
          items={featuredProjects}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={showNextLightboxImage}
          onPrevious={showPreviousLightboxImage}
        />
      </S.SiteShell>
    </ThemeProvider>
  );
}

export default App;
