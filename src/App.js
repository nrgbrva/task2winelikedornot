import "./styles.css";
import Wine from "./components/Wine";
import Winefn from "./components/winefn";
export default function App() {
  const styled = {
    background: "blue"
  };
  return (
    <div className="App" style={styled}>
      {/* <Wine type="Red" year="2002" /> */}
      <Winefn rating="3.5" like={true} />
      <Winefn rating="1.5" like={false} />
    </div>
  );
}
