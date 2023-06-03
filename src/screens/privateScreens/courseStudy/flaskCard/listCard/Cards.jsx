import React, { useState, useEffect } from "react";
import { CardStyled } from "./Cards.styled";
import axios from "axios";
import { notification } from "antd";
import { domainAPI } from "../../../../../configs/dev";

import Card from "./card/Card";

export default function Cards({ idLesson }) {
  const [flashcarddata, setFlashcarddata] = useState([]);
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState(0);
  const [total, setTotal] = useState(0);

  const getListFLaskCard = async () => {
    const res = await axios.get(`${domainAPI}/flask-card/${idLesson}`);
    setFlashcarddata(res?.data);
    setTotal(res?.data?.length);
  };

  useEffect(() => {
    getListFLaskCard();
  }, [idLesson]);

  const cards = flashcarddata.map((card) => {
    return (
      <div className="card-field">
        <Card card={card} key={card.id} />
      </div>
    );
  });

  const loading = <div className="loading">Loading flashcard content...</div>;

  function previousCard() {
    setCurrent(current - 1);
  }
  function nextCard() {
    setCurrent(current + 1);
  }

  const handleDone = () => {
    const newListFash = flashcarddata.filter((_, index) => {
      return index !== current;
    });
    setDone(done + 1);

    setFlashcarddata(newListFash);

    if (current === flashcarddata.length - 1) {
      previousCard();
    }

    if (newListFash.length === 0) {
      notification.success({
        message: "Bạn đã học thuộc tất cả !!!",
      });
    }
  };
  return (
    <CardStyled>
      <p className="text-done">
        Done: {done} / {total}
      </p>
      {flashcarddata && flashcarddata.length > 0 ? (
        <div className="cardNumber">
          Card {current + 1} of {flashcarddata.length}
        </div>
      ) : (
        ""
      )}

      {flashcarddata && flashcarddata.length > 0 ? cards[current] : loading}

      <div className="field-btn">
        <button onClick={handleDone}>Done</button>
      </div>

      <div className="nav">
        {current > 0 ? (
          <button onClick={previousCard}>Previous card</button>
        ) : (
          <button className="disabled" disabled>
            Previous card
          </button>
        )}
        {current < flashcarddata.length - 1 ? (
          <button onClick={nextCard}>Next card</button>
        ) : (
          <button className="disabled" disabled>
            Next card
          </button>
        )}
      </div>
    </CardStyled>
  );
}
