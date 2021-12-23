import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root{
        --highlight: #ffa500;
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
        font-family: 'Ubuntu', sans-serif;
        overflow-x: hidden;
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
    img{
        border-radius: 7px;
    }
    .swiper-button-next, .swiper-button-prev{
        color: #ffa500;
        width: 10px;
    }
`

export default GlobalStyles
