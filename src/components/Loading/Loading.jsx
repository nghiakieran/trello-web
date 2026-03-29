import { Box, CircularProgress, Typography } from '@mui/material'

const Loading = ({ caption }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, height: '100vh', width: '100vw' }}>
      <CircularProgress />
      <Typography>{caption || 'Loading...'}</Typography>
    </Box>
  )
}

export default Loading
