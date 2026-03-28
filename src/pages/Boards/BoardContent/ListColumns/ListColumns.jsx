import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { cloneDeep } from 'lodash'

import { generatePlaceholderCard } from '~/utils/formatters'
import Column from './Column/Column'
import { selectCurrentActiveBoard, updateCurrentActiveBoard } from '~/redux/slice/activeBoardSlice'
import { createNewColumnAPI } from '~/apis'


function ListColumns({ columns }) {
  const dispatch = useDispatch()
  const board = useSelector(selectCurrentActiveBoard)

  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
  const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)

  const [newColumnTitle, setNewColumnTitle] = useState('')

  const handleAddColumn = async () => {
    if (!newColumnTitle) {
      toast.error('Please enter Column title!')
      return
    }

    const newColumnData = {
      title: newColumnTitle
    }

    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id
    })

    createdColumn.cards = [generatePlaceholderCard(createdColumn)]
    createdColumn.cardOrderIds = [generatePlaceholderCard(createdColumn)._id]

    const newBoard = cloneDeep(board)
    newBoard.columns.push(createdColumn)
    newBoard.columnOrderIds.push(createdColumn._id)
    dispatch(updateCurrentActiveBoard(newBoard))

    toggleOpenNewColumnForm()
    setNewColumnTitle('')
  }

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
        {columns?.map(column => (
          <Column column={column} key={column._id } />
        ))}

        {/* Box Add new Column */}
        {!openNewColumnForm ? (
          <Box
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              bgcolor: '#ffffff3d',
              mx: 2,
              height: 'fit-content',
              borderRadius: '6px'
            }}
            onClick={toggleOpenNewColumnForm}
          >
            <Button
              sx={{
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
        ) : (
          <Box
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              bgcolor: '#ffffff3d',
              mx: 2,
              p: 1,
              height: 'fit-content',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}
          >
            <TextField
              label="Enter column title..."
              type="text"
              size='small'
              autoFocus
              variant='outlined'
              value={newColumnTitle}
              onChange={e => setNewColumnTitle(e.target.value)}
              sx={{
                '& label': { color: 'white' },
                '& input': { color: 'white' },
                '& label.Mui-focused': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'white' },
                  '&:hover fieldset': { borderColor: 'white' },
                  '&.Mui-focused fieldset': { borderColor: 'white' }
                }
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                variant='contained'
                color='success'
                size='small'
                sx={{
                  boxShadow: 'none',
                  '&:hover': { bgcolor: (theme) => theme.palette.success.main }
                }}
                onClick={handleAddColumn}
              >
                Add Column
              </Button>
              <CloseIcon
                fontSize='small'
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  '&:hover': { color: theme => theme.palette.warning.light }
                }}
                onClick={toggleOpenNewColumnForm}
              />
            </Box>
          </Box>
        )}
      </Box>
    </SortableContext>
  )
}

export default ListColumns
