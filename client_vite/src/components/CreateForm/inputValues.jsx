const inputValues = (titulo, unidad, style, dogData, handleChange, errors) => {
    return (
        <div>
                <h3>{titulo} [{unidad}]</h3>
                <div className={style.inputNums}>
                    <div>
                    <label htmlFor={`min_${titulo.toLowerCase().replace(" ", "_")}`}> Min: 
                    <input 
                            value={dogData[`min_${titulo.toLowerCase().replace(" ", "_")}`]}
                            name={`min_${titulo.toLowerCase().replace(" ", "_")}`}
                            type="number" 
                            onChange={handleChange}/>
                    </label>
                    </div>
                    <div>
                    <label htmlFor={`max_${titulo.toLowerCase().replace(" ", "_")}`}> Max: 
                    <input 
                            value={dogData[`max_${titulo.toLowerCase().replace(" ", "_")}`]}
                            name={`max_${titulo.toLowerCase().replace(" ", "_")}`}
                            type="number" 
                            onChange={handleChange}/>
                    </label>
                    </div>
                </div>
            {errors[titulo.split(' ',1)[0].toLowerCase()] 
            ? <p className={style.errors}>{errors[titulo.split(' ',1)[0].toLowerCase()]}</p> 
            : ''}
        </div>
    )
}
export default inputValues

