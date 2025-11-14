export const QuestionCard = ({ data, selected, selectOption }) => {
  return (
    <div>
      <h2>{data.question}</h2>

      {data.options.map((opt, i) => {
        const isSelected = opt === selected;

        return (
          <button
            key={i}
            className={`option-btn 
              ${isSelected ? "option-selected" : ""} 
              ${selected && !isSelected ? "option-disabled" : ""}`}
            onClick={() => selectOption(opt)}
            disabled={selected !== null}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
