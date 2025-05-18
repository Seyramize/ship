"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="bg-primary text-white p-4 flex flex-row justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-semibold">Live Chat</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleChat}
              className="h-8 w-8 text-white hover:bg-primary-foreground/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="p-4 h-64 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            <div className="space-y-4">
              <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
                <p className="text-sm">Hello! How can we help you today with your shipping needs?</p>
                <span className="text-xs text-muted-foreground block mt-1">Support Agent • Just now</span>
              </div>
            </div>
          </div>
          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex w-full gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
              />
              <Button size="sm">Send</Button>
            </div>
          </div>
        </div>
      ) : (
        <Button onClick={toggleChat} className="rounded-full h-14 w-14 shadow-lg bg-secondary hover:bg-secondary/90">
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
