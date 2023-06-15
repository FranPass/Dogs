import style from "./Pagination.module.css";

export default function Pagination({
    numOfDogs,
    currentPage,
    setCurrentPage,
    dogsPerPage,
}) {
    const amountOfPages = Math.ceil(numOfDogs / dogsPerPage);
    const pageNums = [];
    for (let i = 1; i <= amountOfPages; i++) {
        pageNums.push(i);
    }

    const previous = () => {
        setCurrentPage(currentPage - 1);
    };

    const next = () => {
        setCurrentPage(currentPage + 1);
    };

    const specificPage = (n) => {
        setCurrentPage(n);
    };

    return (
        <nav className={style.pagination} >
            <li>
            <button onClick={previous} disabled={currentPage === 1}>
                {"🢀"}
            </button>
                {pageNums.map((num) => (
                    <button
                        className={`button ${
                            currentPage === num ? "current" : ""
                        }`}
                        onClick={() => specificPage(num)}
                        key={num}
                    >
                        {num}
                    </button>
                ))}
            <button onClick={next} disabled={currentPage === amountOfPages}>
                {"🢂"}
            </button>
            </li>
        </nav>
    );
}
