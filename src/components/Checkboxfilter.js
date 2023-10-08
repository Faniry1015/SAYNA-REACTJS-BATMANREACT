import React, {useState} from 'react'

function Checkboxfilter({ categoriesArray, children, onCheckChange }) {
    const [check, setCheck] = useState([])

    const handleCheck = (e) => {

        console.log(e.target)
    }

    const handleChange = (e) => {
        setCheck(handleCheck(e))
        onCheckChange(e.target.checked)
    }

    return (
        <div className="mb-3">
                {JSON.stringify(check)}
            <h4>{children}</h4>
            <div className="checkboxContainer">
                {categoriesArray.map((catégorie) => {
                    return <div key={catégorie.nom} className='form-check'>
                        <input type="checkbox" value={catégorie.nom} onChange={handleChange} name={catégorie.nom} id={catégorie.nom} className="form-check-input"  />
                        <label htmlFor={catégorie.nom} className="form-check-label">{catégorie.label}</label>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Checkboxfilter