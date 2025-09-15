import getMetadata from '@lib/contentful/metadata';
import Container from './Container';

const ContactDetails = async () => {
  const metadata = await getMetadata();

  return (
    <section className='h-full'>
      <Container variant="lg" className="gap-4 py-12">
        <dl>
          <div className="flex flex-row justify-between items-center py-2 border-b border-dotted border-ww-accent">
            <dt className="font-semibold">Email</dt>

            <dd>
              <a className="flex-1 ml-8 text-right" href={`mailto:${metadata.email}`}>
                {metadata.email}
              </a>
            </dd>
          </div>

          <div className="flex flex-row justify-between items-center py-2 border-b border-dotted border-ww-accent">
            <dt className="font-semibold">Telephone</dt>

            <dd>
              <a className="flex-1 ml-8 text-right" href={`tel:${metadata.phone}`}>
                {metadata.phone}
              </a>
            </dd>
          </div>

          <div className="flex flex-row justify-between items-center py-2 border-b border-dotted border-ww-accent">
            <dt className="font-semibold">Find Us</dt>

            <dd>
              <address className="flex-1 ml-8 text-right not-italic">{metadata.address}</address>
            </dd>
          </div>

          {metadata.notes && <p className="mt-2 text-sm">{metadata.notes}</p>}
        </dl>
      </Container>
    </section>
  );
};

export default ContactDetails;
