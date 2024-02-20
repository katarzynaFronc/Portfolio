import { stack } from "../api/stackList";

export const StackList = () => {
  return (
    <div className="stack-container">
      {stack.map(({ id, icon }) => {
        return (
          <button key={id} className="stack-button">
            <img src={icon} className="stack-button-image" />
          </button>
        );
      })}
    </div>
  );
};
