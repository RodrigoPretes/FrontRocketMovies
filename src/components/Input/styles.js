import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 56px;
   
    
    display:flex;
    align-items: center;

    background-color: ${( {theme}) => theme.COLORS.ALMOST_BLACK};
    color: ${( {theme}) => theme.COLORS.WHITE};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        
        height: 56px;
        width: 100%;

        color: ${( {theme}) => theme.COLORS.WHITE};
        background: transparent;
        border:0;

        &:placeholder{
            color: ${( {theme}) => theme.COLORS.GRAY};
        }
    }
    >svg{
        margin: 0 16px;
    }

`;