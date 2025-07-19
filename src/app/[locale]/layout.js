import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { Providers } from '@/components/Providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

async function getMessages(locale) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params }) {
  const { locale } = await params; // Ajout d'await ici
  return {
    title: 'UGate',
    description: 'Votre application UGate',
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params; // Ajout d'await ici
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}