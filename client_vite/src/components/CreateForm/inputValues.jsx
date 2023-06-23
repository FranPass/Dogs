const inputValues = (titulo, unidad, style, dogData, auxData, handleChange, errors) => {
    const min_value = `min_${titulo.toLowerCase().replace(" ", "_")}`;
    const max_value = `max_${titulo.toLowerCase().replace(" ", "_")}`;
    const value = `${titulo.toLowerCase().replace(" ", "_")}`;
    return (
        <div>
                <h3>{titulo} [{unidad}]</h3>
                <div className={style.inputNums}>
                    <div>
                    <label htmlFor={min_value}> Min: 
                    <input 
                            value={dogData[min_value]}
                            name={min_value}
                            type="number" 
                            onChange={handleChange}/>
                    </label>
                    </div>
                    <div>
                    <label htmlFor={max_value}> Max: 
                    <input 
                            value={dogData[max_value]}
                            name={max_value}
                            type="number" 
                            onChange={handleChange}
                            disabled={auxData[min_value] === '' || auxData[min_value] === undefined}/>
                    </label>
                    </div>
                </div>
            {errors[value] 
            ? <p className={style.errors}>{errors[value]}</p> 
            : ''}
        </div>
    )
}
export default inputValues

