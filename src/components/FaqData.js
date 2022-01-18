import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

// const FaqDataContentful = () => {

//     const data = useStaticQuery(graphql`
    
//     query {
//         allContentfulFaqBox {
//             edges {
//                 node {
//                     question
//                     answer {
//                         answer
//                     }
//                 }
//             }
//         }
//     }
//     `)
// }

export const FaqData = [

    {
        question: `Is the sky blue?`,
        answer: `No`
    },
    {
        question: `What's wrong with the world today?`,
        answer: `Everything`
    },
    {
        question: `But, why though?`,
        answer: `Because, it's not that big of a deal though really.`
    },
    {
        question: `Is the sky blue?`,
        answer: `Yeah, IDK maybe.`
    }

];


// https://www.youtube.com/watch?v=fNKbo0bboyA


    



