

export default function Pagination({numOfDogs, dogsPerPage, currentPage, setCurrentPage}) {

    const pageNums = [];
    for (let i = 1 ; i <= Math.ceil(numOfDogs/dogsPerPage); i++) {
        pageNums.push(i)
    }

    const previous = () => {
        setCurrentPage(currentPage - 1)
    }

    const next = () => {
        setCurrentPage(currentPage + 1)
    }

    const specificPage = (n) => {
        setCurrentPage(n)
    }

    return (
        <nav>
            <button onClick={previous}>{`<`}</button>
            {pageNums.map(num => (
                <button onClick={() => specificPage(num)} key={num}>{num}</button>
            ))}
            <button onClick={next}>{`>`}</button>
        </nav>
    )
}