import styled from "styled-components";

export const CardStyled = styled.div`
  .nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav button {
    height: 50px;
    border: none;
    width: 170px;
    font-weight: 500;
    background: #111122;
    color: white;
    font-size: 16px;
    padding: 0.8em 1.2em;
    border-radius: 10px;
    margin: 1em 5px;
    opacity: 0.85;
    transition: all 0.25s;
    cursor: pointer;
  }

  .nav button:hover {
    opacity: 1;
    transform: translateY(-2px);
  }

  .nav button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    transform: translateY(0px);
  }

  .nav button:focus {
    outline: none;
  }

  .cardNumber {
    color: white;
    display: flex;
    justify-content: center;
  }
  .card {
    margin: 10px auto;
    background: var(--grad-one);
    height: 350px;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: column; */
    color: #ffffff;
    font-size: 24px;
    font-weight: 400;
    border-radius: var(--border-radius);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.1),
      0px 8px 16px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.1);
    position: relative;
    cursor: pointer;
    transition: 250ms;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateY(var(--rotate-y, 0))
      translateY(var(--translate-y, 0));
  }

  .side {
    background: var(--grad-two);
    transform: rotateY(-180deg);
  }

  .card .front,
  .card .back {
    position: absolute;
    padding: 1rem;
    backface-visibility: hidden;
  }

  .card .front {
    transform: rotateY(0deg);
  }

  .card.side .front {
    opacity: 0;
    display: none;
  }

  .card .back {
    transform: rotateY(180deg);
  }

  .card small {
    opacity: 0.7;
    font-size: 0.7em;
    position: absolute;
    top: 3rem;
  }

  .card.side small {
    transform: rotateY(180deg);
  }

  .card small span {
    display: block;
    text-align: center;
    font-size: small;
  }

  .loading {
    color: white;
    width: 350px;
    text-align: center;
    margin: 20px auto;
  }
  .card-field {
    display: flex;
  }

  .field-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 100px;
      height: 50px;
      font-size: 16px;
      font-weight: 500;
      border-radius: 10px;
      border: none;
      color: #ffffff;
      background-color: #66ff00;
      cursor: pointer;

      &:hover {
        background-color: #33ff00;
      }
    }
  }
  .text-done {
    padding-right: 100px;
    text-align: end;
    font-size: 30px;
    font-weight: 500;
  }
`;
