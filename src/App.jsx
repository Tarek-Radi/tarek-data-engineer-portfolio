import {
  startTransition,
  useDeferredValue,
  useEffect,
  useEffectEvent,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Activity,
  Award,
  BarChart3,
  CheckCircle2,
  Cloud,
  Database,
  ExternalLink,
  Github,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  MoonStar,
  ShieldCheck,
  Sparkles,
  SunMedium,
  TrendingUp,
  Workflow,
} from 'lucide-react';
import Lightbox from './components/Lightbox';
import Reveal from './components/Reveal';
import {
  aboutHighlights,
  certifications,
  contactCards,
  dashboards,
  etlPipelines,
  experience,
  featuredProjects,
  navLinks,
  profile,
  skills,
  toolGroups,
} from './data/portfolioData';
import * as S from './styles/appStyles';
import { GlobalStyle, themes } from './styles/theme';

const THEME_STORAGE_KEY = 'tarek-portfolio-theme';

const iconMap = {
  Activity,
  BarChart3,
  Cloud,
  Database,
  Github,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
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
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    type: 'idle',
    message: '',
  });

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

  const handleFormChange = ({ target: { name, value } }) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formValues.name.trim() || !formValues.email.trim() || !formValues.message.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Please add your name, email, and a short project summary so I can respond well.',
      });
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${formValues.name}${formValues.company ? ` | ${formValues.company}` : ''}`,
    );
    const body = encodeURIComponent(
      `Name: ${formValues.name}\nEmail: ${formValues.email}\nCompany: ${formValues.company || 'Not provided'
      }\n\nProject details:\n${formValues.message}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFormStatus({
      type: 'success',
      message: `Your email app should open with a prepared draft. If it does not, write directly to ${profile.email}.`,
    });
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
                  key={link.id}
                  type="button"
                  onClick={() => handleNavLinkClick(link.id)}
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
                key={link.id}
                type="button"
                onClick={() => handleNavLinkClick(link.id)}
                $active={activeNavId === link.id}
              >
                {link.label}
              </S.MobileNavLinkButton>
            ))}
          </S.MobileNavPanel>
        </S.TopNav>
        <S.Main id="content">
          <S.HeroSection id="hero">
            <S.HeroLayout>
              <Reveal>
                <S.HeroContent>
                  <S.ProfileRow>
                    <S.ProfileImage src="/images/tarek.png" alt="Tarek Mahmoud Abdelrady" />
                    <S.ProfileText>
                      <h2>Tarek Mahmoud Abdelrady</h2>
                      <span>Azure Data Engineer</span>
                    </S.ProfileText>
                  </S.ProfileRow>
                  <S.Eyebrow>Azure data engineering • Databricks • BI delivery</S.Eyebrow>
                  <S.HeroTitle>
                    {profile.headlineMain}
                    <span
                      style={{
                        fontSize: '0.55em',
                        opacity: 0.65,
                        display: 'block',
                        marginTop: '6px',
                      }}
                    >
                      {profile.headlineSub}
                    </span>
                  </S.HeroTitle>
                  <S.HeroDescription>{profile.about}</S.HeroDescription>

                  <S.TagRow aria-label="Core focus areas">
                    {profile.introHighlights.map((highlight) => (
                      <S.Tag key={highlight}>{highlight}</S.Tag>
                    ))}
                  </S.TagRow>

                  <S.ActionRow>
                    <S.PrimaryButton type="button" onClick={() => handleNavLinkClick('projects')}>
                      Explore Projects
                      <S.ArrowIcon size={18} />
                    </S.PrimaryButton>
                    <S.SecondaryButton type="button" onClick={() => handleNavLinkClick('contact')}>
                      Start a Conversation
                    </S.SecondaryButton>
                  </S.ActionRow>

                  <S.BulletList aria-label="Professional strengths">
                    {profile.heroBullets.map((bullet) => (
                      <S.BulletItem key={bullet}>
                        <CheckCircle2 size={18} />
                        <span>{bullet}</span>
                      </S.BulletItem>
                    ))}
                  </S.BulletList>

                  <S.StatsGrid>
                    {profile.heroStats.map((stat) => (
                      <S.StatCard key={stat.title}>
                        <S.StatTitle>{stat.title}</S.StatTitle>
                        <S.StatDescription>{stat.subtitle}</S.StatDescription>
                      </S.StatCard>
                    ))}
                  </S.StatsGrid>
                </S.HeroContent>
              </Reveal>

              <Reveal delay={120}>
                <S.HeroVisual>
                  <S.VisualGlow />
                  <S.VisualPanel>
                    <S.VisualHeader>
                      <S.VisualEyebrow>Solution Blueprint</S.VisualEyebrow>
                      <S.VisualTitle>Scalable data flow from ingestion to insight</S.VisualTitle>
                    </S.VisualHeader>

                    <S.VisualPipeline>
                      <S.PipelineStage>
                        <S.StageLabel>Ingest</S.StageLabel>
                        <S.StageTitle>Source Systems</S.StageTitle>
                        <S.StageDescription>
                          ERP, CRM, finance files, telemetry, and operational exports.
                        </S.StageDescription>
                      </S.PipelineStage>
                      <S.PipelineConnector />
                      <S.PipelineStage>
                        <S.StageLabel>Transform</S.StageLabel>
                        <S.StageTitle>ADF + Databricks</S.StageTitle>
                        <S.StageDescription>
                          Scalable parameterized pipelines with data cleansing, enrichment, and quality validation.
                        </S.StageDescription>
                      </S.PipelineStage>
                      <S.PipelineConnector />
                      <S.PipelineStage>
                        <S.StageLabel>Serve</S.StageLabel>
                        <S.StageTitle>BI-Ready Models</S.StageTitle>
                        <S.StageDescription>
                          Curated marts, semantic layers, and dashboards built for decision makers.
                        </S.StageDescription>
                      </S.PipelineStage>
                    </S.VisualPipeline>

                    <S.VisualFooter>
                      <S.VisualMiniCard>
                        <Cloud size={18} />
                        <span>Azure-first architecture</span>
                      </S.VisualMiniCard>
                      <S.VisualMiniCard>
                        <Workflow size={18} />
                        <span>Reliable ETL orchestration</span>
                      </S.VisualMiniCard>
                      <S.VisualMiniCard>
                        <LayoutDashboard size={18} />
                        <span>Executive-ready reporting</span>
                      </S.VisualMiniCard>
                    </S.VisualFooter>
                  </S.VisualPanel>




                </S.HeroVisual>
              </Reveal>
            </S.HeroLayout>
          </S.HeroSection>

          <Reveal as={S.Section} id="about">
            <S.SectionHeader>
              <S.Eyebrow>About Me</S.Eyebrow>
              <S.SectionTitle>Building scalable data platforms for analytics & ML, delivering clean, reliable data.</S.SectionTitle>
              <S.SectionDescription>
                I focus on practical cloud architecture, clean transformations, and insight-ready modeling so raw
                data becomes something business teams can actually trust and use.
              </S.SectionDescription>
            </S.SectionHeader>

            <S.AboutGrid>
              <S.AboutCopy>
                <S.SectionBody>{profile.about}</S.SectionBody>
                <S.SectionBody>
                  My approach blends engineering discipline with analytics empathy: resilient pipelines, documented
                  logic, and polished BI layers that make it easier for teams to move from raw data to confident
                  action.
                </S.SectionBody>
              </S.AboutCopy>

              <S.HighlightPanel>
                {aboutHighlights.map((highlight, index) => (
                  <Reveal key={highlight.title} delay={index * 90}>
                    <S.HighlightCard>
                      <S.HighlightTitle>{highlight.title}</S.HighlightTitle>
                      <S.HighlightText>{highlight.description}</S.HighlightText>
                    </S.HighlightCard>
                  </Reveal>
                ))}
              </S.HighlightPanel>
            </S.AboutGrid>
          </Reveal>

          <Reveal as={S.Section} id="skills">
            <S.SectionHeader>
              <S.Eyebrow>Core Expertise</S.Eyebrow>
              <S.SectionTitle>
                Capabilities built around cloud pipelines, analytics delivery, and trusted data.
              </S.SectionTitle>
              <S.SectionDescription>
                The stack is Azure-first, but the real emphasis is on clarity: reliable orchestration, scalable
                transformations, and reporting layers that business users can adopt quickly.
              </S.SectionDescription>
            </S.SectionHeader>

            <S.CardGrid>
              {skills.map((skill, index) => {
                const Icon = iconMap[skill.icon] || Sparkles;

                return (
                  <Reveal key={skill.title} delay={index * 70}>
                    <S.SkillCard>
                      <S.SkillIconWrap>
                        <Icon size={20} />
                      </S.SkillIconWrap>
                      <S.SkillTitle>{skill.title}</S.SkillTitle>
                      <S.SkillDescription>{skill.description}</S.SkillDescription>
                      <S.SkillList>
                        {skill.items.map((item) => (
                          <S.SkillListItem key={item}>
                            <S.ChevronDot />
                            <span>{item}</span>
                          </S.SkillListItem>
                        ))}
                      </S.SkillList>
                    </S.SkillCard>
                  </Reveal>
                );
              })}
            </S.CardGrid>
          </Reveal>

          <Reveal as={S.Section} id="projects">
            <S.SectionHeader>
              <S.Eyebrow>Data Engineering Projects</S.Eyebrow>
              <S.SectionTitle>
                Real-world data engineering projects focused on data warehousing, ETL pipelines, and analytics solutions.
              </S.SectionTitle>
              <S.SectionDescription>
                These showcase the kinds of solutions I enjoy building: orchestrated pipelines, governed data layers,
                and dashboards that convert technical effort into business value.
              </S.SectionDescription>
            </S.SectionHeader>

            <S.ProjectGrid>
              {featuredProjects.map((project, index) => (
                <Reveal key={project.title} delay={index * 90}>
                  <S.ProjectCard>
                    <S.ProjectImageWrap>
                      <S.ProjectImage src={project.image} alt={project.imageAlt} loading="lazy" />
                      <S.ProjectBadge>{project.category}</S.ProjectBadge>
                    </S.ProjectImageWrap>

                    <S.ProjectBody>
                      <S.ProjectTitle>{project.title}</S.ProjectTitle>
                      <S.ProjectSummary>{project.summary}</S.ProjectSummary>
                      <S.ProjectOutcome>{project.outcome}</S.ProjectOutcome>

                      <S.ProjectHighlights>
                        {project.highlights.map((highlight) => (
                          <S.ProjectHighlight key={highlight}>
                            <CheckCircle2 size={16} />
                            <span>{highlight}</span>
                          </S.ProjectHighlight>
                        ))}
                      </S.ProjectHighlights>

                      <S.ProjectTags>
                        {project.stack.map((technology) => (
                          <S.ProjectTag key={technology}>{technology}</S.ProjectTag>
                        ))}
                      </S.ProjectTags>

                      <S.ProjectActions>
                        <S.InlineActionButton type="button" onClick={() => openLightbox(index)}>
                          View Screenshot
                          <ExternalLink size={16} />
                        </S.InlineActionButton>
                        <S.TextAction href="#contact">Discuss a Similar Project</S.TextAction>
                      </S.ProjectActions>
                    </S.ProjectBody>
                  </S.ProjectCard>
                </Reveal>
              ))}
            </S.ProjectGrid>
          </Reveal>

          {/* <Reveal as={S.Section} id="dashboards">
            <S.SectionHeader>
              <S.Eyebrow>BI Dashboards</S.Eyebrow>
              <S.SectionTitle>Executive-facing reporting experiences with clear narratives and usable KPIs.</S.SectionTitle>
              <S.SectionDescription>
                Dashboard work is not just visual polish. It is about structuring metrics, interactions, and context so
                decision makers can move quickly and trust what they see.
              </S.SectionDescription>
            </S.SectionHeader>

            <S.CardGrid>
              {dashboards.map((dashboard, index) => {
                const Icon = iconMap[dashboard.icon] || BarChart3;

                return (
                  <Reveal key={dashboard.title} delay={index * 90}>
                    <S.DashboardCard>
                      <S.DashboardIconWrap>
                        <Icon size={22} />
                      </S.DashboardIconWrap>
                      <S.DashboardTitle>{dashboard.title}</S.DashboardTitle>
                      <S.DashboardDescription>{dashboard.description}</S.DashboardDescription>
                      <S.SignalList>
                        {dashboard.signals.map((signal) => (
                          <S.SignalItem key={signal}>{signal}</S.SignalItem>
                        ))}
                      </S.SignalList>
                    </S.DashboardCard>
                  </Reveal>
                );
              })}
            </S.CardGrid>
          </Reveal> */}

          <Reveal as={S.Section} id="tools">
            <S.SectionHeader>
              <S.Eyebrow>Tools &amp; Technologies</S.Eyebrow>
              <S.SectionTitle>A focused toolkit for cloud data engineering, analytics, and reporting delivery.</S.SectionTitle>
              <S.SectionDescription>
                The portfolio is centered on Azure, Databricks, SQL, Python, and Power BI, with delivery practices that
                keep solutions maintainable once they are live.
              </S.SectionDescription>
            </S.SectionHeader>

            <S.CardGrid $columns="repeat(4, minmax(0, 1fr))">
              {toolGroups.map((group, index) => (
                <Reveal key={group.title} delay={index * 70}>
                  <S.ToolCard>
                    <S.ToolTitle>{group.title}</S.ToolTitle>
                    <S.PillWrap>
                      {group.items.map((item) => (
                        <S.ToolPill key={item}>{item}</S.ToolPill>
                      ))}
                    </S.PillWrap>
                  </S.ToolCard>
                </Reveal>
              ))}
            </S.CardGrid>
          </Reveal>

          <Reveal as={S.Section} id="experience">
            <S.SectionHeader>
              <S.Eyebrow>Experience</S.Eyebrow>
              <S.SectionTitle>
                Experience across data engineering and BI delivery.
              </S.SectionTitle>
              <S.SectionDescription>
                This section highlights my practical experience across data engineering, analytics, and business-focused reporting.
              </S.SectionDescription>
            </S.SectionHeader>

            <S.Timeline>
              {experience.map((entry, index) => (
                <Reveal key={`${entry.period}-${entry.role}`} delay={index * 90}>
                  <S.TimelineItem>
                    <S.TimelineMarker />
                    <S.TimelineMeta>
                      <S.TimelinePeriod>{entry.period}</S.TimelinePeriod>
                      <S.TimelineContext>{entry.context}</S.TimelineContext>
                    </S.TimelineMeta>
                    <S.TimelineContent>
                      <S.TimelineRole>{entry.role}</S.TimelineRole>
                      <S.TimelineSummary>{entry.summary}</S.TimelineSummary>
                      <S.SignalList>
                        {entry.wins.map((win) => (
                          <S.SignalItem key={win}>{win}</S.SignalItem>
                        ))}
                      </S.SignalList>
                    </S.TimelineContent>
                  </S.TimelineItem>
                </Reveal>
              ))}
            </S.Timeline>
          </Reveal>

          <Reveal as={S.Section} id="certifications">
            <S.SectionHeader>
              <S.Eyebrow>Certifications</S.Eyebrow>

              <S.SectionTitle>
                Certifications validating my data engineering, analytics, and machine learning foundations.
              </S.SectionTitle>

              <S.SectionDescription>
                A collection of hands-on training and certifications across data engineering, Python, machine learning, and systems, reflecting practical experience in building real-world data solutions.
              </S.SectionDescription>
            </S.SectionHeader>

            <S.CardGrid>
              {certifications.map((certification, index) => (
                <Reveal key={certification.title} delay={index * 70}>
                  <S.CertificationCard>
                    <S.CertificationIconWrap>
                      <Award size={22} />
                    </S.CertificationIconWrap>

                    <S.CertificationIssuer>
                      {certification.issuer}
                    </S.CertificationIssuer>

                    <S.CertificationTitle>
                      {certification.title}
                    </S.CertificationTitle>

                    <S.CertificationText>
                      {certification.detail}
                    </S.CertificationText>
                  </S.CertificationCard>
                </Reveal>
              ))}
            </S.CardGrid>
          </Reveal>
          <Reveal as={S.Section} id="contact">
            <S.SectionHeader>
              <S.Eyebrow>Contact</S.Eyebrow>
              <S.SectionTitle>Let’s discuss data platform design, ETL automation, or BI delivery needs.</S.SectionTitle>
              <S.SectionDescription>
                If you are hiring for Azure data engineering, need help modernizing a pipeline stack, or want a cleaner
                reporting layer, this is the best place to start the conversation.
              </S.SectionDescription>
            </S.SectionHeader>

            <S.ContactGrid>
              <S.ContactIntroCard>
                <S.ContactTitle>{profile.name}</S.ContactTitle>
                <S.ContactText>{profile.availability}</S.ContactText>
                <S.ContactText>
                  Typical conversations include Azure Data Factory orchestration, Databricks transformation layers,
                  semantic modeling for Power BI, and business-facing KPI design.
                </S.ContactText>

                <S.ContactCardGrid>
                  {contactCards.map((item) => {
                    const Icon = iconMap[item.icon] || Mail;

                    return (
                      <S.ContactInfoCard
                        key={item.title}
                        href={item.href}
                        target={item.title === 'Location' ? '_blank' : undefined}
                        rel={item.title === 'Location' ? 'noreferrer' : undefined}
                      >
                        <S.ContactInfoIcon>
                          <Icon size={18} />
                        </S.ContactInfoIcon>
                        <S.ContactInfoMeta>
                          <span>{item.title}</span>
                          <strong>{item.value}</strong>
                        </S.ContactInfoMeta>
                      </S.ContactInfoCard>
                    );
                  })}
                </S.ContactCardGrid>
              </S.ContactIntroCard>

              <S.ContactFormCard>
                <S.ContactForm onSubmit={handleFormSubmit}>
                  <S.FieldGrid>
                    <S.Field>
                      <S.FieldLabel htmlFor="name">Name</S.FieldLabel>
                      <S.FieldInput
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        value={formValues.name}
                        onChange={handleFormChange}
                        required
                      />
                    </S.Field>
                    <S.Field>
                      <S.FieldLabel htmlFor="email">Email</S.FieldLabel>
                      <S.FieldInput
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="your@email.com"
                        value={formValues.email}
                        onChange={handleFormChange}
                        required
                      />
                    </S.Field>
                  </S.FieldGrid>

                  <S.Field>
                    <S.FieldLabel htmlFor="company">Company or team</S.FieldLabel>
                    <S.FieldInput
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Optional"
                      value={formValues.company}
                      onChange={handleFormChange}
                    />
                  </S.Field>

                  <S.Field>
                    <S.FieldLabel htmlFor="message">Project details</S.FieldLabel>
                    <S.FieldTextarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Tell me about the data challenge, reporting need, or cloud pipeline you want to improve."
                      value={formValues.message}
                      onChange={handleFormChange}
                      required
                    />
                  </S.Field>

                  <S.PrimaryButton type="submit">
                    Open Email Draft
                    <S.ArrowIcon size={18} />
                  </S.PrimaryButton>

                  {formStatus.type !== 'idle' ? (
                    <S.FormStatusMessage $type={formStatus.type} role="status" aria-live="polite">
                      {formStatus.message}
                    </S.FormStatusMessage>
                  ) : null}
                </S.ContactForm>
              </S.ContactFormCard>
            </S.ContactGrid>
          </Reveal>
        </S.Main>
        <S.Footer>
          <S.FooterGrid>
            <S.FooterColumn>
              <S.FooterBrand>
                <S.BrandMark>TM</S.BrandMark>
                <S.FooterBrandText>
                  <strong>{profile.name}</strong>
                  <span>{profile.headline}</span>
                </S.FooterBrandText>
              </S.FooterBrand>
              <S.FooterText>
                Azure data engineering, Databricks workflows, ETL automation, and Power BI experiences built for
                modern analytics teams.
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
                  <S.FooterLink href="https://maps.google.com/?q=Cairo,Egypt" target="_blank" rel="noreferrer">
                    {profile.location}
                  </S.FooterLink>
                </S.FooterLinkItem>
                <S.FooterLinkItem>
                  <S.FooterMuted>{profile.availability}</S.FooterMuted>
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
                      target={social.label !== 'Email' ? '_blank' : undefined}
                      rel={social.label !== 'Email' ? 'noreferrer' : undefined}
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
                      target={social.label !== 'Email' ? '_blank' : undefined}
                      rel={social.label !== 'Email' ? 'noreferrer' : undefined}
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
              (c) {currentYear} {profile.name}. All rights reserved.
            </S.FooterMuted>
            <S.FooterMuted>Built with React, styled-components, and a recruiter-first presentation.</S.FooterMuted>
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
