"use server"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

 export async function createTask(formData: FormData) {
    "use server"
    const userName = formData.get("name")
    const description = formData.get("description")
    const priority = formData.get("priority")
   console.log({ userName, description, priority })

   if(!userName || !description || !priority) {
    throw Error("Invalid data")
   }
    const newTask = await prisma.task.create({
      data: {
        name: userName as string,
        description: description as string,
        priority: priority as string
      }
    })
    console.log(newTask)
    redirect("/")

  }
