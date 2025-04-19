import './App.css'
import ChefifyNavbar from './components/ChelifyNavbar'
import ChelifyFooter from './components/ChelifyFooter'
import RecipeOfTheDay from './components/RecipeOfTheDay'
import SummerRecipes from './components/SummerRecipes'

function App() {
  return (
    <>
      <ChefifyNavbar />
      <RecipeOfTheDay />
      <SummerRecipes />
      <ChelifyFooter />
    </>
  )
}

export default App
