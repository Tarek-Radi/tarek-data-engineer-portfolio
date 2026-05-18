import { useEffect, useEffectEvent } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1200;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  background: rgba(6, 10, 14, 0.84);
  backdrop-filter: blur(18px);
`;

const Dialog = styled.div`
  position: relative;
  width: min(1080px, 100%);
  border: 1px solid var(--border);
  border-radius: 8px;
  background: linear-gradient(180deg, var(--surface) 0%, var(--surface-strong) 100%);
  box-shadow: var(--shadow);
  overflow: hidden;
`;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const Meta = styled.div`
  display: grid;
  gap: 0.2rem;
`;

const Label = styled.span`
  color: var(--accent-strong);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
`;

const Title = styled.h3`
  margin: 0;
  font-size: clamp(1.05rem, 1rem + 0.4vw, 1.4rem);
  font-family: 'Poppins', sans-serif;
  color: #f4f7fb;
`;

const ToolbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const IconButton = styled.button`
  width: 2.9rem;
  height: 2.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 166, 166, 0.6);
    background: rgba(0, 166, 166, 0.12);
  }
`;

const ImageWrap = styled.figure`
  margin: 0;
  position: relative;
  background: linear-gradient(180deg, rgba(15, 24, 23, 0.2), rgba(15, 24, 23, 0.65));
`;

const PreviewImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;

const Caption = styled.figcaption`
  padding: 1rem 1.25rem 1.3rem;
  color: var(--text-muted);
  line-height: 1.7;
`;

const NavArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => ($side === 'left' ? 'left: 1rem;' : 'right: 1rem;')}
  width: 3.2rem;
  height: 3.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  background: rgba(9, 13, 17, 0.75);
  cursor: pointer;
  transition:
    transform 180ms ease,
    background 180ms ease,
    border-color 180ms ease;

  &:hover {
    transform: translateY(-50%) scale(1.04);
    background: rgba(0, 166, 166, 0.16);
    border-color: rgba(0, 166, 166, 0.64);
  }
`;

function Lightbox({ items, activeIndex, onClose, onNext, onPrevious }) {
  const item = activeIndex === null ? null : items[activeIndex];

  const handleKeyDown = useEffectEvent((event) => {
    if (event.key === 'Escape') {
      onClose();
    }

    if (event.key === 'ArrowRight') {
      onNext();
    }

    if (event.key === 'ArrowLeft') {
      onPrevious();
    }
  });

  useEffect(() => {
    if (!item) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, item]);

  if (!item) {
    return null;
  }

  return createPortal(
    <Overlay onClick={(event) => event.target === event.currentTarget && onClose()}>
      <Dialog role="dialog" aria-modal="true" aria-labelledby="lightbox-title">
        <Toolbar>
          <Meta>
            <Label>{item.category}</Label>
            <Title id="lightbox-title">{item.title}</Title>
          </Meta>
          <ToolbarActions>
            <IconButton type="button" onClick={onPrevious} aria-label="View previous project image">
              <ChevronLeft size={18} />
            </IconButton>
            <IconButton type="button" onClick={onNext} aria-label="View next project image">
              <ChevronRight size={18} />
            </IconButton>
            <IconButton type="button" onClick={onClose} aria-label="Close project image lightbox">
              <X size={18} />
            </IconButton>
          </ToolbarActions>
        </Toolbar>

        <ImageWrap>
          <NavArrow
            type="button"
            $side="left"
            onClick={onPrevious}
            aria-label="Show previous project"
          >
            <ChevronLeft size={22} />
          </NavArrow>
          <PreviewImage src={item.image} alt={item.imageAlt} />
          <NavArrow type="button" $side="right" onClick={onNext} aria-label="Show next project">
            <ChevronRight size={22} />
          </NavArrow>
          <Caption>{item.lightboxCaption}</Caption>
        </ImageWrap>
      </Dialog>
    </Overlay>,
    document.body,
  );
}

export default Lightbox;
