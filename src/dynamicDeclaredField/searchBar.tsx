import CustomTextField from '@/@core/components/mui/TextField'
import { Card, CardContent, Grid } from '@mui/material'

type Item = { id: string | number; label: string; placeHolderName: string; disabled?: boolean }
type Props = { items: Item[] }

function SearchBarLayout({ items }: Props) {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Grid container spacing={4}>
          {items.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <CustomTextField
                fullWidth
                label={item.label}
                placeholder={item.placeHolderName}
                disabled={item.disabled}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default SearchBarLayout
