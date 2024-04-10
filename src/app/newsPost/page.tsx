"use client";
import { PrismicNextImage } from "@prismicio/next";
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import styles from "../../public/newsPost.module.scss";
import { Suspense } from "react";

const NewsDetailsPage = () => {
  const searchParams = useSearchParams();

  return (
    <Suspense>
      <div className={`${styles.news_container}`}>
        <h1 className={`${styles.news_title}`}>{searchParams.get('title')}</h1>
        <p className={`${styles.news_author}`}>{searchParams.get('author')} skrifar</p>
        <p>{convertTimestamp(searchParams.get('date') as string)}</p>
        <Image className={`${styles.news_image}`} src={searchParams.get('img') as string} alt="news image" width={300} height={200}/>
        <p className={`${styles.news_text}`}>{searchParams.get('text')}</p>
      </div>
    </Suspense>
  );
};

export default NewsDetailsPage;


function convertTimestamp(timestamp: string): string {
  const months = [
    "janúar", "febrúar", "mars", "apríl", "maí", "júní", 
    "júlí", "ágúst", "september", "október", "nóvember", "desember"
  ];

  const date = new Date(timestamp);
  const day = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}. ${monthName}, ${year} kl. ${hours}:${minutes}`;
}