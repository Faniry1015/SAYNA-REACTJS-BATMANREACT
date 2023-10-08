import React from 'react'

function Checkboxfilter({ categoriesArray }) {
    return (
        <div>
            <h3>Catégorie</h3>
            <div className="checkboxContainer">
                {categoriesArray.map((catégorie) => {
                    return <div>
                        <input type="checkbox" name={catégorie.nom} id={catégorie.nom} />
                        <label htmlFor={catégorie.nom}>{catégorie.label}</label>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Checkboxfilter