import React, { useState, useEffect, Fragment } from 'react';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import { determinarTurno, obterDiasDoMes } from '../../utils/dateUtils';
import MyDialog from '../Common/Modal';


function RegistroPonto() {
  const [dataFormatada, setDataFormatada] = useState('');
  const [registro, setRegistro] = useState([]);
  const [primeiraVezNoTurno, setPrimeiraVezNoTurno] = useState(true);
  const [diasDoMes, setDiasDoMes] = useState(obterDiasDoMes());
  const [entrada, setEntrada] = useState(true);
  const [turnoAtual, setTurnoAtual] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);

  }

  const closeDialogAndRefresh = () => {
    setIsDialogOpen(false);
    // Coloque aqui a lógica de atualização ou recarregamento desejada
  };

  useEffect(() => {
    const atualizarDiaDaSemana = () => {
      const dataAtual = new Date();
      const novoTurno = determinarTurno(dataAtual.getHours());
      setDiasDoMes(obterDiasDoMes());
      setPrimeiraVezNoTurno(true);
      setEntrada(dataAtual.getHours() < 12);
      setRegistro([]);
      setTurnoAtual(novoTurno);

      const opcoesDeFormato = { day: 'numeric', month: 'numeric', year: 'numeric' };
      setDataFormatada(dataAtual.toLocaleDateString('pt-BR', opcoesDeFormato));
    };

    atualizarDiaDaSemana();

    const intervalId = setInterval(atualizarDiaDaSemana, 60000); // Atualiza a cada minuto
    return () => clearInterval(intervalId);
  }, []);


  const registrarPonto = () => {
    const dataAtual = new Date();
    const diaAtual = dataAtual.getDate();
    const indiceDiaAtual = obterDiasDoMes().indexOf(diaAtual);
    const horaAtual = dataAtual.getHours();
    const minutosAtual = dataAtual.getMinutes();
    const tipo = horaAtual < 12 ? 'Entrada' : 'Saida';


    setRegistro((prevRegistros) => {
      const novosRegistros = [...prevRegistros];
      const registroIndex = indiceDiaAtual * 2 + (tipo === 'Saida' && !primeiraVezNoTurno ? 1 : 0);

      if (registroIndex < novosRegistros.length) {
        // Sobrescrever independentemente do tipo
        novosRegistros[registroIndex] = {
          tipo: tipo,
          turno: turnoAtual,
          horario: `${horaAtual}:${minutosAtual}`,
          cor: '',
        };
      } else {
        // Adicionar novo registro se não existir
        novosRegistros.push({
          tipo: tipo,
          turno: turnoAtual,
          horario: `${horaAtual}:${minutosAtual}`,
          cor: '',
        });
      }

      return novosRegistros;
    });

    setEntrada(tipo === 'Entrada');
    setPrimeiraVezNoTurno(false);
  };



  return (
    <div className="w-full px-10">
      <Header />
      <Sidebar />
      {/*Menu e nome de usuario*/}
      <div className="relative w-full">
        <div className="right-0 flex flex-row gap-2 items-center justify-end m-4">
          <span className="text-lg">Usuario</span>
          <button>
            <img className="w-10 h-10" src=".\src\assets\iconUser.png" alt="iconUsuario" />
          </button>
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
              <button>
                <img className="w-8 h-8 " src=".\src\assets\calender.png" alt="calendario" />
              </button>
              {dataFormatada}
            </span>
          </div>
          <table className=" mb-4 max-w-screen-xl mx-4 table-auto border-separate md:border-spacing-1 border border-slate-950">
            <thead>
              <tr>
                <th rowSpan='3' className="border-2 w-28 border-slate-950 font-bold text-center">Dia</th>

                {['Matutino', 'Vespertino', 'Noturno'].map((turno, index) => (
                  <React.Fragment key={index}>
                    <th colSpan="4" className='border-2 w-28 border-slate-950 font-bold text-center'>
                      {turno}
                    </th>
                  </React.Fragment>
                ))}
              </tr>

              <tr>
                <th className="border-2 w-28 border-slate-950 font-bold text-center">Horário</th>
                <th className="border-2 w-28 border-slate-950 font-bold text-center">Tipo</th>
                <th className="border-2 w-28 border-slate-950 font-bold text-center">Horário</th>
                <th className="border-2 w-28 border-slate-950 font-bold text-center">Tipo</th>
                <th className="border-2 w-28 border-slate-950 font-bold text-center">Horário</th>
                <th className="border-2 w-28 border-slate-950 font-bold text-center">Tipo</th>
                <th className="border-2 w-28 border-slate-950 font-bold text-center">Horário</th>
                <th className="border-2 w-28 border-slate-950 font-bold text-center">Tipo</th>
                <th className="border-2 w-28 border-slate-950 font-bold text-center">Horário</th>
                <th className="border-2 w-28 border-slate-950 font-bold text-center">Tipo</th>
                <th className="border-2 w-28 border-slate-950 font-bold text-center">Horário</th>
                <th className="border-2 w-28 border-slate-950 font-bold text-center">Tipo</th>
              </tr>

              <tr>
                {['Entrada', 'Saida', 'Entrada', 'Saida', 'Entrada', 'Saida'].map((tipo, index) => (
                  <th colSpan="2" key={index} className='border-2 w-28 border-slate-950 font-bold text-center'>
                    {tipo}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Coluna para os dias do mês */}

              {diasDoMes.map((dia, index) => {
                const diaDaSemana = new Date(new Date().getFullYear(), new Date().getMonth(), dia).getDay();

                return (
                  <tr key={`dia-${index}`}>
                    <td className={`border-2 w-28 border-slate-950 text-center`}>
                      {dia}
                    </td>
                    {['Matutino', 'Vespertino', 'Noturno'].map((turno, turnoIndex) => (
                      <React.Fragment key={`${turno}-${index}`}>
                        {[1, 2].map((item) => {
                          const isFimDeSemana = diaDaSemana === 0 || diaDaSemana === 6;
                          return (
                            <React.Fragment key={`folga-${item}`}>
                              <td
                                className={`border-2 w-14 border-slate-950 text-center ${isFimDeSemana ? 'text-red-500' : ''}`}>
                                {isFimDeSemana ? 'Folga' : ''}
                              </td>
                              <td
                                className={`border-2 w-14 border-slate-950 text-center ${isFimDeSemana ? 'text-red-500' : ''
                                  }`}
                              >
                                {isFimDeSemana ? 'Folga' : ''}
                              </td>
                            </React.Fragment>
                          );
                        })}
                      </React.Fragment>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='flex flex-itens justify-center my-8'>
          <div className="flex space-x-4">
            <button
              className={`bg-green-500 text-white font-bold py-2 px-4 rounded-lg`}
              onClick={registrarPonto}
            >
              Registrar Ponto
            </button>

            <button
              type="button"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg"
              onClick={openDialog} // Chama a função para abrir o modal
            >
              Registro Manual
            </button>

            {/* Renderiza o componente MyDialog com base no estado */}

            {isDialogOpen && (
              <MyDialog isOpen={isDialogOpen} onClose={() => closeDialogAndRefresh()} />
            )}



          </div>
        </div>
      </div>
    </div >
  );
}

export default RegistroPonto;
