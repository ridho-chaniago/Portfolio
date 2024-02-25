import React, { createContext, useState } from 'react';

// Buat context
const Themes = createContext();

// Buat provider
export const ThemesColor = ({ children }) => {
  const [text, setText] = useState('text-yellow-500 ');
  const [shadow, setShadow] = useState(`shadow-yellow-500`); 
  const [bg,setBg]=useState("bg-yellow-500");
  const [borderCol, setBorderCol]=useState("border-yellow-500")
  const [isdark,setIsdark]=useState(false)

  const changeColor = (text, shadow,bg,borderCol) => {
    setText(text); // Fungsi untuk mengubah warna
    setShadow(shadow); // Fungsi untuk mengubah warna
    setBg(bg); // Fungsi untuk mengubah warna
    setBorderCol(borderCol)
    console.log("themes change " +text,dark)
  };
  const handleDark=()=>setIsdark(!isdark)

  return (
    <Themes.Provider value={{ text,shadow, bg, changeColor,borderCol,handleDark,isdark}}>
      {children}
    </Themes.Provider>
  );
};

export default Themes
