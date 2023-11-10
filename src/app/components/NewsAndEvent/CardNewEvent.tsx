import Image from 'next/image';
import Link from 'next/link';

export interface BlogContent {
  id?: number;
  page_code?: string;
  lang_code?: string;
  thumbnail_img?: string;
  tag?: string;
  title?: string;
  content?: string;
  createdAt?: Date;
}


export default function CardNewEvent({ data }: { data: BlogContent[] }) {
  return (
    <>
 

    </>
  );
}
