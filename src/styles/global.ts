import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root{
        --highlight: #006400;
        --background: #ffbf00;
        --white: #eeeeee;
        --black: #222 ;

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
        background: var(--background);
        font-family: 'Cairo', sans-serif;
      
    }

    body {
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    p{
        font-size: 2rem;
        line-height: var(--medium);
    }

    a{
        color: var(--highlight);
        text-decoration: none;
    }
`

export default GlobalStyles
