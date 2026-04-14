import { ArrowRight, ArrowUp, Menu, X } from 'lucide-react';
import styled, { css } from 'styled-components';

export const ArrowIcon = ArrowRight;
export const UpIcon = ArrowUp;
export const MenuIcon = Menu;
export const CloseIcon = X;

export const panelStyle = css`
  border: 1px solid var(--border);
  border-radius: 28px;
  background: rgba(20, 35, 60, 0.6);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow);
  backdrop-filter: blur(22px);
`;

export const inputStyle = css`
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text-primary);
  padding: 0.95rem 1rem;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;

  &::placeholder {
    color: rgba(168, 178, 193, 0.8);
  }

  &:focus {
    outline: none;
    border-color: rgba(74, 154, 142, 0.65);
    box-shadow: 0 0 0 4px rgba(74, 154, 142, 0.14);
  }
`;

export const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  border-radius: 999px;
  border: 1px solid transparent;
  padding: 0.95rem 1.35rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease,
    border-color 180ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const SiteShell = styled.div`
  position: relative;
`;

export const SkipLink = styled.a`
  position: absolute;
  left: 1rem;
  top: -3rem;
  z-index: 2000;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  background: var(--surface);
  color: var(--text-primary);
  border: 1px solid var(--border);

  &:focus {
    top: 1rem;
  }
`;

export const TopNav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(20px);
  background: rgba(12, 16, 20, 0.72);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: var(--nav-shadow);
`;

export const NavInner = styled.div`
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
  min-height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Brand = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  color: inherit;
  text-align: left;
`;

export const BrandMark = styled.span`
  width: 2.85rem;
  height: 2.85rem;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent) 0%, rgba(121, 183, 255, 0.95) 100%);
  color: #f4f7fb;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  letter-spacing: 0.08em;
  box-shadow: 0 14px 28px rgba(74, 154, 142, 0.28);
