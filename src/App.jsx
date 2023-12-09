function App() {

  return (
    <main className="w-full px-10">

      {/*Menu e nome de usuario*/}
      <div className="relative w-full">
        <div className="right-0 flex flex-row gap-2 items-center justify-end m-4">
          <span className="text-lg">Usuario</span>
          <buttom>
            <img className="w-10 h-10" src=".\src\assets\iconUser.png" alt="iconUsuario" />
          </buttom>
          <button>
            <img className="w-9 h-9" src=".\src\assets\menuBar.png" alt="menuBar" />
          </button>
        </div>

        {/*Informações pessoais*/}
        <div className="my-6 relative w-full rounded-lg bg-yellow-50 border-2 border-yellow-400">
          <span className="aboslute ml-0 bg-yellow-400 font-bold rounded-lg px-2">
            Informações Principais
          </span>
          <div className="rounded-lg bg-gray-300 w-64 border-2 border-gray-400 flex items-center justify-center m-4">
            <span className="p-3 font-bold">
              Horas trabalhadas: 5:00 horas
            </span>
          </div>
        </div>

        {/*Banco de horas*/}
        <div className="my-6 relative w-full rounded-lg bg-yellow-50 border-2 border-yellow-400">
          <span className="aboslute ml-0 bg-yellow-400 font-bold rounded-lg px-2">
            Banco de Horas
          </span>
          <div className="rounded-lg bg-gray-300 w-64 border-2 border-gray-400 flex items-center justify-center m-4">
            <span className="p-3 font-bold">
              Saldo de horas: +1:27 horas
            </span>
          </div>
        </div>

        {/*Criação da tabela*/}
        <div className="my-6 relative w-full rounded-lg bg-yellow-50 border-2 border-yellow-400">
          <span className="aboslute ml-0 bg-yellow-400 font-bold rounded-lg px-2">
            Registro
          </span>
          <div className="rounded-lg w-40 bg-gray-300 border-2 border-gray-400 items-center justify-left m-4">
            <span className="flex flex-row items-center gap-2 p-3 font-bold">
              <buttom>
                <img className="w-8 h-8 " src=".\src\assets\calender.png" alt="calendario" />
              </buttom>
              09/12/2023
            </span>
          </div>
          <table className=" mb-4 max-w-screen-xl mx-4 table-auto border-separate md:border-spacing-1 border border-slate-950">
            <thead>
              <tr>
                <th className="border-2 w-28 border-slate-950">Horario</th>
                <th className="border-2 w-48 border-slate-950">Tipo de lançamento</th>
              </tr>
            </thead>
            <tbody >
              <tr className="items-center justify-center text-center">
                <td className="border border-slate-950">7:52</td>
                <td className="border border-slate-950">Registro Automtaico</td>
              </tr>
              <tr className="items-center justify-center text-center">
                <td className="border border-slate-950">12:52</td>
                <td className="border border-slate-950">Registro automatico</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex space-x-4">
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg">
            Registrar Ponto
          </button>

          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg">
            Registro Manual
          </button>
        </div>

      </div>


    </main>
  )
}

export default App
