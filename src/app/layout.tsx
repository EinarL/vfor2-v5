import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import styles from "../public/global.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        <main className={`${styles.main}`}>
          {children}
        </main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
      <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></Script>
    </html>
  );
}