`;

export const BrandText = styled.span`
  display: grid;
  gap: 0.18rem;

  strong {
    font-family: 'Poppins', sans-serif;
    font-size: 0.98rem;
    letter-spacing: 0.01em;
  }

  span {
    color: var(--text-muted);
    font-size: 0.88rem;
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  @media (max-width: 1040px) {
    display: none;
  }
`;

export const NavLinkButton = styled.button`
  border: 0;
  border-radius: 999px;
  background: ${({ $active }) => ($active ? 'rgba(74, 154, 142, 0.16)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'var(--text-primary)' : 'var(--text-muted)')};
  padding: 0.7rem 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 180ms ease,
    color 180ms ease,
    transform 180ms ease;

  &:hover {
    color: var(--text-primary);
    transform: translateY(-1px);
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ThemeToggle = styled.button`
  width: 2.85rem;
  height: 2.85rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  transition:
    transform 180ms ease,
    background 180ms ease,
    border-color 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(74, 154, 142, 0.6);
    background: rgba(74, 154, 142, 0.1);
  }
`;

export const MobileMenuButton = styled(ThemeToggle)`
  display: none;

  @media (max-width: 1040px) {
    display: inline-flex;
  }
`;

export const MobileNavPanel = styled.nav`
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
  display: none;
  padding-bottom: ${({ $open }) => ($open ? '1rem' : '0')};
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  max-height: ${({ $open }) => ($open ? '420px' : '0')};
  overflow: hidden;
  transition:
    opacity 180ms ease,
    max-height 180ms ease,
    padding-bottom 180ms ease;

  @media (max-width: 1040px) {
    display: grid;
  }

  @media (max-width: 520px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const MobileNavLinkButton = styled.button`
  ${panelStyle};
  border-radius: 18px;
  padding: 1rem 1.1rem;
  text-align: left;
  cursor: pointer;
  color: ${({ $active }) => ($active ? 'var(--text-primary)' : 'var(--text-muted)')};
  background: ${({ $active }) =>
    $active
      ? 'linear-gradient(180deg, rgba(74, 154, 142, 0.16), rgba(25, 32, 40, 0.86))'
      : 'linear-gradient(180deg, rgba(25, 32, 40, 0.86), rgba(25, 32, 40, 0.72))'};
`;

export const Main = styled.main`
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
`;

export const HeroSection = styled.section`
  padding: 8.8rem 0 4.5rem;
`;

export const HeroLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 980px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const HeroContent = styled.div`
  position: relative;
`;

export const Eyebrow = styled.p`
  margin: 0 0 1rem;
  color: var(--accent-strong);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.78rem;
  font-weight: 800;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  max-width: 12ch;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.7rem, 5vw, 4.9rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
`;

export const HeroDescription = styled.p`
  margin: 1.45rem 0 0;
  max-width: 64ch;
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.9;
`;

export const TagRow = styled.div`
  margin-top: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.72rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-secondary);
  font-size: 0.95rem;
`;

export const ActionRow = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.95rem;
`;

export const PrimaryButton = styled.button`
  ${buttonBase};
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%);
  color: #f4f7fb;
  box-shadow: 0 20px 32px rgba(74, 154, 142, 0.24);
`;

export const SecondaryButton = styled.button`
  ${buttonBase};
  border-color: var(--border);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-primary);
`;

export const BulletList = styled.div`
  margin-top: 1.8rem;
  display: grid;
  gap: 0.75rem;
`;

export const BulletItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--text-secondary);

  svg {
    color: var(--accent-strong);
    flex-shrink: 0;
  }
`;

export const StatsGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const StatCard = styled.div`
  ${panelStyle};
  padding: 1.1rem 1.15rem;

  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: var(--accent);
    box-shadow: 0 10px 30px rgba(74, 154, 142, 0.2);
  }
`;
export const StatTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 1.02rem;
  font-weight: 700;
  transition: 0.3s ease;

  ${StatCard}:hover & {
    color: var(--accent-strong);
  }
`;

export const StatDescription = styled.p`
  margin: 0.45rem 0 0;
  color: var(--text-muted);
  line-height: 1.75;
  font-size: 0.95rem;
`;

export const HeroVisual = styled.div`
  position: relative;
  min-height: 540px;
  display: grid;
  place-items: center;

  @media (max-width: 980px) {
    min-height: 480px;
  }
`;

export const VisualGlow = styled.div`
  position: absolute;
  inset: 10% 8%;
  border-radius: 44px;
  background: var(--hero-overlay);
  filter: blur(18px);
`;

export const VisualPanel = styled.div`
  ${panelStyle};
  position: relative;
  width: min(520px, 100%);
  padding: 1.4rem;
  background:
    linear-gradient(180deg, rgba(25, 32, 40, 0.92), rgba(15, 20, 25, 0.9)),
    radial-gradient(circle at top right, rgba(74, 154, 142, 0.16), transparent 28%);
`;

export const VisualHeader = styled.div`
  margin-bottom: 1.3rem;
`;

export const VisualEyebrow = styled.p`
  margin: 0;
  color: var(--accent-strong);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  font-weight: 800;
`;

export const VisualTitle = styled.h2`
  margin: 0.55rem 0 0;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.45rem, 1.25rem + 0.8vw, 2rem);
  line-height: 1.2;
`;

export const VisualPipeline = styled.div`
  display: grid;
  gap: 0.95rem;
`;

export const PipelineStage = styled.div`
  padding: 1rem 1rem 1.05rem;
  border-radius: 22px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.04);
`;

export const StageLabel = styled.span`
  display: inline-flex;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-strong);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const StageTitle = styled.h3`
  margin: 0.8rem 0 0.45rem;
  font-size: 1.05rem;
  font-family: 'Poppins', sans-serif;
`;

export const StageDescription = styled.p`
  margin: 0;
  color: var(--text-muted);
  line-height: 1.8;
`;

export const PipelineConnector = styled.div`
  width: 2px;
  height: 1rem;
  margin: 0 auto;
  background: linear-gradient(180deg, var(--accent) 0%, rgba(255, 255, 255, 0) 100%);
`;

export const VisualFooter = styled.div`
  margin-top: 1.2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 580px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const VisualMiniCard = styled.div`
  padding: 0.9rem;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--text-secondary);

  svg {
    color: var(--accent-strong);
    flex-shrink: 0;
  }
`;

export const FloatingPill = styled.div`
  position: absolute;
  ${({ $top }) => ($top ? `top: ${$top};` : '')}
  ${({ $right }) => ($right ? `right: ${$right};` : '')}
  ${({ $bottom }) => ($bottom ? `bottom: ${$bottom};` : '')}
  ${({ $left }) => ($left ? `left: ${$left};` : '')}
  padding: 0.8rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  background: rgba(12, 16, 20, 0.9);
  color: var(--text-secondary);
  box-shadow: 0 14px 32px rgba(6, 10, 14, 0.22);

  @media (max-width: 980px) {
    font-size: 0.9rem;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const Section = styled.section`
  padding: 2.6rem 0 4rem;
`;

export const SectionHeader = styled.div`
  max-width: 760px;
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.9rem, 1.55rem + 1vw, 3rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
`;

export const SectionDescription = styled.p`
  margin: 1rem 0 0;
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.85;
`;

export const SectionBody = styled.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.95;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 1.4rem;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const AboutCopy = styled.div`
  ${panelStyle};
  padding: 1.65rem;
  display: grid;
  gap: 1.2rem;

  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: var(--accent);
    box-shadow: 0 10px 30px rgba(74, 154, 142, 0.2);
  }
