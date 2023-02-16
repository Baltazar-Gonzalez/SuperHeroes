import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

*, *::before, *::after {
    box-sizing: inherit;
    margin:0;
    padding:0;
}


ul {
    list-style: none;
}

body{
    background-image: url("https://wallpapercave.com/wp/wp2483329.jpg");
    background-size: 1800px;
    font-family: 'Anton', sans-serif;
}

a{
    text-decoration:none;
    color:white;
}
h6{
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
}
html{

}
`

export const Container = styled.div`
    color: white;
    text-shadow: 3px 3px 3px black;;
    max-width: 1004px;
    min-width: 220px;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.6);
    margin: 30px auto ;
    border-radius: 10px;
    margin-bottom: 90px;
    
`