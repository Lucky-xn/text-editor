import { Icon } from "@iconify/react";

function MenuEditorBar() {
   return <>
      <div className="absolute top-3 w-[35%] h-10 bg-white rounded-full flex items-center px-20 shadow-lg shadow-black/30">
         <div className="flex w-full gap-1">
            <div className="flex gap-1 items-center border-r border-gray-300">
               <span className="p-1 rounded-md hover:bg-gray-200 cursor-pointer">
                  <Icon icon="mdi:plus" className="text-black h-4.5 w-4.5" />
               </span>
               <input type="text" className="px-3 font-semibold bg-gray-300 outline-0 ring-0 text-gray-700 w-10 rounded-md" />
               <span className="p-1 rounded-md hover:bg-gray-200 cursor-pointer">
                  <Icon icon="mdi:minus" className="text-black h-4.5 w-4.5" />
               </span>
            </div>
            <div className="flex border-r border-gray-300">
               <span className="flex items-center p-1 rounded-md hover:bg-gray-200 cursor-pointer">
                  <Icon icon="mdi:format-bold" className="text-black h-4.5 w-4.5" />
               </span>
               <span className="flex items-center p-1 rounded-md hover:bg-gray-200 cursor-pointer">
                  <Icon icon="mdi:format-italic" className="text-black h-4.5 w-4.5" />
               </span>
               <span className="flex items-center p-1 rounded-md hover:bg-gray-200 cursor-pointer">
                  <Icon icon="mdi:format-underline" className="text-black h-4.5 w-4.5" />
               </span>
               <span className="flex items-center p-1 rounded-md hover:bg-gray-200 cursor-pointer">
                  <Icon icon="mdi:format-strikethrough" className="text-black h-4.5 w-4.5" />
               </span>
               <span className="flex items-center p-1 rounded-md hover:bg-gray-200 cursor-pointer">
                  <Icon icon="mdi:code-tags" className="text-black h-4.5 w-4.5" />
               </span>
            </div>
         </div>
      </div>
   </>
}

export default MenuEditorBar;