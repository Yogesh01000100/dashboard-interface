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
  {
    id: 5,
    name: "Michael Scott",
    email: "michael@example.com",
    orders: 10,
    status: "Active",
  },
  {
    id: 6,
    name: "Pam Beesly",
    email: "pam@example.com",
    orders: 4,
    status: "Pending",
  },
  {
    id: 7,
    name: "Dwight Schrute",
    email: "dwight@example.com",
    orders: 6,
    status: "Active",
  },
  {
    id: 8,
    name: "Jim Halpert",
    email: "jim@example.com",
    orders: 7,
    status: "Banned",
  },
  {
    id: 9,
    name: "Kevin Malone",
    email: "kevin@example.com",
    orders: 3,
    status: "Pending",
  },
  {
    id: 10,
    name: "Angela Martin",
    email: "angela@example.com",
    orders: 9,
    status: "Active",
  },
  {
    id: 11,
    name: "Oscar Martinez",
    email: "oscar@example.com",
    orders: 2,
    status: "Pending",
  },
  {
    id: 12,
    name: "Toby Flenderson",
    email: "toby@example.com",
    orders: 1,
    status: "Banned",
  },
  {
    id: 13,
    name: "Stanley Hudson",
    email: "stanley@example.com",
    orders: 5,
    status: "Active",
  },
  {
    id: 14,
    name: "Phyllis Vance",
    email: "phyllis@example.com",
    orders: 6,
    status: "Pending",
  },
  {
    id: 15,
    name: "Meredith Palmer",
    email: "meredith@example.com",
    orders: 4,
    status: "Active",
  },
  {
    id: 16,
    name: "Ryan Howard",
    email: "ryan@example.com",
    orders: 8,
    status: "Banned",
  },
  {
    id: 17,
    name: "Kelly Kapoor",
    email: "kelly@example.com",
    orders: 10,
    status: "Active",
  },
  {
    id: 18,
    name: "Creed Bratton",
    email: "creed@example.com",
    orders: 3,
    status: "Pending",
  },
  {
    id: 19,
    name: "Darryl Philbin",
    email: "darryl@example.com",
    orders: 7,
    status: "Active",
  },
  {
    id: 20,
    name: "Holly Flax",
    email: "holly@example.com",
    orders: 9,
    status: "Pending",
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