`;

export const HighlightPanel = styled.div`
  display: grid;
  gap: 1rem;
`;

export const HighlightCard = styled.div`
  ${panelStyle};
  padding: 1.35rem;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: var(--accent);
    box-shadow: 0 10px 30px rgba(74, 154, 142, 0.2);
  }
`;

export const HighlightTitle = styled.h3`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 1.08rem;
`;

export const HighlightText = styled.p`
  margin: 0.6rem 0 0;
  color: var(--text-muted);
  line-height: 1.8;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns || 'repeat(3, minmax(0, 1fr))'};
  gap: 1rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const SkillCard = styled.article`
  ${panelStyle};
  padding: 1.45rem;
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  height: 100%;

  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: var(--accent);
    box-shadow: 0 10px 30px rgba(74, 154, 142, 0.2);
  }
`;

export const SkillIconWrap = styled.div`
  width: 3rem;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: var(--accent-soft);
  color: var(--accent-strong);
  transition: 0.3s ease;

  ${SkillCard}:hover & {
    transform: scale(1.08);
    background: rgba(74, 154, 142, 0.2);
  }
`;

export const SkillTitle = styled.h3`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
`;

export const SkillDescription = styled.p`
  margin: 0;
  color: var(--text-muted);
  line-height: 1.8;
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
`;

export const SkillListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  color: var(--text-secondary);
`;

export const ChevronDot = styled.span`
  width: 0.55rem;
  height: 0.55rem;
  margin-top: 0.45rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent) 0%, var(--highlight) 100%);
  flex-shrink: 0;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ProjectCard = styled.article`
  ${panelStyle};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ProjectImageWrap = styled.div`
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
`;

export const ProjectImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  transition: transform 320ms ease;

  ${ProjectCard}:hover & {
    transform: scale(1.03);
  }
`;

export const ProjectBadge = styled.span`
  position: absolute;
  left: 1rem;
  top: 1rem;
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: rgba(12, 16, 20, 0.86);
  color: #f4f7fb;
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const ProjectBody = styled.div`
  padding: 1.35rem;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 1.18rem;
`;

export const ProjectSummary = styled.p`
  margin: 0.8rem 0 0;
  color: var(--text-secondary);
  line-height: 1.85;
`;

export const ProjectOutcome = styled.p`
  margin: 0.8rem 0 0;
  color: var(--accent-strong);
  line-height: 1.8;
  font-weight: 600;
`;

export const ProjectHighlights = styled.div`
  margin-top: 1rem;
  display: grid;
  gap: 0.65rem;
`;

export const ProjectHighlight = styled.div`
  display: flex;
  gap: 0.65rem;
  color: var(--text-muted);
  line-height: 1.7;

  svg {
    margin-top: 0.1rem;
    color: var(--accent-strong);
    flex-shrink: 0;
  }
`;

export const ProjectTags = styled.div`
  margin-top: 1.15rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
`;

export const ProjectTag = styled.span`
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 0.88rem;
`;

export const ProjectActions = styled.div`
  margin-top: auto;
  padding-top: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const InlineActionButton = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  color: var(--accent-strong);
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  cursor: pointer;
`;

export const TextAction = styled.a`
  color: var(--text-muted);
  font-weight: 600;

  &:hover {
    color: var(--text-primary);
  }
`;

export const PipelineCard = styled.article`
  ${panelStyle};
  padding: 1.45rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PipelineTitle = styled.h3`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 1.14rem;
`;

