import './App.css'
import ChefifyNavbar from './components/ChelifyNavbar'
import ChelifyFooter from './components/ChelifyFooter'
import RecipeOfTheDay from './components/RecipeOfTheDay'
import SummerRecipes from './components/SummerRecipes'
import RecipesWithVideos from './components/RecipesWithVideos'
import EditorsPick from './components/EditorsPick'

function App() {
  return (
    <>
      <ChefifyNavbar />
      <RecipeOfTheDay />
      <SummerRecipes />
      <RecipesWithVideos />
      <EditorsPick />
      <ChelifyFooter />
    </>
  )
}

export default App
