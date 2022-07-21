export const setColor = (props, type) => {
  let color = '';
  props = props.toString();

  if (type === 'rgb') {
    switch (true) {
      case props.includes('AMARILLO'):
        return (color = 'rgb(255,225,53,0.8)');
      case props.includes('VERDE'):
        return (color = 'rgb(55, 180, 0,0.32)');
      case props.includes('ROJO'):
        return (color = 'rgb(234,78,74,0.5)');
      default:
        return color;
    }
  } else {
    //PARA EXPORTAR EN EXCEL DEBEMOS DEFINIR EL COLOR EN CSS
    switch (true) {
      case props.includes('AMARILLO'):
        return (color = '#ffe135');
      case props.includes('VERDE'):
        return (color = '#37b400');
      case props.includes('ROJO'):
        return (color = '#EA4E4A');
      default:
        return color;
    }
  }
};
