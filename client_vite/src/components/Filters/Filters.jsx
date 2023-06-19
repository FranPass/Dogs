import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByTemperaments, setAllTemperaments } from "../../redux/actions.js";

export default function Filters () {  
    const dispatch = useDispatch();
    const allTemperaments = useSelector((state) => state.allTemperaments)

    useEffect(() => {
        dispatch(setAllTemperaments());
    }, [dispatch])
            
    const handleFilter = (event) => {
        dispatch(filterByTemperaments(event.target.value))
    }
    return (
        <div>
            <select onChange={handleFilter}>
                <option value='all'>All dogs</option>
                {allTemperaments.map(temp => {
                    return (
                        <option value={temp.name} key={temp.id}>
                            {temp.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}