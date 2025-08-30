import PersonalInfo from "../component/Step1";
import Address from "../component/Step2";
import Confirmation from "../component/Confirmation";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/stepTwo" element={<Address />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}
