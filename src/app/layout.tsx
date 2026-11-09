import type { Metadata, Viewport } from "next";
import { weddingDetails } from "@/content/wedding";
import "./globals.css";

const { couple, event, date, time, venue, colours, hashtag } = weddingDetails;

const title = `${couple.display} | ${event}`;
const description = `${couple.first} and ${couple.second} invite you to their ${event.toLowerCase()} on ${date.display} at ${time.display} ${time.label}, at ${venue.address}, ${venue.locality}. ${hashtag}`;

export const metadata: Metadata = {
  title,
  description,
  applicationName: `${couple.display} Wedding Invitation`,
  keywords: [
    couple.first,
    couple.second,
    event,
    venue.address,
    venue.locality,
    hashtag,
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: colours[0].hex,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GH">
      <body>{children}</body>
    </html>
  );
}
