import "./app.css";
import { CalcWithSignals } from "./CalcWithSignals.jsx";
import { CalcWithHooks } from "./CalcWithHooks.jsx";

export function App() {
  return (
    <>
      <h1>Household budget calculator</h1>
      <CalcWithSignals />
      <CalcWithSignals />
      <CalcWithHooks />
    </>
  );
}