export const PipelineFlow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr);
  gap: 0.6rem;
  align-items: stretch;

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const FlowCard = styled.div`
  border-radius: 20px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem;
`;

export const FlowLabel = styled.span`
  color: var(--accent-strong);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const FlowText = styled.p`
  margin: 0.55rem 0 0;
  color: var(--text-secondary);
  line-height: 1.8;
`;

export const FlowArrow = styled.span`
  align-self: center;
  color: var(--accent-strong);
  font-size: 1.35rem;
  font-weight: 800;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const DashboardCard = styled.article`
  ${panelStyle};
  padding: 1.45rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

export const DashboardIconWrap = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(74, 154, 142, 0.16), rgba(121, 183, 255, 0.12));
  color: var(--accent-strong);
`;

export const DashboardTitle = styled.h3`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 1.12rem;
`;

export const DashboardDescription = styled.p`
  margin: 0;
  color: var(--text-muted);
  line-height: 1.85;
`;

export const SignalList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.65rem;
`;

export const SignalItem = styled.li`
  padding: 0.8rem 0.9rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-secondary);
`;

export const ToolCard = styled.article`
  ${panelStyle};
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

export const ToolTitle = styled.h3`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 1.05rem;
`;

export const PillWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
`;

export const ToolPill = styled.span`
  padding: 0.58rem 0.82rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

export const Timeline = styled.div`
  position: relative;
  display: grid;
  gap: 1.1rem;

  &::before {
    content: '';
    position: absolute;
    left: 12.2rem;
    top: 0.75rem;
    bottom: 0.75rem;
    width: 1px;
    background: linear-gradient(180deg, rgba(74, 154, 142, 0.48), rgba(74, 154, 142, 0.02));
  }

  @media (max-width: 820px) {
    &::before {
      left: 0.95rem;
    }
  }
`;

export const TimelineItem = styled.article`
  ${panelStyle};
  position: relative;
  display: grid;
  grid-template-columns: 11rem minmax(0, 1fr);
  gap: 2rem;
  padding: 1.35rem 1.4rem 1.35rem 1.65rem;

  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: var(--accent);
    box-shadow: 0 10px 30px rgba(74, 154, 142, 0.2);
  }

  @media (max-width: 820px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.85rem;
    padding-left: 2.8rem;
  }
`;

export const TimelineMarker = styled.span`
  position: absolute;
  left: 11.55rem;
  top: 1.55rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent) 0%, var(--highlight) 100%);
  box-shadow: 0 0 0 8px rgba(74, 154, 142, 0.12);

  @media (max-width: 820px) {
    left: 0.3rem;
  }
`;

export const TimelineMeta = styled.div`
  display: grid;
  gap: 0.35rem;
`;

export const TimelinePeriod = styled.span`
  color: var(--accent-strong);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const TimelineContext = styled.span`
  color: var(--text-muted);
  line-height: 1.75;
`;

export const TimelineContent = styled.div`
  display: grid;
  gap: 0.8rem;
`;

export const TimelineRole = styled.h3`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 1.16rem;
`;

export const TimelineSummary = styled.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.85;
`;

export const CertificationCard = styled.article`
  ${panelStyle};
  padding: 1.45rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  height: 100%;

  /* 🔥 الجديد */
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    border-color: var(--accent);
    box-shadow: 0 10px 30px rgba(74, 154, 142, 0.2);
  }
`;

export const CertificationIconWrap = styled.div`
  width: 3.1rem;
  height: 3.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: rgba(74, 154, 142, 0.12);
  color: var(--accent-strong);
`;

export const CertificationIssuer = styled.span`
  color: var(--accent-strong);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.74rem;
  font-weight: 800;
`;

export const CertificationTitle = styled.h3`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 1.08rem;
`;

export const CertificationText = styled.p`
  margin: 0;
  color: var(--text-muted);
  line-height: 1.85;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ContactIntroCard = styled.div`
  ${panelStyle};
  padding: 1.55rem;
  display: grid;
  gap: 1rem;
`;

export const ContactTitle = styled.h3`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
`;

export const ContactText = styled.p`
  margin: 0;
  color: var(--text-muted);
  line-height: 1.9;
`;

export const ContactCardGrid = styled.div`
  display: grid;
  gap: 0.85rem;
