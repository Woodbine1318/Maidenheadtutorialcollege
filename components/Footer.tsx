import Link from 'next/link';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="pt-12 pb-6">
      <Container variant="lg" className="flex flex-col-reverse">
        <small>&copy; {new Date().getFullYear()}. Maidenhead College</small>

        <div className="mb-4">
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
