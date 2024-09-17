export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <main>
          SIDEBAR
          {children}
        </main>
      </body>
    </html>
  );
}
