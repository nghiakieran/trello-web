import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
  return (
    <SortableContext items={columns?.map(column => column._id)} strategy={horizontalListSortingStrategy}>
      <Box sx={{
        bgcolor: 'inherit',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        width: '100%',
        height: '100%',
        '&::-webkit-scrollbar-track': { m: 2 }
      }}>
        {columns?.map(column => (<Column column={column} key={column._id }/>))}

        {/* Box Add new Column */}
        <Box sx={{
          minWidth: '200px',
          maxWidth: '200px',
          bgcolor: '#ffffff3d',
          mx: 2,
          height: 'fit-content',
          borderRadius: '6px'
        }}>
          <Button sx={{
            color: 'white',
            width: '100%',
            pl: 2.5,
            py: 1,
            justifyContent: 'flex-start'
          }}
          startIcon={<NoteAddIcon />}
          >
            Add new Column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns
