import Cuenta from "./Cuenta"


const AccResult = ({ data }) => {
    console.log('hola, esta es la data en Acc Result: ', data)
    return (
        <>

            {data.map(userAcc =>
                <Cuenta cuentas={userAcc.cuentas} usuario={userAcc.doc} />
            )}



        </>
    )
}

export default AccResult   