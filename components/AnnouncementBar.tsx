import { CSSProperties, FC } from 'react';
import { getTextColor } from '@utils/colors';
import { ThemedSSComponent } from '../types';
import Container from './Container';

const AnnouncementBar: FC<ThemedSSComponent> = ({ theme }) => {
  const textColor = getTextColor(theme.accentColor);

  return (
    <section
      className="w-full text-center py-4 px-8 bg-ww-accent text-ww-contrast-text"
      style={{ '--ww-contrast-text-color': textColor } as CSSProperties}
    >
      <Container>
        <p className="text-sm">GCSE & A-Level Exam Centre</p>
      </Container>
    </section>
  );
};

export default AnnouncementBar;
