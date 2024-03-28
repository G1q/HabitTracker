/* eslint-disable react/prop-types */
import './GridSelector.css'


const GridSelector = ({ onChange, items, className, title, name, backgroundImage = true }) => {
    // Items from objects array must have name property and value property

    return (
        <div className={`grid-selector ${className}`}>
            <h2 className='grid-selector__title'>{title}</h2>
            <div className="grid-selector__container" >
                {
                    items.map(item => (
                        <div className={`grid-selector__item-wrapper ${backgroundImage ? 'have-img' : 'have-bg'}`} tabIndex={0} key={item.name}>
                            <label htmlFor={item.name} style={{ backgroundColor: item.value }}>
                                {
                                    backgroundImage && <img src={`/img/${item.value}`} title={item.name} alt="" />
                                }
                            </label>
                            <input type="radio" name={name} id={item.name} value={item.value} onChange={onChange} />
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default GridSelector