`;

export const ContactInfoCard = styled.a`
  border-radius: 20px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(74, 154, 142, 0.58);
    background: rgba(74, 154, 142, 0.08);
  }
`;

export const ContactInfoIcon = styled.span`
  width: 2.9rem;
  height: 2.9rem;
  border-radius: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-soft);
  color: var(--accent-strong);
  flex-shrink: 0;
`;

export const ContactInfoMeta = styled.span`
  display: grid;
  gap: 0.2rem;

  span {
    color: var(--text-muted);
    font-size: 0.88rem;
  }

  strong {
    color: var(--text-primary);
    line-height: 1.5;
  }
`;

export const ContactFormCard = styled.div`
  ${panelStyle};
  padding: 1.55rem;
`;

export const ContactForm = styled.form`
  display: grid;
  gap: 1rem;
`;

export const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Field = styled.div`
  display: grid;
  gap: 0.55rem;
`;

export const FieldLabel = styled.label`
  color: var(--text-secondary);
  font-weight: 600;
`;

export const FieldInput = styled.input`
  ${inputStyle};
`;

export const FieldTextarea = styled.textarea`
  ${inputStyle};
  resize: vertical;
  min-height: 164px;
`;

export const FormStatusMessage = styled.p`
  margin: 0;
  padding: 0.95rem 1rem;
  border-radius: 16px;
  border: 1px solid
    ${({ $type }) => ($type === 'error' ? 'rgba(255, 126, 126, 0.38)' : 'rgba(74, 154, 142, 0.32)')};
  background: ${({ $type }) =>
    $type === 'error' ? 'rgba(255, 126, 126, 0.1)' : 'rgba(74, 154, 142, 0.1)'};
  color: ${({ $type }) => ($type === 'error' ? '#ffc4c4' : 'var(--text-secondary)')};
  line-height: 1.7;
`;

export const Footer = styled.footer`
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 2rem 0 3rem;
`;

export const FooterGrid = styled.div`
  ${panelStyle};
  padding: 1.6rem;
  display: grid;
  grid-template-columns: 1.25fr 0.8fr 0.8fr 0.95fr;
  gap: 1.4rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const FooterColumn = styled.div`
  display: grid;
  align-content: start;
  gap: 0.9rem;
`;

export const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
`;

export const FooterBrandText = styled.div`
  display: grid;
  gap: 0.2rem;

  strong {
    font-family: 'Poppins', sans-serif;
  }

  span {
    color: var(--text-muted);
    line-height: 1.6;
  }
`;

export const FooterHeading = styled.h3`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
`;

export const FooterText = styled.p`
  margin: 0;
  color: var(--text-muted);
  line-height: 1.85;
`;

export const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.65rem;
`;

export const FooterLinkItem = styled.li`
  color: var(--text-muted);
`;

export const FooterLink = styled.a`
  color: inherit;

  &:hover {
    color: var(--text-primary);
  }
`;

export const FooterMuted = styled.p`
  margin: 0;
  color: var(--text-muted);
  line-height: 1.75;
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;
`;

export const SocialIconLink = styled.a`
  width: 2.9rem;
  height: 2.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-secondary);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(74, 154, 142, 0.58);
    background: rgba(74, 154, 142, 0.08);
  }
`;

export const FooterBottom = styled.div`
  padding-top: 1.15rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const BackToTopButton = styled.button`
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 900;
  width: 3.15rem;
  height: 3.15rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(12, 16, 20, 0.92);
  box-shadow: 0 20px 32px rgba(6, 10, 14, 0.25);
  cursor: pointer;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '16px')});
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;

  &:hover {
    border-color: rgba(74, 154, 142, 0.58);
    background: rgba(74, 154, 142, 0.12);
  }
    
`;

export const ProfileBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
`;

export const ProfileImage = styled.img`
  width: 240px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid var(--border-strong);
`;

export const ProfileNameBlock = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1rem;
    color: var(--text-primary);
  }

  span {
    font-size: 0.85rem;
    color: var(--text-muted);
  }
`;
export const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4.5rem;
  width: 500%;
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h2 {
    font-size: 4.5rem;
    font-weight: 2000;
    margin: 0;
    color: var(--text-primary);
    line-height: 1.1;
  }

  span {
    font-size: 1.2rem;
    color: var(--text-muted);
    opacity: 0.9;
    line-height: 1.4;
  }
`;