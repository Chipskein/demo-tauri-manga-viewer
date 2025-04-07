import { useState } from "react";

const mangaPages = [
  "https://img.spoilerhat.com/img/?url=https://www.frieren.online/wp-content/uploads/WP-manga/data/manga_61f2e53b15d4c/e47bd16a2b789317856b6026ead591cb/sousou_no_frieren_110d_1.jpg",
  "https://img.spoilerhat.com/img/?url=https://www.frieren.online/wp-content/uploads/WP-manga/data/manga_61f2e53b15d4c/e47bd16a2b789317856b6026ead591cb/sousou_no_frieren_110d_2.jpg",
  "https://img.spoilerhat.com/img/?url=https://www.frieren.online/wp-content/uploads/WP-manga/data/manga_61f2e53b15d4c/e47bd16a2b789317856b6026ead591cb/sousou_no_frieren_110d_3.jpg",
];

export default function MangaViewer() {
  const [pageIndex, setPageIndex] = useState(0);

  const nextPage = () => {
    setPageIndex((prev) => Math.min(prev + 1, mangaPages.length - 1));
  };

  const prevPage = () => {
    setPageIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="flex items-center justify-center h-full bg-gray-100 text-white p-4">
      <div className="flex flex-col justify-center items-center w-full max-w-3xl space-y-6">
        <div className="flex justify-between items-center mt-4 space-x-4">
            <button
              onClick={prevPage}
              disabled={pageIndex === 0}
              className="px-4 py-2 bg-blue-700 rounded hover:bg-white hover:text-black disabled:opacity-30"
            >
              Previous
            </button>
            <span className="text-sm text-black">
              Page {pageIndex + 1} / {mangaPages.length}
            </span>
            <button
              onClick={nextPage}
              disabled={pageIndex === mangaPages.length - 1}
              className="px-4 py-2 bg-blue-700 rounded hover:bg-white hover:text-black disabled:opacity-30"
            >
              Next
            </button>
        </div>
        <img
          src={mangaPages[pageIndex]}
          alt={`Page ${pageIndex + 1}`}
          className="w-full object-contain rounded shadow-xl"
        />
      </div>
    </div>
  );
}
