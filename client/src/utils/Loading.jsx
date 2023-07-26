import { Backdrop, CircularProgress } from "@mui/material"
import propTypes from "prop-types"

const Loading = ({isLoading}) => {
  return (
    <>
      <Backdrop open={isLoading} sx={{color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1}}>
        <CircularProgress sx={{
          color: "#00BB9D"}} />
      </Backdrop>   
    </>
  )
}
export default Loading

Loading.propTypes = {
  isLoading: propTypes.bool.isRequired,
}

