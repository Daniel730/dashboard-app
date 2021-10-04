import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 30%;
  border-radius: 5px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 10px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  border-radius: 5px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  min-height: 45vh;
  max-height: 45vh !important;
`;

export const ContentBigger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 60vh;
  font-size: 24px !important;
`;

export const ContentSides = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;
  transition: 0.3s;
  width: 75%;
  height: 60vh;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
  font-size: 20px;
  font-weight: bolder;
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
  width: 100%;
  height: 50px;
  border: 5px solid transparent;
  background-image: linear-gradient(to bottom right, #009dff, #8cd3ff);
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

export const Comment = styled.span`
  font-size: 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  padding: 10px;
`;

export const AddCommentContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > input,
  > button {
    margin: 10px;
    padding: 10px;
  }
  > button {
    border: none;
    background: linear-gradient(to bottom right, #009dff, #8cd3ff);
    border-radius: 5px;
    color: white;
    :hover {
      cursor: pointer;
      background: linear-gradient(to bottom right, #8cd3ff, #009dff);
    }
  }
  > input {
    border: 2px solid grey;
    border-radius: 5px;
    font-size: 15px;
  }
`;
