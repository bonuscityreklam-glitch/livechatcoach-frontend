export const metadata = {
  title: "LiveChatCoach",
  description: "AI Powered Live Chat Coach"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
