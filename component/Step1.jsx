import { useForm } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

export default function PersonalInfo() {
  const { formData, formDataUpdate } = useForm();
  const navigate = useNavigate();
  function handleclick() {
    navigate("/stepTwo");
  }

  return (
    <div className="bg-white flex justify-center my-10 ">
      <div className="p-4 rounded-lg border shadow w-110 flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold my-5">Step 1: Personal Information</h1>

        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => formDataUpdate("name", e.target.value)}
          className="block border rounded-lg p-1 mb-2 w-full "
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => formDataUpdate("email", e.target.value)}
          className="block border rounded-lg p-1 mb-2 w-full"
        />

        <button
          onClick={handleclick}
          className="bg-gray-700 text-white px-4 py-2 rounded w-full md:w-fit "
        >
          Next
        </button>
      </div>
    </div>
  );
}
