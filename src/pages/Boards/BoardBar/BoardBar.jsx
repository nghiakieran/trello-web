import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Tooltip title={board?.description}>
          <Chip
            icon={<DashboardIcon />}
            label={board?.title}
            clickable
            sx={MENU_STYLES}
          />
        </Tooltip>
        <Chip
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<BoltIcon />}
          label="Automation"
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<FilterListIcon />}
          label="Filters"
          clickable
          sx={MENU_STYLES}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={5}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root':{
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title='chinghia'>
            <Avatar
              alt="chinghia"
              src="https://images.unsplash.com/photo-1495584816685-4bdbf1b5057e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Tooltip>
          <Tooltip title='chinghia'>
            <Avatar
              alt="chinghia"
              src="https://plus.unsplash.com/premium_photo-1675368244123-082a84cf3072?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Tooltip><Tooltip title='chinghia'>
            <Avatar
              alt="chinghia"
              src="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Tooltip><Tooltip title='chinghia'>
            <Avatar
              alt="chinghia"
              src="https://images.unsplash.com/photo-1530908295418-a12e326966ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Tooltip><Tooltip title='chinghia'>
            <Avatar
              alt="chinghia"
              src="https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Tooltip><Tooltip title='chinghia'>
            <Avatar
              alt="chinghia"
              src="https://images.unsplash.com/photo-1529419412599-7bb870e11810?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
