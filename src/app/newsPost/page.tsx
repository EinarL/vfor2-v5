"use client";
import { PrismicNextImage } from "@prismicio/next";
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import styles from "../../public/newsPost.module.scss";

const NewsDetailsPage = () => {
  const searchParams = useSearchParams();

  return (
    <div className={`${styles.news_container}`}>
      <h1 className={`${styles.news_title}`}>{searchParams.get('title')}</h1>
      <Image className={`${styles.news_image}`} src={searchParams.get('img') as string} alt="news image" width={300} height={200}/>
      <p className={`${styles.news_text}`}>{searchParams.get('text')}</p>
    </div>
  );
};

export default NewsDetailsPage;


