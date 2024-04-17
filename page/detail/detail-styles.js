import { css } from 'lit';

export const DetailStyle = css`
  * {
    font-family: arial;
    font-size: 1.1rem;
    color: #6c6868;
  }

  h2 {
    color: #262525;
    font-size: 2.0rem;
  }

  li {
    border-bottom: 1px solid #d6d0d0;
    display: flex;
    justify-items: center;
  }

  .image-user {
    height: 80px;
    weight: 80px;
    margin-right: 1.2rem;
  }

  .informacion-container {
    display: flex;
  }

  .subinformation-container > p:first-child{
    color: #1851a0;
    font-weight: bold;
  }

  .subinformation-container > p:last-child{
    color: #18a024;
    font-weight: bold;
  }
  
`;