// bg-[#2C3333]
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { FaCheck } from "react-icons/fa";
import { BiError } from "react-icons/bi";

const LoginResult = ({ data, setIsFinished }) => {
    console.log('LoginResult llamado ! !')
    console.log('data, desde login result:', data)

    const handlerLogin = () => {
        setIsFinished(prevState => (!prevState))
    }

    return (
        <>
            <div className="">
                <div className="flex justify-end">
                    <p onClick={handlerLogin} className="text-red-600 text-2xl cursor-pointer hover:bg-red-600 hover:text-white rounded-xl w-[40px] font-bold  px-2.5 py-1">X</p>
                </div>
                <Table className="">
                    <TableHeader className="bg-black  font-bold text-lg text-white">
                        <TableRow>
                            <TableHead>Doc</TableHead>
                            <TableHead>User</TableHead>
                            <TableHead>Pass</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="bg-[#2c2c2b] opacity-95 text-white">
                        {data.map(usuario => (
                            <TableRow key={usuario.du}>
                                <TableCell>{usuario.doc}</TableCell>
                                <TableCell>{usuario.usuario}</TableCell>
                                <TableCell>{usuario.pass}</TableCell>
                                <TableCell>{usuario.logeado ? <FaCheck /> : <BiError />}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </div>
        </>
    )
}

export default LoginResult    