import { useEditor, EditorContent } from "@tiptap/react";
import { FloatingMenu, BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";

const extensions = [StarterKit];

const Tiptap = () => {
   const editor = useEditor({
      extensions,
      editorProps: {
      handleKeyDown(view, event) {
        const isTab = event.key === "Tab" || event.code === "Tab";
        if (!isTab) return false;

        event.preventDefault();

        if (!editor) return true;

        if (editor.isActive("listItem")) {
          if (event.shiftKey) {
            editor.chain().focus().liftListItem("listItem").run();
          } else {
            editor.chain().focus().sinkListItem("listItem").run();
          }
          return true;
        }

        editor.chain().focus().insertContent("\u00A0\u00A0").run();
        return true;
      },
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
      content: '<p></p>',
   })
   return (
      <>
      <EditorContent editor={editor} className="mt-15 w-[40%] h-[100%] bg-white border border-gray-300 text-black p-10"/>
      <FloatingMenu editor={editor} />
      <BubbleMenu editor={editor} />
      </>
   )
}

export default Tiptap;