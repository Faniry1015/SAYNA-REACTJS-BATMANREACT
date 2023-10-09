import React, { useState } from 'react'

function Checkboxfilter({ categoriesArray, children, onCheckChange }) {
    const defaultCheck = categoriesArray.map(categorie => ({ nom: categorie.nom, checked: true }))
    const [check, setCheck] = useState(defaultCheck)

    const handleChange = (e) => {
        const currentFilter = [...check]
        if (check.every((categorie) => categorie.checked === false)) {
            console.log('allFalse')
            setCheck(defaultCheck)
        } else {
            const updateFilter = currentFilter.map((categorie) => {
                if (categorie.nom === e.target.value) {
                    return { ...categorie, checked: e.target.checked }
                }
                return categorie
            })
            setCheck(updateFilter)
        }
        //Envoi de l'état vers le composant parent (Eshop)
        onCheckChange(check)

    }

    return (
        <div className="mb-3">
            <h4>{children}</h4>
            <div className="checkboxContainer">
                {categoriesArray.map((catégorie) => {
                    return <div key={catégorie.nom} className='form-check'>
                        <input type="checkbox" value={catégorie.nom} checked={check.checked} onChange={handleChange} name={catégorie.nom} id={catégorie.nom} className="form-check-input" />
                        <label htmlFor={catégorie.nom} className="form-check-label">{catégorie.label}</label>
                    </div>
                })}
            </div>
            {JSON.stringify(check)}
        </div>
    )
}

export default Checkboxfilter