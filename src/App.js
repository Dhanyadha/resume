import AppStyles from "./App.module.scss";
import ResumeForm from "./RsumeForm/page";
import Templates from "./Templates/page";

function App() {
  return (
    <div className={AppStyles.container}>
      <div style={{height:"40rem", overflowY:"auto"}}>

      <ResumeForm />
      </div>
      <div style={{height:"600px", overflowY:"auto"}}>
      <Templates />
</div>
    </div>
  );
}

export default App;