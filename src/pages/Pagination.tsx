import { Dispatch, SetStateAction } from "react";

const Pagination = ({
  pageIndex,
  setPageIndex,
  lastPageIndex,
}: {
  pageIndex: number;
  setPageIndex: Dispatch<SetStateAction<number>>;
  lastPageIndex: number;
}) => {
  return (
    <div className="flex gap-3 mt-8">
      <button
        className="px-3 py-1 pb-[6px] text-sm text-white rounded-lg disabled:text-slate-400 disabled:bg-white bg-slate-700"
        onClick={() => setPageIndex(pageIndex - 1)}
        disabled={pageIndex === 0}
      >
        Prev
      </button>
      <button
        className="px-3 py-1 pb-[6px] text-sm text-white rounded-lg disabled:text-slate-400 disabled:bg-white bg-slate-700"
        onClick={() => setPageIndex(pageIndex + 1)}
        disabled={pageIndex === lastPageIndex}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
