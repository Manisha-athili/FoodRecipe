
import { FloatButton } from "antd";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import RoutePage from "./Routes.jsx";


function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#f0f2f5' }}>
      <NavBar  />
      <RoutePage/>
      <FloatButton tooltip={<div>Documents</div>} />
      <Footer />
    </div>
  );
}

export default App;
