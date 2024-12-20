// MUI Imports
import { useTheme } from '@mui/material/styles'

//Icon Imports MUI
import ArticleIcon from '@mui/icons-material/Article'
import DialpadIcon from '@mui/icons-material/Dialpad'
import SchoolIcon from '@mui/icons-material/School'
import SettingsIcon from '@mui/icons-material/Settings'
import QuizIcon from '@mui/icons-material/Quiz'
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction'
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { getDictionary } from '@/utils/getDictionary'
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, SubMenu, MenuItem } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
  scrollMenu: (container: any, isPerfectScrollbar: boolean) => void
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ dictionary, scrollMenu }: Props) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const { isBreakpointReached } = useVerticalNav()

  // Vars
  const { transitionDuration } = verticalNavOptions

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <MenuItem href='/home' icon={<i className='tabler-smart-home' />}>
          Home
        </MenuItem>
        <MenuItem href='/about' icon={<i className='tabler-info-circle' />}>
          About
        </MenuItem>
        <MenuItem href='/contact' icon={<DialpadIcon />}>
          Contact
        </MenuItem>
        <SubMenu label={dictionary['navigation'].student} icon={<SchoolIcon />}>
          <MenuItem href={`/studentcategory`}>Student Category</MenuItem>
          <MenuItem href={`/studentadd`}>Add Student</MenuItem>
          <MenuItem href={`/studentli`}>Student List</MenuItem>
          <MenuItem href={`/multiclassstudent`}>Multi Class Student</MenuItem>
          <MenuItem href={`/deletestudentrecord`}>Delete Student Record</MenuItem>
          <MenuItem href={`/unassignedstudent`}>Unassigned Student</MenuItem>
          <MenuItem href={`/studentattendance`}>Student Attendance</MenuItem>
          <MenuItem href={`/studentgroup`}>Student Group</MenuItem>
          <MenuItem href={`/studentpromote`}>Student Promote</MenuItem>
          <MenuItem href={`/disabledstudents`}>Disabled Students</MenuItem>
          <MenuItem href={`/subjectwiseattendance`}>Subject Wise Attendance</MenuItem>
          <MenuItem href={`/studentexport`}>Student Export</MenuItem>
          <MenuItem href={`/smssendingtime`}>SMS Sending Time</MenuItem>
        </SubMenu>

        <SubMenu label={dictionary['navigation'].library} icon={<ArticleIcon />}>
          <MenuItem href={'/libraryadd'}>Add Books</MenuItem>
          <MenuItem href={'/librarylist'}>Booklist</MenuItem>
          <MenuItem href={'/librarycat'}>Book Categories</MenuItem>
          <MenuItem href={'/librarymember'}>Add Member</MenuItem>
          <MenuItem href={'/libraryissue'}>Issue/Return Book</MenuItem>
          <MenuItem href={'/libraryissued'}>All Issued Books</MenuItem>
          <MenuItem href={'/librarysubject'}>Subject</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].examplan} icon={<QuizIcon />}>
          <MenuItem href={'/examadmitcard'}>Admit Card</MenuItem>
          <MenuItem href={'/examseatplan'}>Seat Plan</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].onlineexam} icon={<OnlinePredictionIcon />}>
          <MenuItem href={'/onlinequestiongroup'}>Question Group</MenuItem>
          <MenuItem href={'/onlinequestionbank'}>Question Bank</MenuItem>
          <MenuItem href={'/onlineexam'}>Online Exam</MenuItem>
        </SubMenu>

        <SubMenu label={dictionary['navigation'].hr} icon={<SensorOccupiedIcon />}>
          <MenuItem href={'/humandesignation'}>Designation</MenuItem>
          <MenuItem href={'/humandepartment'}>Department</MenuItem>
          <MenuItem href={'/humanaddstaff'}>Add Staff</MenuItem>
          <MenuItem href={'/humanstaffdir'}>Staff Directory</MenuItem>
          <MenuItem href={'/humanstafattend'}>Staff Attendance</MenuItem>
          <MenuItem href={'/humanpayroll'}>Payroll</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].accounts} icon={<AccountBalanceIcon />}>
          <MenuItem href={'/placc'}>Profit & Loss</MenuItem>
          <MenuItem href={'/income'}>Income</MenuItem>
          <MenuItem href={'/expense'}>Expense</MenuItem>
          <MenuItem href={'/chartacc'}>Chart Of Account</MenuItem>
          <MenuItem href={'/bankacc'}>Bank Account</MenuItem>
          <MenuItem href={'fundtrans'}>Fund Transfer</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].chat} icon={<ChatBubbleIcon />}>
          <MenuItem href={'/chatbox'}>Chat Box</MenuItem>
          <MenuItem href={'/invitation'}>Invitation</MenuItem>
          <MenuItem href={'/blockeduser'}>Blocked User</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].generalsettings} icon={<SettingsIcon />}>
          <MenuItem href={'/notification_settings'}>Notification Settings</MenuItem>
          <MenuItem href={'/basesetup'}>Base Setup</MenuItem>
          <MenuItem href={'/sms_settings'}>SMS Settings</MenuItem>
          <MenuItem href={'/weekend'}>Weekend</MenuItem>
          <MenuItem href={'/language_settings'}>Language Settings</MenuItem>
          <MenuItem href={'/backup_settings'}>Backup</MenuItem>
          <MenuItem href={'/language-list'}>Language</MenuItem>
          <MenuItem href={'/preloader-settings'}>Preloader Settings</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].communicate} icon={<SatelliteAltIcon />}>
          <MenuItem href={'/notice-list'}>Notice List</MenuItem>
          <MenuItem href={'/send-email-sms-view'}>Send Email/SMS</MenuItem>
          <MenuItem href={'/email-sms-log'}>Email SMS Log</MenuItem>
          <MenuItem href={'/events'}>Event List</MenuItem>
          <MenuItem href={'/academic-calendar'}>Calendar</MenuItem>
          <MenuItem href={'/email-template'}>Email Template</MenuItem>
          <MenuItem href={'/sms-template'}>SMS Template</MenuItem>
        </SubMenu>
      </Menu>
      {/* <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <GenerateVerticalMenu menuData={menuData(dictionary)} />
      </Menu> */}
    </ScrollWrapper>
  )
}

export default VerticalMenu
