import './App.css'
import ChefifyNavbar from './components/ChelifyNavbar'
import ChelifyFooter from './components/ChelifyFooter'
import RecipeOfTheDay from './components/RecipeOfTheDay'
import SummerRecipes from './components/SummerRecipes'
import RecipesWithVideos from './components/RecipesWithVideos'

function App() {
  return (
    <>
      <ChefifyNavbar />
      <RecipeOfTheDay />
      <SummerRecipes />
      <RecipesWithVideos />
      <ChelifyFooter />
    </>
  )
}

export default App
