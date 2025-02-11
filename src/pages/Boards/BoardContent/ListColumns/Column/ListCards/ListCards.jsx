import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      m: '0 5px',
      p: '0 5px',
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) =>
        `calc(
              ${theme.trello.boardContentHeight} - 
              ${theme.spacing(5)} -
              ${theme.trello.columnHeaderHeight} - 
              ${theme.trello.columnFooterHeight}
            )`,
      '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
      '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }
    }}>
      <Card />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
    </Box>
  )
}

export default ListCards
