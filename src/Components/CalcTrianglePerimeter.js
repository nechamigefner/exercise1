
function TrianglePerimeter(props){
    debugger
    const width = props.triangleWidth
    const height = props.triangleHeight
    const edge = Math.sqrt((height * height) + ((width/2) * (width/2)) ) 
    const perimeter = edge*2+ width

    return (<h6> {perimeter} </h6> )
}
export default TrianglePerimeter
