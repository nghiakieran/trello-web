import AddCardIcon from '@mui/icons-material/AddCard'
import Cloud from '@mui/icons-material/Cloud'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import ListCards from './ListCards/ListCards'
import { mapOrder } from '~/utils/sorts'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function Column({ column }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: column._id,
    data: { ...column }
  })

  const style = {
    // touchAction: 'none',
    transform: CSS.Translate.toString(transform),
    transition
  }

  return (
    <Box
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
        minWidth: '300px',
        maxWidth: '300px',
        borderRadius: '6px',
        ml: 2,
        height: 'fit-content',
        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
      }}
    >
      {/* Box Column Header */}
      <Box sx={{
        height: (theme) => theme.trello.columnHeaderHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2
      }}>
        <Typography variant='h6' sx={{
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
        >
          {column?.title}
        </Typography>
        <Box>
          <Tooltip title="More options">
            <KeyboardArrowDownIcon
              sx={{ color: 'text.primary', cursor: 'pointer' }}
              id="basic-column-dropdown"
              aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-column-dropdown'
            }}
          >
            <MenuItem>
              <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon><DeleteForeverIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      {/* Box List Card */}
      <ListCards cards={orderedCards}/>
      {/* Box Column Footer */}
      <Box sx={{
        height: (theme) => theme.trello.columnFooterHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2
      }}>
        <Button startIcon={<AddCardIcon />}>
          Add new Card
        </Button>
        <Tooltip title="Drag to move">
          <DragHandleIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Column