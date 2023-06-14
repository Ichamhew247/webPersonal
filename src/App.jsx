import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Router />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
export default App;
