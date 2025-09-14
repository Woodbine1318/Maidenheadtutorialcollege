import { CSSProperties, FC } from 'react';
import { getTextColor } from '@utils/colors';
import { ContentHeader, ThemedSSComponent } from '../types';
import Container from './Container';

const AnnouncementBar: FC<ThemedSSComponent & { announcement: ContentHeader['announcement'] }> = ({
  announcement,
  theme,
}) => {
  const textColor = getTextColor(theme.accentColor);

  return (
    <section
      className="w-full text-center py-2 px-8 bg-ww-first-section-bg  text-ww-contrast-text"
      style={{ '--ww-contrast-text-color': textColor } as CSSProperties}
    >
      <Container>
        <p className="text-sm">{announcement?.content}</p>
      </Container>
    </section>
  );
};

export default AnnouncementBar;
