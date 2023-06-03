import styled from "styled-components";

export const CardComponentStyled = styled.div`
  &.card {
    margin: 10px auto;
    background: #96d962;
    height: 500px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 100px;
    font-weight: 400;
    border-radius: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.1),
      0px 8px 16px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: 250ms;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateY(45deg) translateY(45deg);
  }

  &.side {
    background: #96d962;
    transform: rotateY(-180deg);
  }

  .front {
    font-size: 200px;
  }

  .back {
    font-size: 100px;
  }

  .card .front,
  .card .back {
    position: absolute;
    padding: 1rem;
    backface-visibility: hidden;
  }

  .card .front {
    transform: rotateY(0deg);
    font-size: 36px;
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
`;
