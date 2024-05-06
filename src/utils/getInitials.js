const getInitials = (text) => {
    const stringArray = text.split(' ');
    const firstWord = stringArray?.[0] || '';
    const secondWord = stringArray?.[1] || '';

    const firstInitial = firstWord.substring(0, 1);
    const secondInitial = secondWord.substring(0, 1);
    return firstInitial.toUpperCase() + secondInitial.toUpperCase();
  };
  
  export default getInitials;