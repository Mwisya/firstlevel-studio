import {createContext, useContext, useState} from "react";

const icons = [
    {
        home: ''
    },
    {
        instagram: ''
    },
    {
        facebook: ''
    },
    {
        email: ''
    }, {
        call: ''
    },

]

const recentShoots = [
    {
        ladiesTalk: ' ladies talk tanzania,morogoro and beyond'
    }, {
        seedco: ' seedco documentary on farm produce'
    }, {
        wedding: ' shot the wedding of very best'
    }, {
        asa: 'official ASA multi media solution'
    }
]

const weddings = [{}]
const choice = [{}]
const portrait = [{}]
const documentaries = [{}]
const events = [{}]
const products = [{}]
const maternity = [{}]
const fashion = [{}]
const indoors = [{}]


// CONTEXT DECLARATION
const StateContext = createContext();

export const ContextProvider = ({children}) => {

    const [weddings, setWeddings] = useState(weddings)
    const [documentaries, setDocumentaries] = useState(documentaries)
    const [portraits, setPortrait] = useState(portraits)
    const [products, setProducts] = useState(products)
    const [indoors, setIndoors] = useState(indoors)
    const [events, setEvents] = useState(events)
    const [fashion, setFashion] = useState(fashion)
    const [maternity, setMaternity] = useState(maternity)
    const [choice, setChoice] = useState(choice)
    const [recentShoots, setRecentSoots] = useState(recentShoots);


    return (
        <StateContext.Provider value={
            {recentShoots}
        }>
            {children} </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)
