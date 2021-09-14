export const changeInput = (field, input) => {
  const { i, name, value } = input;

  const newField = field.map((item, index) => {
    if (index === i) return { ...item, [name]: value };
    return item;
  });

  return newField;
};

export const deleteInput = (field, id) =>
  field.filter((item, index) => index !== id);
