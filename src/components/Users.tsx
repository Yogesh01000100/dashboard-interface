import { FC, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { Visibility, Edit } from "@mui/icons-material";

interface User {
  id: number;
  name: string;
  email: string;
  orders: number;
  status: "Active" | "Pending" | "Banned";
}

const usersData: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    orders: 5,
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    orders: 3,
    status: "Pending",
  },
  {
    id: 3,
    name: "Alice Brown",
    email: "alice@example.com",
    orders: 8,
    status: "Active",
  },
  {
    id: 4,
    name: "Robert Green",
    email: "robert@example.com",
    orders: 2,
    status: "Banned",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Active":
      return (
        <span className="px-2 py-1 text-xs border border-gray-400 font-semibold text-green-600 bg-green-100 rounded-md">
          Active
        </span>
      );
    case "Pending":
      return (
        <span className="px-2 py-1 text-xs border border-gray-400 font-semibold text-yellow-600 bg-yellow-100 rounded-md">
          Pending
        </span>
      );
    case "Banned":
      return (
        <span className="px-2 py-1 text-xs border border-gray-400 font-semibold text-red-600 bg-red-100 rounded-md">
          Banned
        </span>
      );
    default:
      return null;
  }
};

const Users: FC = () => {
  const [users] = useState<User[]>(usersData);

  return (
    <div className="p-6 bg-white/80 backdrop-blur-lg rounded-xl border border-cyan-300 shadow-md w-[95%] max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Users
      </h3>

      <div className="overflow-x-auto">
        <Table className="w-full rounded-xl">
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell className="font-semibold text-gray-700">ID</TableCell>
              <TableCell className="font-semibold text-gray-700">
                Name
              </TableCell>
              <TableCell className="font-semibold text-gray-700">
                Email
              </TableCell>
              <TableCell className="font-semibold text-gray-700">
                Orders
              </TableCell>
              <TableCell className="font-semibold text-gray-700">
                Status
              </TableCell>
              <TableCell className="font-semibold text-gray-700 text-center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={user.id}
                className={`transition ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <TableCell className="py-3">{user.id}</TableCell>
                <TableCell className="py-3">{user.name}</TableCell>
                <TableCell className="py-3">{user.email}</TableCell>
                <TableCell className="py-3 font-semibold text-gray-900">
                  {user.orders}
                </TableCell>
                <TableCell className="py-3">
                  {getStatusBadge(user.status)}
                </TableCell>
                <TableCell className="text-center flex mx-2 justify-center py-3">
                  <Visibility
                    className="text-gray-400 cursor-pointer"
                    fontSize="small"
                  />
                  <Edit
                    className="text-blue-400 cursor-pointer"
                    fontSize="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
