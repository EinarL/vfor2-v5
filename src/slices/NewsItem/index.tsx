"use client";
import { Content, RichTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import styles from "../../public/news.module.scss";
import { useRouter } from 'next/navigation';

/**
 * Props for `NewsItem`.
 */
export type NewsItemProps = SliceComponentProps<Content.NewsItemSlice>;

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
};

interface Paragraph {
  text: string;
}

/**
 * Component for "NewsItem" Slices.
 */
const NewsItem = ({ slice }: NewsItemProps): JSX.Element => {
  const router = useRouter();

  const truncatedTitle = truncateText(slice.primary.title as string, 50);

  let text = "";
  slice.primary.text.forEach(element => {
    text = text.concat("\n\n",(element as Paragraph).text)
  });

  const truncatedNewsText = truncateText(text, 55);

    // Function to handle the click event with additional parameters
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      // Additional parameters
      const additionalParams = {
        title: slice.primary.title as string,
        img: slice.primary.image.url ? slice.primary.image.url : "",
        text: text,
        date: slice.primary.date as string,
        author: slice.primary.author as string
      };
      const queryString = new URLSearchParams(additionalParams).toString();
      // Navigate to the news post page with additional parameters
      router.push(`/newsPost?${queryString}`);
    };

  return (
    <section className={`${styles.news_item}`} onClick={handleClick}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h5>{truncatedTitle}</h5>
      <PrismicNextImage
				field={slice.primary.image}
				className={`${styles.news_image}`}
				/>
        <p className={`${styles.news_text}`}>
          {truncatedNewsText}
        </p>
    </section>
  );
};

export default NewsItem;
