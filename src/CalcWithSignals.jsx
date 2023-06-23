import { useMemo, useState } from "preact/hooks";
import { RenderCount } from "./RenderCount.jsx";
import { useComputed, useSignal } from "@preact/signals";

export const CalcWithSignals = () => {
  const income = useSignal(100);
  const cat = useSignal(0);

  const onIncomeChange = (event) => {
    income.value = +event.target.value;
  };

  const onCatChange = (event) => {
    cat.value = +event.target.value;
  };

  const nonEssentials = useComputed(() => {
    return income - cat;
  });

  const showBottomLine = useSignal(true);

  const onShowBottomLineChange = (event) => {
    showBottomLine.value = event.target.checked;
  };

  return (
    <div className="calculator">
      <h2>Calculator with signals</h2>
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
              {showBottomLine.value ? (
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
      {/*<RenderCount count={1} />*/}
    </div>
  );
};
