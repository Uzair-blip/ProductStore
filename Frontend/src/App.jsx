import { Box, useColorModeValue} from "@chakra-ui/react"
import {Routes,Route} from "react-router-dom"
import Createpage from "./pages/Createpage"
import Homepage from "./pages/Homepage"
import { Navbar } from "./components/Navbar"
function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/create" element={<Createpage/>}/>
      </Routes>

    </Box>
  )
}

export default App
