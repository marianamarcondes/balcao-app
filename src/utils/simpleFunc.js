export const tempPassword = Math.random().toString(6).slice(-6);

export function refreshPage() {
  window.location.reload();
}

export const filterCart = (data) => {

    const allIds = data.map((item) => {
      return item.properties.id;
    });

    const IdsWithoutRepeatData = allIds.filter(function (item, index, self) {
      return self.indexOf(item) === index;
    });
  
  return IdsWithoutRepeatData;
};
