import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import { RenderCount } from "./RenderCount.jsx";

export const CalcWithHooks = () => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  const [income, setIncome] = useState(100);
  const [cat, setCat] = useState(0);

  const onIncomeChange = (event) => {
    throw new Error("Not implemented");
  };

  const onCatChange = (event) => {
    throw new Error("Not implemented");
  };

  const nonEssentials = useMemo(() => 0, []);

  const showBottomLine = useMemo(() => true, []);

  const onShowBottomLineChange = (event) => {
    throw new Error("Not implemented");
  };

  return (
    <div className="calculator">
      <h2>Calculator with hooks</h2>
      <table>
        <thead>
          <tr>
            <th>Income</th>
            <th>Cat-related expenses</th>
            <th></th>
            <th>Disposable income</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="number" value={income} onInput={onIncomeChange} />
            </td>
            <td>
              <input type="number" value={cat} onInput={onCatChange} />
            </td>
            <td>
              <input
                type="checkbox"
                checked={showBottomLine}
                onChange={onShowBottomLineChange}
              />
            </td>
            <td>
              {showBottomLine ? (
                <input
                  type="text"
                  value={nonEssentials}
                  disabled={true}
                  className="bottomLine"
                />
              ) : (
                <div className="bottomLine"></div>
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <RenderCount count={renderCount.current} />
    </div>
  );
};
