// dateUtils.jsx

// Função para determinar o turno com base na hora
export const determinarTurno = (hora) => {
    if (hora >= 6 && hora < 12) {
        return 'Matutino';
    } else if (hora >= 12 && hora < 18) {
        return 'Vespertino';
    } else {
        return 'Noturno';
    }
};

// Função para obter os dias do mês
export const obterDiasDoMes = () => {
    const dataAtual = new Date();
    const ultimoDia = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0).getDate();
    return Array.from({ length: ultimoDia }, (_, i) => i + 1);
};
