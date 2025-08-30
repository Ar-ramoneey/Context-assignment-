import { useForm } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const navigate = useNavigate();
  const { formData, resetForm } = useForm();
  function handleclick() {
    navigate("/stepTwo");
  }
  function handleSubmit() {
    alert("Form submitted successfully!");
    resetForm();
    navigate("/");
  }
  return (
    <div className="bg-white flex justify-center my-10 ">
      <div className="p-4 rounded-lg border shadow w-110 flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold my-5">Step 3: Confirmation</h1>

        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Street:</strong> {formData.street}
        </p>

        <div className="flex gap-2 mt-4">
          <button
            onClick={handleclick}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Prev
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
