export const changeInput = (field, input) => {
  const { index, name, value } = input;

  const newField = field.map((item, i) => {
    if (index === i) return { ...item, [name]: value };
    return item;
  });

  return newField;
};

export const deleteInput = (field, id) =>
  field.filter((item, index) => index !== id);
