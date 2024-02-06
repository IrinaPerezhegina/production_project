import "./styles/index.scss"
import { classNames } from "shared/lib/ClassNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";
import  {AppRouter}  from "app/providers/router";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";







const App = () => {
    const {theme, toggleTheme }=useTheme()
    return (
   
    <div className={classNames("app",{}, [theme])}>
       <Navbar/>
       <button onClick={toggleTheme}>TOOGLE</button>
       <AppRouter/>
     
     
    </div>  
   
  
    );
}
 
export default App;