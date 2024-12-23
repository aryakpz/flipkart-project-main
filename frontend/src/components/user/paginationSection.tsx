import React from "react";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPrevious: () => void;
    onNext: () => void;
    onPageChange: (pageNumber: number) => void;
};

export const PaginationControls: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPrevious,
    onNext,
    onPageChange,
}) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
            
    return (                                
        <div className="pages block p-6">           
            <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">                        
                    Page {currentPage} of {totalPages}
                </span>

                <div className="flex items-center">
                    <button
                        onClick={onPrevious}
                        disabled={currentPage === 1}
                        className={`prev px-4 py-2 rounded-lg ${currentPage === 1
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-blue-600 hover:text-blue-800"
                            }`}
                    >
                        Previous
                    </button>

                    <div className="flex gap-3 mx-5 overflow-auto page-count-number">
                        {pageNumbers.map((page) => (
                            <div
                                key={page}
                                onClick={() => onPageChange(page)}
                                className={`cursor-pointer flex items-center justify-center rounded-full w-8 h-8 border ${currentPage === page
                                    ? "active bg-blue-600 text-white "
                                    : "text-gray-800 hover:bg-gray-200"}`}
                            >
                                {page}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={onNext}
                        disabled={currentPage === totalPages}
                        className={`next px-4 py-2 rounded-lg ${currentPage === totalPages
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-blue-600 hover:text-blue-800"
                            }`}
                    >
                        Next
                    </button>
                </div>
                <div></div>
            </div>
        </div>
    );
};

