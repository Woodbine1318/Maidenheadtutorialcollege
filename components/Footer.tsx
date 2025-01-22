import getNavigation from '@lib/contentful/navigation';
import Container from './Container';
import ContentLink from './ContentLink';

const Footer = async () => {
  const navigation = await getNavigation('footer');

  return (
    <footer className="pt-12 pb-6">
      <Container variant="lg" className="flex flex-col-reverse">
        <small>&copy; {new Date().getFullYear()}. Maidenhead College</small>

        <div className="mb-4">
          <ul className="flex flex-wrap gap-4 py-8">
            {navigation?.links.map((link) => (
              <li
                className="font-semibold border-b border-white py-2 border-opacity-20 last-of-type:border-0"
                key={link.name}
              >
                <ContentLink link={link} />
              </li>
            ))}
          </ul>

          <small>
            We are a member of the Exam Office. Please&nbsp;
            <a className="underline text-ww-accent" href="mailto:examsofficer@maidenheadcollege.co.uk">
              contact us
            </a>{' '}
            for our latest policies on exams . ISO Number: C1316879
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
