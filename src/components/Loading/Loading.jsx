import { ScaleLoader } from "react-spinners"
import "./loading.css"

const Loading = () => {
  return (
    <div className="loading">
      <ScaleLoader className="spinner" color="lime" />
      <h2>Cargando...</h2>
    </div>
  )
}
export default Loading