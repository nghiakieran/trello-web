import Box from '@mui/material/Box'
import Card from './Card/Card'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
function ListCards({ cards }) {
  return (
    <SortableContext items={cards?.map(card => card._id)} strategy={verticalListSortingStrategy}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        m: '0 5px',
        p: '0 5px 5px 5px',
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
        {cards?.map(card => (<Card card={card} key={card._id}/>))}
      </Box>
    </SortableContext>
  )
}

export default ListCards
