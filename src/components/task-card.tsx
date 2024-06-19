import { Task } from '@prisma/client'
import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card'
import { Badge } from 'lucide-react'
import clsx from 'clsx'
import { Button } from './ui/button'

function TaskCard({ task }: { task: Task }) {
  return (
    <Card key={task.id}>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>
          {task.name}
        </CardTitle>
        <Badge className={
          clsx({

            "bg-red-500": task.priority === "high",
            "bg-yellow-500": task.priority === "medium",
            "bg-green-500": task.priority === "low",
            "bg-blue-500": task.priority === "urgent"

          })
        }>
          {task.priority}
        </Badge>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
        <span className="text-slate-600">{new Date(task.createdAt).toLocaleDateString()}</span>
      </CardContent>
      <CardFooter className="flex gap-x-2 justify-end">
        <Button>
          editar
        </Button>
        <Button variant={"destructive"}>
          delete
        </Button>
      </CardFooter>
    </Card>
  )
}

export default TaskCard