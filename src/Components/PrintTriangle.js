
function Print(props) {

    const width = props.triangleWidth
    const height = props.triangleHeight
    if (width % 2 === 0 || (height * 2) < width)
        return <p> אין אפשרות להדפיס את המגדל</p>

    const model = []
    let countGrupNum = 0
    let widthToCheck = (width - 2)
    while (widthToCheck > 1) {
        widthToCheck -= 2
        countGrupNum++
    }
    const sumOfNormalLines = Math.floor((height - 2) / countGrupNum)
    const sumOfTopLines = (sumOfNormalLines + (height - 2) % countGrupNum)


    let points
    let sumPoint = 3;
    points = ' '.repeat((width)/2)
    points +='*'  
     model.push(<div>{points}</div>)

    for (let i = 2; i < height;) {

        if (i <= (sumOfTopLines + 1)) {
            points = ' '.repeat((width - sumPoint)/2)
            points += '*'.repeat(sumPoint)
            model.push(<div>{points}</div>)
            i++
        }
        else {
            sumPoint += 2
            for (let j = 0; j < sumOfNormalLines; j++) {
                points = ' '.repeat((width-sumPoint)/2)
                points += "*".repeat(sumPoint)
                model.push(<div>{points}</div>)

            }
            i += sumOfNormalLines

        }

    }
    points = '*'.repeat(width)
    model.push(<div>{points}</div>)


    return <pre> {model} </pre>
}

export default Print


  

