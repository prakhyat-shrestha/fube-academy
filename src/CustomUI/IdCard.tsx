'use client'

import React, { useEffect, useState } from 'react'
import { Avatar, Box, Card, Divider, Typography } from '@mui/material'
import { QRCodeSVG } from 'qrcode.react'
import { idCardTypes } from '@/types/idCard'

// Default backend URL
const BASE_URL = 'http://localhost:5000'

// Student details (replace with actual student API data)
export interface StudentDetails {
  id?: number
  name?: string
  admissionNo?: string
  className?: string
  address?: string
  photo?: string | File | null
  qrValue?: string
}

interface IdCardProps {
  config?: Partial<idCardTypes>
  student?: StudentDetails
  assetBaseUrl?: string
}

// Default configuration
const defaultConfig: Partial<idCardTypes> = {
  idCardTitle: 'Student ID Card',
  adminLayout: 'VERTICAL',
  applicableUser: 'STUDENT',
  profileImage: null,
  userPhotoStyle: 'ROUND',
  logo: null,
  signatureFile: null,
  admissionNo: true,
  name: true,
  class: true,
  address: true,
  photoFile: true,
  signature: true
}

// Default student information
const defaultStudent: StudentDetails = {
  id: 1,
  name: 'Irma Boyle',
  admissionNo: '83638',
  className: 'Class 1 (A)',
  address: 'Kathmandu, Nepal',
  photo: null
}

