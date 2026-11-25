import Container from '@components/Container';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <Container variant="lg" className="py-24 text-center">
      <h1 className="text-3xl font-semibold mb-4">Page not found</h1>
      <p className="mb-8">Sorry, that page does not exist.</p>
      <Link href="/" className="underline text-ww-accent">
        Back to the homepage
      </Link>
    </Container>
  );
};

export default NotFoundPage;
