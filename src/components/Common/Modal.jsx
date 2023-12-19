import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

export default function MyModal(props) {
    let [isOpen, setIsOpen] = useState(false)
    let [inputValue, setInputValue] = useState('')
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [justification, setJustification] = useState('');
    const [selectedJustification, setSelectedJustification] = useState(null);

    const justificationOptions = [
        { value: 'option1', label: 'Atestado' },
        { value: 'option2', label: 'Doença' },
        { value: 'option2', label: 'Problemas familiares' },
        { value: 'option2', label: 'Problemas na plantação de mandioca' },
        { value: 'option2', label: 'Problemas Familiares' },
        // Adicione mais opções conforme necessário
    ];


    useEffect(() => {
        openModal();
    }, []);


    function closeModal() {
        setIsOpen(false)
        onClose();
    };

    function openModal() {
        setIsOpen(true)
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleJustificationChange = (event) => {
        setJustification(event.target.value);
    };

    const handleJustificationSelectChange = (selectedOption) => {
        setSelectedJustification(selectedOption);
    };

    const handleSubmit = () => {
        // Lógica para lidar com os dados submetidos
        console.log('Data:', selectedDate);
        console.log('Hora:', selectedTime);
        console.log('Justificativa:', justification);
        console.log('Tipo de Justificativa:', selectedJustification);
        // Limpar os campos ou realizar outras ações necessárias
        closeModal();
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className='mt-4'>
                                        <label htmlFor="inputField" className="text-sm text-gray-700 mr-2">
                                            Informe a data:
                                        </label>
                                        <DatePicker
                                            id="datepicker"
                                            selected={selectedDate}
                                            onChange={(date) => setSelectedDate(date)}
                                            className='mt-1 p-2 border border-gray-300 rounded-md w-fullin'
                                            open={false}
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="time" className="text-sm text-gray-700">
                                            Informe a hora:
                                        </label>
                                        <input
                                            type="time"
                                            id="time"
                                            value={selectedTime}
                                            onChange={handleTimeChange}
                                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <label htmlFor="justification" className="text-sm text-gray-700">
                                            Informe a justificativa:
                                        </label>
                                        <input
                                            type="text"
                                            id="justification"
                                            value={justification}
                                            onChange={handleJustificationChange}
                                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <label htmlFor="justificationType" className="text-sm text-gray-700">
                                            Tipo de Justificativa:
                                        </label>
                                        <Select
                                            id="justificationType"
                                            options={justificationOptions}
                                            value={selectedJustification}
                                            onChange={handleJustificationSelectChange}
                                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                            menuPortalTarget={document.body}
                                            styles={{
                                                menuPortal: (base) => ({ ...base, zIndex: 9999 }), // Defina um valor alto para zIndex
                                            }}
                                        />
                                    </div>


                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={() => props.onClose()}
                                        >
                                            Enviar para Análise
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}


