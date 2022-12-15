/* eslint-disable no-undef */
import Wrapper from "../Wrapper/Wrapper";

function Entry(props) {
  return (
    <Wrapper>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>{props.description} </dd>
        </div>
      </dl>
    </Wrapper>
  );
}
export default Entry;
