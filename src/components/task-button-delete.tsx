import React from 'react'
import { Button } from './ui/button';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { removeTask } from '@/actions/tasks-actions';

function TaskButtonDelete({ taskId }: { taskId: number }) {

  return (
    <form action={removeTask}>
      <input type='hidden' name='taskId' value={taskId} />
      <Button variant='destructive' type='submit'>Delete</Button>
    </form>
  )
}

export default TaskButtonDelete