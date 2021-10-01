import {useState} from 'react'

const Epic = () => {
    const [godKing, setGodKing] = useState("god")
    const [sonsOfGod, setSonsOfGod] = useState("sons of god")
    const [man, setMan] = useState("man")
    const [profit, setProfit] = useState("profit")
    const [royalBloodLine, setRoyalBloodLine] = useState("royal blood line")

    return(
        <div>
            <div>
            {`
            first there was darkness then there was light.
            
            
            `}
        </div>
        <div>
            {`${godKing} walked in the garden,`}
        </div>
        <div>
            {`the ${sonsOfGod} bread with the daughters of ${man}`}
        </div>
        <div>
            {`a child is born from the ${royalBloodLine}`}
        </div>
        <div>
            {`the ${profit} leave's kingdom with half ${royalBloodLine} child`}
        </div>
        <div>
            {`the child returns to the kingdom to claim the throne`}
        </div>
        <div>
            {`since the child is obviously of ${royalBloodLine} he is allowed into the palace`}
        </div>
        <div>
            {``}
        </div>
        </div>
    )
}

export default Epic