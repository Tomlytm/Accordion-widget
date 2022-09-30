import React, {useState} from "react";

const Accordion =({ items })=>{
    const [activeIndex, setActiveIndex] =useState(null)
    const onTitleClick=(index)=>{
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index)=>{
        const active = activeIndex === index ? 'active': '';
        return (
            <div className="ui styled fluid  accordion">
                <div 
                    className={`${active} title`}
                    onClick={()=>onTitleClick(index)}
                    >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`${active} content`}>
                    <p>{item.content}</p>

                </div>
            </div>
        )
    })
    return(
        <div>
            {renderedItems}
        </div>
    )
}
export default Accordion;