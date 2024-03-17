
const ItemCuenta = ({ cuenta, setmostrar, mostrar }) => {
    const { principal, tipo, saldo, numero_cuenta } = cuenta
    return (
        <>
            <div className={` ${!mostrar ? 'hidden' : 'mt-4 opacity-85 text-white border border-[#f4521b] mb-4 h-[140px] rounded-xl px-4 py-2'}`}>



                {principal ? <h2 className="text-lg mt-1"> Principal</h2> : null}
                <div className="flex justify-between items-center">
                    <p className="mt-4 text-xl">{`Tipo: ${tipo}`}</p>
                    <p className="mt-4 text-xl">N° de cuenta: {numero_cuenta}</p>
                </div>
                <div className="flex justify-end -mt-2">
                    <p className="mt-6  text-xl">Saldo: <span className="font-bold">{saldo}</span></p>
                </div>
            </div>
        </>
    )
}

export default ItemCuenta