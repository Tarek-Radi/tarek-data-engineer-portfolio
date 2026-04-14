import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const RevealContainer = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translate3d(0, ${({ $visible }) => ($visible ? '0' : '28px')}, 0);
  transition:
    opacity 720ms ease,
    transform 720ms cubic-bezier(0.2, 0.8, 0.2, 1);
  transition-delay: ${({ $delay }) => `${$delay}ms`};

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

function Reveal({ as = 'div', children, className, delay = 0, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setVisible(true);
      return undefined;
    }

    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <RevealContainer
      as={as}
      ref={ref}
      className={className}
      $visible={visible}
      $delay={delay}
      {...props}
    >
      {children}
    </RevealContainer>
  );
}

export default Reveal;
