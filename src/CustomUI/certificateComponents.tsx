'use client'

import { Box, Card, Divider, Typography } from '@mui/material'

import type { certificateTypes, PageLayout } from '@/types/certificate'

const PAGE_SIZES: Record<PageLayout, { width: string; height: string }> = {
  A4_PORTRAIT: { width: '210mm', height: '297mm' },
  A4_LANDSCAPE: { width: '297mm', height: '210mm' },
  CUSTOM: { width: '297mm', height: '210mm' } // fallback until custom sizes exist
}

const formatDate = (iso?: string) =>
  iso ? new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : ''

const FooterItem = ({ label }: { label?: string | null }) => (
  <Box sx={{ minWidth: 160, textAlign: 'center' }}>
    <Divider sx={{ mb: 1 }} />
    <Typography sx={{ fontFamily: 'inherit' }}>{label}</Typography>
  </Box>
)

type CertificateComponentProps = {
  data?: certificateTypes | null
}

const CertificateComponent = ({ data }: CertificateComponentProps) => {
  if (!data) return null

  const { width, height } = PAGE_SIZES[data.pageLayout] ?? PAGE_SIZES.A4_LANDSCAPE
  const isPortrait = data.pageLayout === 'A4_PORTRAIT'

  return (
    <Card
      sx={{
        width,
        height,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 10,
        fontFamily: data.bodyFont ?? 'inherit'
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '150px' }}>
        <Typography sx={{ fontFamily: 'inherit' }}>{data.HeaderLeftText}</Typography>
        <Typography sx={{ fontFamily: 'inherit' }}>{formatDate(data.date)}</Typography>
      </Box>

      {/* Body */}
      <Typography
        sx={{
          textAlign: 'center',
          fontFamily: 'inherit',
          fontSize: `${data.fontSize}px`,
          px: isPortrait ? 6 : 12
        }}
      >
        {data.body}
      </Typography>

      {/* Footer */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: '150px' }}>
        <FooterItem label={data.footerLeftText} />
        <FooterItem label={data.FooterCenterText} />
        <FooterItem label={data.FooterRightText} />
      </Box>
    </Card>
  )
}

export default CertificateComponent
