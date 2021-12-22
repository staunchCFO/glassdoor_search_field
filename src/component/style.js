import styled from "styled-components";

export const BodyStyle = styled.div`
  background-color: #fff;
  color: white;
  padding: 10rem;

  .parent_inputField {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 500px;
    padding: 0;
    background-color: #f5f6f7;
    border-radius: 3px;
    border: 1px solid #c4c7cc;

    .search_div {
      height: 100%;
      padding: 0 2px 0 2px !important;
      width: 400px;

      input {
        font-family: Lato, sans-serif;
        height: 100%;
        outline: none;
        border: none;
        background-color: inherit;
        padding-left: 0;
      }
    }

    .location_div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 200px;
      padding: 0 2px 0 5px !important;
      border-left: 1px solid grey;

      input {
        font-family: Lato, sans-serif;
        height: 100%;
        outline: none;
        border: none;
        background-color: inherit;
      }

      .icon {
        font-size: 20px;
        color: #ccc;
        padding-right: 5px;
      }
    }

    .search_btn {
      border-radius: 3px;
      border: 1px solid transparent;
      font-weight: 700;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      line-height: 1.6;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100px;
      height: 100%;
      background-color: #0caa41;
      outline: none;

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 12px 0px 0px 0px;
        font: inherit;
        cursor: pointer;
        outline: inherit;
      }
      .icon {
        font-size: 25px;
      }
    }
  }
`;
