import { useHistory } from "react-router-dom";

function Navigator() {
  const history = useHistory();

 return function navigateTo(path) {
    history.push(path);
  };

};

export default Navigator;