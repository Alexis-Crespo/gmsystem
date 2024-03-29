import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";

import { FaLockOpen, FaRegTrashAlt, FaLock, FaSave } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export const TableCentral = ({ data, setData, setCentralUser }) => {
  const onDelete = async (e) => {
    const id = e.target.id;

    const userDelete = await axios.delete(
      `http://localhost:8080/api/usuarios/${id}`
    );

    if (userDelete.status == 200) {
      setCentralUser((prevState) => prevState + 1);
    }
  };

  return (
    <Table className="">
      <TableHeader className="bg-[#f4521b]  opacity-75 font-bold text-lg text-white">
        <TableRow>
          <TableHead>Documento</TableHead>
          <TableHead>Usuario</TableHead>
          <TableHead>Pass</TableHead>

          <TableHead className="relative ">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-[#2c2c2b]  text-white">
        {data.map((user) => {
          const { _id } = user;

          return (
            <TableRow>
              <TableCell>{user.doc}</TableCell>
              <TableCell>{user.usuario}</TableCell>
              <TableCell >{user.pass}</TableCell>

              <TableCell>
                <div className="flex ml-5">
                  <FaRegTrashAlt
                    id={_id}
                    onClick={onDelete}
                    className="text-red-700 mr-2 cursor-pointer"
                  />
                  <MdEdit className="text-blue-800 ml-2 cursor-pointer" />
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
