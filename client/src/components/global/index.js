import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const ContentBigger = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 75%;
  border-radius: 5px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  font-size: 24px !important;
`;

export const PostTitle = styled.span`
  text-align: center;
  background-image: linear-gradient(to bottom right, #009dff, #8cd3ff);
  color: white;
  padding: 10px 10px;
`;

export const PostText = styled.span`
  text-align: justify;
  padding: 10px 10px;
  min-height: 150px;
  height: 150px;
  overflow: hidden;
`;

export const PostAuthor = styled.span`
  text-align: left;
  background-image: linear-gradient(to bottom right, #009dff, #8cd3ff);
  color: white;
  padding: 10px 10px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const NavContainer = styled.div`
  position: relative;
  width: 50%;
  min-width: 300px;
  height: 50px;
  border: 10px solid transparent;
  border-top: 10px solid #fffa;
  border-left: 10px solid #fffa;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25) inset;
  background-image: linear-gradient(to bottom right, #009dff, #8cd3ff);
  margin: 30px 0;

  ::after {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30%;
    height: 49px;
    border: 10px solid transparent;
    border-bottom: 10px solid #fffa;
    border-right: 10px solid #fffa;
    transition: 0.3s linear all;
  }
`;

export const Menu = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 1;

  > a {
    display: inline-flex;
    padding: 14px;
    margin-left: 2px;
    font-family: 'Quicksand', sans-serif;
    color: #fff;
    cursor: pointer;
    transition: 0.3s linear all;
    user-select: none;
    text-decoration: none;
    :hover {
      box-shadow: 0 50px 5px rgba(0, 0, 0, 0.15) inset;
    }
  }
`;
