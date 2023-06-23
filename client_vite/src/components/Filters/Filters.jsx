import { useDispatch, useSelector } from "react-redux";
import { filterByTemperaments, filterByOrigin } from "../../redux/filter_actions.js";
import { orderByName, orderByWeight } from "../../redux/sort_actions.js";
import style from "./Filters.module.css";

export default function Filters() {
    const dispatch = useDispatch();
    const allTemperaments = useSelector((state) => state.allTemperaments);

    const handleTemperamentFilter = (event) => {
        dispatch(filterByTemperaments(event.target.value));
    };
    const handleOriginFilter = (event) => {
        dispatch(filterByOrigin(event.target.value));
    };
    const handleOrder = (event) => {
        dispatch(orderByName(event.target.value));
    };
    const handleWeightOrder = (event) => {
        dispatch(orderByWeight(event.target.value));
    };

    return (
        <div className={style.container}>
            <div className={style.filters}>
                <select onChange={handleOriginFilter}>
                    <option value="all">All dogs</option>
                    <option value="original">Originals</option>
                    <option value="created">Created</option>
                </select>
                <select onChange={handleTemperamentFilter}>
                    <option value="all">All temperaments</option>
                    {allTemperaments.map((temp) => {
                        return (
                            <option value={temp.name} key={temp.id}>
                                {temp.name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className={style.sorts}>
                <select onChange={handleOrder}>
                    <option value="none">None</option>
                    <option value="A">A-Z</option>
                    <option value="D">Z-A</option>
                </select>
                <select onChange={handleWeightOrder}>
                    <option value="none">None</option>
                    <option value="A">Max Weight ↑</option>
                    <option value="D">Max Weight ↓</option>
                    <option value="a">Min Weight ↑</option>
                    <option value="d">Min Weight ↓</option>
                </select>
            </div>
        </div>
    );
}
