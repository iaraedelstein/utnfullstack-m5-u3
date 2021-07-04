const estadoInicial = {
  numero: 0,
};

export default function reducer(state = estadoInicial, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return {
        numero: state.numero + 1,
      };
    case 'DECREMENTAR':
      return {};
    case 'RESET':
      return {
        numero: 0,
      };
    default:
      return state;
  }
}
