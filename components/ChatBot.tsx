"use client"

import { useState } from 'react'
import { useChat } from 'ai/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, X } from 'lucide-react'

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquare />
      </Button>
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80 h-96 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>TransMENA Assistant</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <ScrollArea className="flex-grow mb-4">
              {messages.map(m => (
                <div key={m.id} className={`mb-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded-lg ${m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    {m.content}
                  </span>
                </div>
              ))}
            </ScrollArea>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask a question..."
              />
              <Button type="submit">Send</Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  )
}

