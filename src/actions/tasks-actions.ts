"use server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

//Creamos una tarea -> le pasamos el fromData del dell taskform
 export async function createTask(formData: FormData) {
   "use server"
    const nameName = formData.get("name")  
    const description = formData.get("description")
    const priority = formData.get("priority")
   
   console.log({ nameName, description, priority })

   if(!nameName || !description || !priority) {
    throw Error("Invalid data")
   }
    const newTask = await prisma.task.create({
      data: {
        name: nameName as string,
        description: description as string,
        priority: priority as string
      }
    })
   
    console.log(newTask)
    redirect("/")

}
  
//actualizar una tarea -> le pasamos el formData del taskForm
export async function updateTask(formData: FormData) {
  "use server"
  
    const taskId = formData.get("id")?.toString();
    const nameName = formData.get("name")
    const description = formData.get("description")
    const priority = formData.get("priority")

    if (!taskId || !nameName || !description || !priority) {
      throw Error("Invalid data")
    }

    await prisma.task.update({
      where: {
        id: parseInt(taskId)
      },
      data: {
        name: nameName as string,
        description: description as string,
        priority: priority as string
      }
    })
    console.log("Actualizado" )
    redirect('/')
  }

  //remover una tarea -> le pasamos el formData del taskForm
 export  async function removeTask(formData: FormData) {
    "use server"
    const taskId = formData.get("taskId")?.toString();
    if (!taskId) return;

    await prisma.task.delete({
      where: {
        id: Number(taskId)
      }
    })
    revalidatePath('/')
  }

