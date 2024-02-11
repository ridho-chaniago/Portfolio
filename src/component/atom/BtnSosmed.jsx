const BtnSosmed=({link, children})=>{
    const situs=(url)=>{
        window.open(url, "_blank")
    }
    return(
        <button onClick={()=>situs(link)} className=" border-white border-[3px] p-2 rounded-lg">{children}</button>
    )
}
export default BtnSosmed