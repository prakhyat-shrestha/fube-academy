'use client'
import CustomTextField from '@/@core/components/mui/TextField'
import { Typography, MenuItem, CardActions, Button } from '@mui/material'
import CustomIconButton from '@core/components/mui/IconButton'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import { useEditor, EditorContent } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { Placeholder } from '@tiptap/extension-placeholder'
import { TextAlign } from '@tiptap/extension-text-align'
import type { Editor } from '@tiptap/core'
import Divider from '@mui/material/Divider'
import { useState } from 'react'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const EditorToolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null
  }
  const [selectedFont, setSelectedFont] = useState('Times New Roman')

  // Handle font change
  const handleFontChange = (event: React.ChangeEvent<{ value: string }>) => {
    const newFont = event.target.value
    setSelectedFont(newFont)

    if (editor) {
      if (newFont === 'defaultFontName') {
        editor.chain().focus().unsetFontFamily().run() // Reset to default
      } else {
        editor.chain().focus().setFontFamily(newFont).run()
      }
    }
  }
  return (
    <div className='flex flex-wrap gap-x-3 gap-y-1 p-6'>
      <CustomIconButton
        {...(editor.isActive('bold') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Bold'
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <i className='tabler-bold' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('underline') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Underline'
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <i className='tabler-underline' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('italic') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Italic'
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i className='tabler-italic' />
      </CustomIconButton>

      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Remove Font Style'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className='tabler-typography-off' />
      </CustomIconButton>

      <CustomIconButton
        {...(editor.isActive({ textAlign: 'justify' }) && { color: 'primary' })}
        style={{ background: 'transparent', border: 'none' }}
        variant='outlined'
        size='small'
        title='Font Family'
      >
        <CustomTextField
          select
          value={selectedFont}
          onChange={handleFontChange}
          required
          InputProps={{
            style: {
              height: '25px',
              marginTop: '5px' // Reduce inner padding to reduce height
            }
          }}
          fullWidth
          variant='standard'
          style={{ background: 'transparent', height: '5px', marginTop: '-30px' }}
        >
          <MenuItem value='Times New Roman'>
            <span style={{ fontFamily: 'Times New Roman' }}>Times New Roman</span>
          </MenuItem>
          <MenuItem value='Arial'>
            <span style={{ fontFamily: 'Arial' }}>Arial</span>
          </MenuItem>
          <MenuItem value='Poppins'>
            <span style={{ fontFamily: 'Poppins' }}>Poppins</span>
          </MenuItem>
          <MenuItem value='Brush Script MT'>
            <span style={{ fontFamily: 'Brush Script MT' }}>Brush Script MT</span>
          </MenuItem>
          <MenuItem value='Impact'>
            <span style={{ fontFamily: 'Impact' }}>Impact</span>
          </MenuItem>
        </CustomTextField>
      </CustomIconButton>

      <CustomIconButton
        {...(editor.isActive({ textAlign: 'left' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Align Left'
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        <i className='tabler-align-left' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'center' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Align Center'
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
      >
        <i className='tabler-align-center' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'right' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Align Right'
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        <i className='tabler-align-right' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'justify' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Justify Full'
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
      >
        <i className='tabler-align-justified' />
      </CustomIconButton>
    </div>
  )
}

const ChequeLayout = () => {
  const defaultContent = `
    <p>
      This is a radically reduced version of Tiptap. It has support for a document with paragraphs and text. That's it. It's probably too much for real minimalists, though.
    </p>
    <br />
    <p>
      The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
    </p>
  `
  const editor = useEditor({
    extensions: [
      StarterKit,
      FontFamily.configure({
        types: ['textStyle'] // Ensure FontFamily applies to textStyle
      }),
      TextStyle, // Add TextStyle extension to apply inline styles
      Placeholder.configure({
        placeholder: 'Write something here...'
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      Underline
    ],
    content: defaultContent
  })
  return (
    <>
      <div className='cheque' style={{ marginLeft: '-18%', width: '120%' }}>
        <CustomTextField label='GATEWAY NAME' defaultValue={'Cheque'} style={{ width: '100%' }} />{' '}
        <Typography component='h3' variant='h6' style={{ marginTop: '10px', fontSize: '.8rem' }}>
          CHEQUE DETAILS
        </Typography>
        <div className='border rounded-md mt-2'>
          <EditorToolbar editor={editor} />
          <Divider />
          <EditorContent editor={editor} className='bs-[200px] w-[100%] overflow-y-auto flex' />
        </div>
      </div>

      {/* Button */}
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant='contained'>
          <CheckSharpIcon sx={{ mr: 1 }} />
          UPDATE
        </Button>
      </CardActions>
    </>
  )
}

export default ChequeLayout
