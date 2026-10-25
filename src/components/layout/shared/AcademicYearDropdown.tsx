'use client'

// React Imports
import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

// MUI Imports
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import MenuList from '@mui/material/MenuList'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { useAcademicYearStore } from '@/stores/academicYearStore'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'
import { AcademicYearTypes } from '@/types/academicYear'

const AcademicYearDropdown = () => {
  // States
  const [open, setOpen] = useState(false)
  const { academicYear, listOfAcademicYear, selectedAcademicYearId, setSelectedAcademicYearId } = useAcademicYearStore()

  useEffect(() => {
    listOfAcademicYear()
  }, [listOfAcademicYear])

  useEffect(() => {
    if (selectedAcademicYearId === null && academicYear?.length) {
      setSelectedAcademicYearId(academicYear[0].id)
    }
  }, [academicYear, selectedAcademicYearId, setSelectedAcademicYearId])

  const selectedTitle =
    academicYear?.find((ay: AcademicYearTypes) => ay.id === selectedAcademicYearId)?.title ?? 'Select Academic Year'
  // Refs
  const anchorRef = useRef<HTMLDivElement>(null)

  // Hooks
  const router = useRouter()

  const { settings } = useSettings()

  const handleDropdownOpen = () => {
    !open ? setOpen(true) : setOpen(false)
  }

  const handleDropdownClose = (event?: globalThis.MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event?.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  const handleAcademicYear = (ay: AcademicYearTypes) => {
    setSelectedAcademicYearId(ay.id)
    setOpen(false)
  }

  return (
    <>
      <div ref={anchorRef}>
        <MenuItem onClick={handleDropdownOpen}>{selectedTitle}</MenuItem>
      </div>

      <Popper
        open={open}
        transition
        disablePortal
        placement='bottom-end'
        anchorEl={anchorRef.current}
        className='min-is-[240px] !mbs-3 z-[1]'
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-end' ? 'right top' : 'left top'
            }}
          >
            <Paper className={settings.skin === 'bordered' ? 'border shadow-none' : 'shadow-lg'}>
              <ClickAwayListener onClickAway={handleDropdownClose}>
                <MenuList>
                  {(academicYear ?? []).map((ay: AcademicYearTypes) => (
                    <MenuItem
                      className='mli-2 gap-3'
                      key={ay.id}
                      selected={ay.id === selectedAcademicYearId}
                      onClick={() => handleAcademicYear(ay)}
                    >
                      <i className='tabler-user' />
                      <Typography color='text.primary'>{ay.title}</Typography>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default AcademicYearDropdown
