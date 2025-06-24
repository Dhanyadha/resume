import AppStyles from "./App.module.scss";
import ResumeForm from "./RsumeForm/page";
import Templates from "./Templates/page";


function App() {
  return (
    <div className={AppStyles.container}>
      <ResumeForm />
      <Templates />
    </div>
  );
}

export default App;
