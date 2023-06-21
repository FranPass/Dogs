import style from "./Pagination.module.css";
import { nextPage, previousPage, setCurrentPage } from "../../redux/actions";
import { useDispatch, useSelector} from 'react-redux'

export default function Pagination ({ numOfDogs, dogsPerPage, }) {
    const currentPage = useSelector((state) => state.currentPage)
    const dispatch = useDispatch();
    const amountOfPages = Math.ceil(numOfDogs / dogsPerPage);
    const pageNums = [];
    for (let i = 1; i <= amountOfPages; i++) {
        pageNums.push(i);
    }

    const previous = () => {
        dispatch(previousPage())
    };
    const next = () => {
        dispatch(nextPage())
    };
    const specificPage = (event) => {
        dispatch(setCurrentPage(Number(event.target.value)))
    }

    return (
        <nav className={style.pagination}>
            <li>
                <button className={style.arrow} onClick={previous} disabled={currentPage === 1}>
                    {"<"}
                </button>
                {pageNums.map((num) => (
                    <button
                        className={`button ${
                            currentPage === num ? "current" : ""
                        }`}
                        onClick={specificPage}
                        key={num}
                        value={num}
                    >
                        {num}
                    </button>
                ))}
                <button className={style.arrow} onClick={next} disabled={currentPage === amountOfPages}>
                    {">"}
                </button>
            </li>
        </nav>
    );
}