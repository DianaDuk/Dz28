import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const todoSchema = z.object({
    task: z
    .string()
    .min(5, " The task must be at least 5 characters long"),
});

export function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const{
        register, 
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        resolver: zodResolver(todoSchema),
    });

    const onSubmit = (data) => {
        setTasks([... tasks, data.task]);
        reset();
    };

    return(
        <div className="max-v-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2x1 font-bold mb-4">TODO List</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="task" className="block font-medium text-gray-700">Task</label>
                    <input
                    id="task"
                    type="text"
                    {...register("task")}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {errors.task && (
                        <p className="text-red-500 text-sm mt-1">{errors.task.message}</p>
                    )}
                </div>
                <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >Add task
                </button>
            </form>
            <ul className="mt-6 space-y-2">
                {tasks.map((task, index) => (
                <li
                key={index}
                className="p-2 bg-gray-100 border border-gray-300 rounded-md"
                >
                    {task}
                </li>
            ))}
            </ul>
        </div>
    );
}