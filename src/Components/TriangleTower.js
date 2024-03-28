import { useState } from "react"
import TrianglePerimeter from './CalcTrianglePerimeter'
import Print from "./PrintTriangle"
function Triangle() {
   
    const [triangleHeight , setTriangleHeight] = useState()
    const [triangleWidth , setTriangleWidth] = useState()
    const [showPerimeter ,setShowPerimeter] = useState(false)
    const [showPrint , setShowPrint] = useState(false)

    
    return (
        <div>
        <input placeholder="הכנס את גובה המגדל" onChange={(e) => setTriangleHeight(e.target.value)} value={triangleHeight}></input>
        <br></br>
        <input placeholder="הכנס את רוחב המגדל" onChange={(e) => setTriangleWidth(e.target.value)} value ={triangleWidth}></input>
        { triangleHeight && triangleWidth && <div><button onClick={() => setShowPerimeter(true)}> לחישוב היקף המגדל </button>
        <button onClick={() => setShowPrint(true)}>להדפסת המגדל</button></div>}
        { showPerimeter && <TrianglePerimeter triangleHeight ={triangleHeight} triangleWidth = {triangleWidth} ></TrianglePerimeter>}        
        { showPrint && <Print triangleHeight ={triangleHeight} triangleWidth = {triangleWidth} ></Print>} 


        </div>
    )
}
export default  Triangle




