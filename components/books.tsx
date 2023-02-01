"use client";

import Link from "next/link";
import Image from "next/image";

export const Books = () => {
  const defaultStyle =
    "w-full text-center col-span-1 flex flex-col justify-center items-center m-2 p-2 w-18 h-18 rounded hover:bg-neutral-900";

  const allBooks = [
    {
      title: "Software Engineering at Google",
      subtitle: "Lessons Learned from Programming Over Time",
      authors: "Titus Winters, Tom Manshreck, and Hyrum Wright",
      publisher: "OReilly",
      cover: "/images/software-engineering-at-google.jpg",
    },
    {
      title: "Designing Machine Learning Systems",
      subtitle: "An Iterative Process for Production-Ready Applications",
      authors: "Chip Huyen",
      publisher: "OReilly",
      cover: "/images/designing-machine-learning-systems.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-2 ">
      {allBooks.map((book) => (
        <div key={book.title} className={defaultStyle}>
          <Image
            alt={book.title}
            src={book.cover}
            width={120}
            height={120}
            priority
          />
          <h1 className="mt-2 font-semibold text-center">{book.title}</h1>
          <p className="text-neutral-400 text-sm">{book.authors}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;
