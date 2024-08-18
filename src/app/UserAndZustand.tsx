"use client";
import { useUser } from "@/context/users";
import { type UserProps } from "@/context/users/types";
import { useBearStore } from "@/store/Bear.store";
import { Button } from "@/components/Button.component";
import { faker } from "@faker-js/faker";

export default function UserAndZustand() {
    const { bears, increase } = useBearStore();
    const { users, addUser, removeUser } = useUser();

    const fakeUser = {
        id: users.length + 1,
        name: faker.person.firstName(),
        address: faker.location.streetAddress({ useFullAddress: true }),
    } satisfies UserProps;

    return (
        <div className="flex flex-col w-screen justify-center items-center p-10">
            <div className="flex flex-row justify-center items-center mb-4">
                <h3 className="mr-4">
                    Number of Bears: <strong>{bears}</strong>
                </h3>
                <Button onClick={increase}>Increase the number of Bears</Button>
            </div>
            <div className="w-3/5">
                <ul>
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="flex flex-row justy-center mb-4"
                        >
                            <li className="w-2/5 ">
                                <span>
                                    <strong>{user.name}</strong>, live at{" "}
                                    {user.address}
                                </span>
                            </li>
                            <Button
                                variant={"destructive"}
                                onClick={() => removeUser(user.id)}
                            >
                                Remove
                            </Button>
                        </div>
                    ))}
                </ul>
                <Button onClick={() => addUser(fakeUser)}>Add an Users</Button>
            </div>
        </div>
    );
}