// Resolve backend image URL
const getImageUrl = (path?: string | File | null, baseUrl = BASE_URL): string => {
  if (!path || path instanceof File) return ''

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  return `${baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
}

// File preview hook
const useImagePreview = (file?: string | File | null, baseUrl = BASE_URL) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!file) {
      setImageUrl('')
      return
    }

    if (file instanceof File) {
      const objectUrl = URL.createObjectURL(file)
      setImageUrl(objectUrl)

      return () => URL.revokeObjectURL(objectUrl)
    }

    setImageUrl(getImageUrl(file, baseUrl))
  }, [file, baseUrl])

  return imageUrl
}

const PRIMARY = '#7138E8'
const PRIMARY_DARK = '#5125BD'
const NAVY = '#06142D'

const IdCard: React.FC<IdCardProps> = ({ config, student, assetBaseUrl = BASE_URL }) => {
  // Merge API configuration with defaults
  const settings = {
    ...defaultConfig,
    ...config
  }

  // Merge student information with defaults
  const user = {
    ...defaultStudent,
    ...student
  }

  // Image URLs
  const profileImage = useImagePreview(user.photo || settings.profileImage, assetBaseUrl)
  const logoImage = useImagePreview(settings.logo, assetBaseUrl)
  const signatureImage = useImagePreview(settings.signatureFile, assetBaseUrl)

  const isVertical = settings.adminLayout === 'VERTICAL'
  const isRound = settings.userPhotoStyle === 'ROUND'

  // QR code data
  const qrValue =
    user.qrValue ||
    JSON.stringify({
      studentId: user.id,
      admissionNo: user.admissionNo
    })

  // ---------- Reusable blocks ----------

  const photoBlock = settings.photoFile && (
    <Avatar
      src={profileImage || undefined}
      alt={user.name}
      variant={isRound ? 'circular' : 'rounded'}
      sx={{
        width: isVertical ? 96 : 84,
        height: isVertical ? 96 : 84,
        bgcolor: '#e5e7eb',
        border: `3px solid ${PRIMARY}`,
        flexShrink: 0
      }}
    />
  )

  const detailsBlock = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0.4,
        alignItems: isVertical ? 'center' : 'flex-start',
        textAlign: isVertical ? 'center' : 'left',
        minWidth: 0
      }}
    >
      {settings.name && (
        <Typography fontWeight={800} fontSize={isVertical ? 18 : 17} lineHeight={1.2} color='#1e293b'>
          {user.name}
        </Typography>
      )}

      {settings.class && (
        <Typography variant='body2' fontWeight={600} color={PRIMARY}>
          {user.className}
        </Typography>
      )}

      {settings.admissionNo && (
        <Typography variant='caption' color='text.secondary'>
          Admission No: <b>{user.admissionNo}</b>
        </Typography>
      )}

      {settings.address && (
        <Typography variant='caption' color='text.secondary' sx={{ overflowWrap: 'anywhere' }}>
          {user.address}
        </Typography>
      )}
    </Box>
  )

  const qrBlock = (
    <Box
      sx={{
        border: `2px solid ${PRIMARY}`,
        p: 0.75,
        borderRadius: 1.5,
        display: 'flex',
        bgcolor: '#fff'
      }}
    >
      <QRCodeSVG value={qrValue} size={isVertical ? 120 : 96} level='H' />
    </Box>
  )

  const signatureBlock = settings.signature && (
    <Box sx={{ width: 110, textAlign: 'center' }}>
      <Box sx={{ height: 32, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        {signatureImage && (
          <Box
            component='img'
            src={signatureImage}
            alt='Authorized Signature'
            sx={{ maxWidth: '100%', maxHeight: 32, objectFit: 'contain' }}
          />
        )}
      </Box>
      <Divider sx={{ borderColor: '#64748b' }} />
      <Typography variant='caption' color='text.secondary' sx={{ fontSize: 10 }}>
        Authorized Signature
      </Typography>
    </Box>
  )

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', p: 2 }}>
      <Card
        id='student-id-card'
        elevation={5}
        sx={{
          width: isVertical ? 300 : 500,
          height: isVertical ? 480 : 290,
          maxWidth: '100%',
          borderRadius: 3,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#fff',
          border: '1px solid #e5e7eb'
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
            color: '#fff',
            px: 2,
            height: 58,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: isVertical && !logoImage ? 'center' : 'space-between',
            gap: 1
          }}
        >
          <Typography fontWeight={800} fontSize={isVertical ? 18 : 20} noWrap>
            {settings.idCardTitle}
          </Typography>

          {logoImage && (
            <Box
              component='img'
              src={logoImage}
              alt='School Logo'
              sx={{
                width: 40,
                height: 40,
                objectFit: 'contain',
                bgcolor: '#fff',
                borderRadius: 1,
                p: 0.5,
                flexShrink: 0
              }}
            />
          )}
        </Box>

        {/* BODY */}
        {isVertical ? (
          // ---------- VERTICAL: stacked, centered ----------
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              px: 2,
              py: 1.5,
              minHeight: 0
            }}
          >
            {photoBlock}
            {detailsBlock}
            <Divider flexItem />
            {qrBlock}
            {signatureBlock && <Box sx={{ alignSelf: 'flex-end' }}>{signatureBlock}</Box>}
          </Box>
        ) : (
          // ---------- HORIZONTAL: info left, QR right ----------
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', minHeight: 0 }}>
            {/* Left: photo + details + signature */}
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                px: 2,
                py: 1.5
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, minWidth: 0 }}>
                {photoBlock}
                {detailsBlock}
              </Box>

              {signatureBlock && <Box sx={{ alignSelf: 'flex-start' }}>{signatureBlock}</Box>}
            </Box>

            <Divider orientation='vertical' flexItem />

            {/* Right: QR */}
            <Box
              sx={{
                width: 160,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                p: 1.5,
                bgcolor: '#faf8ff'
              }}
            >
              {qrBlock}
              <Typography variant='caption' color='text.secondary' sx={{ fontSize: 10 }}>
                Scan to verify
              </Typography>
            </Box>
          </Box>
        )}

        {/* FOOTER */}
        <Box
          sx={{
            bgcolor: NAVY,
            color: '#fff',
            textAlign: 'center',
            py: 0.75,
            flexShrink: 0
          }}
        >
          <Typography variant='caption' fontWeight={600}>
            {settings.applicableUser} ID CARD
          </Typography>
        </Box>
      </Card>
    </Box>
  )
}

export default IdCard
