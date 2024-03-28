import { useState } from "react";

function Rectangle() {
    
    const [rectangleHeight,setRectangleHeight] = useState()
    const [RectangleWidth,setRectangleWidth] = useState()
    const edgesDifference = rectangleHeight-RectangleWidth
    let description 
    let result 

    if( edgesDifference > 5 || edgesDifference < -5){
        description = " שטח המגדל הוא: "
        result = rectangleHeight * RectangleWidth

    }
    else{
        description = " היקף המגדל הוא: "
        result = (rectangleHeight * 2) + (RectangleWidth * 2)
    }

    return (
        <div>
        <input placeholder="הכנס את גובה המלבן" onChange={(e) => setRectangleHeight(e.target.value)} value={rectangleHeight}></input>

        <br></br>
        <input placeholder="הכנס את אורך המלבן" onChange={(e) => setRectangleWidth(e.target.value)} value={RectangleWidth}></input>
        { rectangleHeight  && RectangleWidth && <h5> {description}{result}</h5>}
        
        </div>


    )
}
export default  Rectangle