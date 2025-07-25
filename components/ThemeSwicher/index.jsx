"use client"
import { useTheme } from "next-themes";
import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialUISwitch } from "./styled";



const ThemeSwicher = () => {
  const { theme, setTheme } = useTheme();


  return (
    <FormControlLabel onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      control={<MaterialUISwitch defaultChecked />}
    />
  )
}





export default ThemeSwicher