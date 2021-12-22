import type { DescriptiveThrownResponse } from './utils/throw-response';
import type { MetaFunction } from 'remix';
import { useCatch, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import TheHeader from './components/the-header';
import TheFooter from './components/the-footer';
import fontAwesomeStyles from './styles/font-awesome.css';
import styles from './styles/build/index.css';

export const meta: MetaFunction = () => {
  const title = 'Remix Starter';
  const description = 'A basic website description.';

  return {
    title,
    description,
    'og:site_name': title,
    'og:title': title,
    'og:description': description,
    'og:type': 'website'
    // 'og:image': 'https://image.com/foobar.jpg'
  };
};

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: fontAwesomeStyles },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' }
  ];
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <link rel="icon" href="/favicon.ico" sizes="any"></link>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>

        <Meta />
        <Links />
      </head>

      <body>
        <div className="wrapper">
          <div className="wrapper__content">
            <TheHeader />

            {children}

            <ScrollRestoration />
            <Scripts />
            {process.env.NODE_ENV === 'development' && <LiveReload />}
          </div>

          <TheFooter />
        </div>
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch<DescriptiveThrownResponse>();

  return (
    <Document>
      <div className="layout layout--vertical-align">
        <div className="container center">
          <div className="group">
            <span className="icon icon--block icon--large fa-exclamation-triangle color-danger"></span>

            <h1 className="title title--2">
              {caught.status}: {caught.data.message}
            </h1>

            {caught.data.details ? <p className="bigger">{caught.data.details}</p> : null}
          </div>

          <hr />

          <a href="/" className="button">
            Go Home
          </a>
        </div>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <div className="layout layout--vertical-align">
        <div className="container center">
          <div className="goup">
            <span className="icon icon--block icon--large fa-exclamation-triangle color-danger"></span>
            <h1 className="title title--2">Oops! An error occurred.</h1>
            <p className="bigger">{error.message}</p>
          </div>

          <hr />

          <a href="/" className="button">
            Go Home
          </a>
        </div>
      </div>
    </Document>
  );
}
