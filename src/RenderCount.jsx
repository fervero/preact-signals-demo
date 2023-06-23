export const RenderCount = ({ count }) => {
  const fontSize = Math.min(16 + count, 32) + "px";

  return (
    <div>
      <p className="renderCount">
        This component was rendered
        <span style={{ fontSize }}>
          {" "}
          {count}
          {count === 1 ? " time" : " times"}.
        </span>
      </p>
      {count > 10 && <marquee>WHY?</marquee>}
    </div>
  );
};
