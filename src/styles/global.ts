import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`
    :root{
        --highlight: #e4d901;
        --background: #8bae63;
        --white: #eeeeee;
        --black: #222;

        --container: 100rem;

        --minimal: 1rem;
        --smallest: 1.5rem;
        --small: 2rem;
        --medium: 3rem;
        --large: 5rem;
    }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    

    html{
        font-size: 62.5%;
    }

    html, body, #__next{
        height: 100%;
        list-style: none;
        background: var(--white);
        font-family: 'Cairo', sans-serif;
        overflow-x: hidden;
        ${media.lessThan('small')`
            overflow-x: hidden;
      `}
    }

    body {
        font-family: 'Cairo', sans-serif;
    }

    p{
        line-height: var(--medium);
    }

    a{
        color: var(---black);
        text-decoration: none;
    }
`

export default GlobalStyles
