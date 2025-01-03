import { revalidatePath } from "next/cache"
import {auth, currentUser} from "@clerk/nextjs/server"

type MockUser = {
    id: number;
    name: string;
}
export default async function MockUser() {

    const authObj = await auth()
    const userObj = await currentUser()

    console.log({
        authObj,
        userObj,
    })

    const response = await fetch("https://67652ed952b2a7619f5eaa50.mockapi.io/users")
    const users = await response.json()

    async function addUser(formData: FormData) {
        "use server"
        const name = formData.get("name")
        const res = await fetch(
            "https://67652ed952b2a7619f5eaa50.mockapi.io/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name})
            }
        )
        const newUser = await res.json()
        revalidatePath("/mock-users")
        console.log(newUser)
    }

    return (
        <div>
            <form action={addUser} className="p-4">
                <input
                    type="text"
                    name="name"
                    required
                    className="border p-2 mr-2 rounded" />
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded">Add user</button>
            </form>
            <div className="grid grid-cols-4 gap-4 p-4">
                {users.map((user: MockUser) => (
                    <div
                        key={user.id}
                        className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                    >
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    )
}
