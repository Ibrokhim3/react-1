import "./feedback-card.css";
import commentIcon from "./../../assets/icons/Path.svg";
import { FilterButton } from "../tool-filter-button/filter-button";
import array from "./../../assets/icons/Path 2.svg";
import { Title } from "../title/title";

export const FeedbackCard = ({ card }) => {
  return (
    <li className="feedback-card">
      <div className="feedback-card-wrapper">
        <button className="feedback-card__button">
          <img src={array} alt="like-button" />
          {card.like}
        </button>
        <div className="feedback-card__text-wrapper">
          <Title to={"#"} margin="0 0 4px">
            {card.title}
          </Title>
          <p className="feedback-card__text">{card.desc}</p>
          <FilterButton>{card.filterButton}</FilterButton>
        </div>
      </div>
      <span className="feedback-card__comment">
        <img src={commentIcon} alt="comment" />
        {card.commentNumber}
      </span>
    </li>
  );
};
