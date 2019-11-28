import React from 'react'

function roundRobinArray(masonItems){
    var section1 = []
    var section2 = []
    var section3 = []
    var section4 = []
    var used1 = true
    var used2 = false
    var used3 = false
    var used4 = false
    var separatedItems = []
    for (var itemIndex = 0; itemIndex < masonItems.length-1; itemIndex++){
        if (used4)
        {
            section4.push(masonItems[itemIndex])
            used4 = false
            used1 = true
        }
        if (used3)
        {
            section3.push(masonItems[itemIndex])
            used3 = false
            used4 = true
        }
        if (used2)
        {
            section2.push(masonItems[itemIndex])
            used2 = false
            used3 = true
        }
        if (used1)
        {
            section1.push(masonItems[itemIndex])
            used1 = false
            used2 = true
        }
        console.log(itemIndex)
        console.log(masonItems.length)
    }
    separatedItems.push(section1)
    separatedItems.push(section2)
    separatedItems.push(section3)
    separatedItems.push(section4)
    return separatedItems
}



function MasonGrid(props)
{
    var newItemLists = roundRobinArray(props.children)

    console.log(newItemLists)
    let children = null
    if(newItemLists) {
        children = (
            newItemLists.map((items, id) => 
                <div key={id} className="mason-column">
                    {items.map((singleElement) => 
                        singleElement
                    )}
                </div>)
        )
    }
    console.log(children)

    return (
        <div className="mason-container">
            {children}
        </div>
    )
}
export default MasonGrid