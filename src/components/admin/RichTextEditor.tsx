import { useEditor, EditorContent } from '@tiptap/react'
import { useEffect, useRef } from 'react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

interface Props { content: string; onChange: (html: string) => void; placeholder?: string }

export default function RichTextEditor({ content, onChange, placeholder }: Props) {
  const hasInitialized = useRef(false)
  const editor = useEditor({ extensions: [StarterKit, Placeholder.configure({ placeholder: placeholder ?? 'Start writing…' })], content: '', immediatelyRender: false, onUpdate: ({ editor }) => onChange(editor.getHTML()), })

  useEffect(() => {
    if (!editor || hasInitialized.current) return
    if (content) { hasInitialized.current = true; editor.commands.setContent(content, { emitUpdate: false }) }
  }, [content, editor])

  return (
    <div>
      {editor && <div />}
      <EditorContent editor={editor} />
    </div>
  )
}
